import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator, Dimensions, StatusBar, Text } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import * as Permissions from 'expo-permissions'
import { downloadAsync, documentDirectory } from 'expo-file-system'
import axios from 'axios'
import { SafeArea } from '../../components/safeArea'
import { getPhotosURL } from '../../apis'
import Skeleton from 'react-native-skeleton-content'
import { ImageCard } from '../../components/imageCard/imageCard'
import { toastAlert } from '../../utils/toastAlert'
import { CustomTextInput } from '../../components/textInput/textInput'
import { colors } from '../../constants/colors'
import { IconButton } from '../../components/buttons/iconBtn'
import { ErrorDisplay } from '../../components/errorDisplay/errorDisplay'
// import { FlatList } from 'react-native-gesture-handler'

const screenHeight = Dimensions.get('window').height
let flatlistRef = React.createRef()

export const ImagesListScreen = ({ route, navigation }) => {
    const [images, setImages] = useState([])
    const [page, setPage] = useState({ currentPage: 1, totalPages: 1 })
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [photoName, setPhotoName] = useState(route.params.photoName || null)
    const [error, setError] = useState('')
    // const [modalVisible, setModalVisible] = useState(false)

    const searchable = route.params.searchable

    const featchData = () => {
        photoName && axios.get(getPhotosURL(photoName, page.currentPage))
            .then(res => {
                // console.log(res.data)
                setImages(images.concat(res.data.results))
                setPage({ currentPage: ++page.currentPage, totalPages: res.data.total_pages })
                setLoading(false)
            })
            .catch(e => {
                !images ? setError('Something went wrong!') : toastAlert('Something went wrong!')
                console.log(e)
            })
    }

    useEffect(featchData, [photoName])

    const loadMore = () => {
        if (page.currentPage <= page.totalPages) {
            setLoading(true)
            featchData()
        }
    }

    const _handleDownloadImage = async image => {
        let cameraPermission = await Permissions.getAsync(Permissions.CAMERA_ROLL)
        if (cameraPermission.status !== 'granted') {
            cameraPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        }
        if (cameraPermission.status === 'granted') {
            toastAlert('Downloading...')
            downloadAsync(image.links.download, documentDirectory + image.id + '_lifelogs.jpg')
                .then(({ uri }) => {
                    MediaLibrary.saveToLibraryAsync(uri)
                    toastAlert('Download complete.')
                })
                .catch(e => console.log(e))
        }
        else {
            alert('File system permission is required to download image.')
        }
    }

    const _handleChangeText = text => {
        setSearchText(text)
    }

    const _handleSearchPress = () => {
        if (searchText == '') return null
        console.log('btn pressed')
        setLoading(true)
        setImages([])
        flatlistRef.scrollToOffset({ animated: true, offset: 0 });
        setPage({ currentPage: 1, totalPages: 1 })
        setPhotoName(searchText)
    }

    // const _handleCardPress = () => {
    //     setModalVisible(true)
    // }

    return (
        <SafeArea>
            {/* <ImageViewModal visible={modalVisible} onRequestClose={() => setModalVisible(false)} /> */}
            {searchable && <>
                <View style={[styles.searchHeader]} >
                    <CustomTextInput
                        style={{ marginRight: 8 }}
                        autoFocus={true} iconName='ios-arrow-round-back'
                        iconSize={33} iconPress={() => navigation.goBack()}
                        onChangeText={_handleChangeText}
                        returnKeyType='search'
                        onSubmitEditing={_handleSearchPress}
                    />
                    <IconButton name='ios-search' style={{ paddingHorizontal: 17 }} onPress={_handleSearchPress} disabled={loading} />
                </View>
                <View style={{ height: 65 }} />
            </>}
            <View style={styles.container} >

                {!error ?
                    <FlatList
                        ref={ref => flatlistRef = ref}
                        data={images}
                        // keyExtractor={image => image.id}
                        ListHeaderComponent={() => <View style={{ height: 8 }} />}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => <ImageCard uri={item.urls.regular} size={{ width: item.width, height: item.height }} onDownloadPress={() => _handleDownloadImage(item)} />}
                        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                        ListEmptyComponent={() => photoName && <ActivityIndicator size='large' color='#000' style={{ justifyContent: 'center', height: searchable ? screenHeight - 150 : screenHeight - 50 }} />}
                        onEndReached={loadMore}
                        onEndReachedThreshold={5}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={loading && <Skeleton boneColor='lightgray' highlightColor='#ededed' isLoading={true}><View style={{ height: 300, width: '100%', borderRadius: 15, marginVertical: 16 }} /></Skeleton>}
                        ListFooterComponent={() => <View style={{ height: 16 }} />}
                    />
                    :
                    <ErrorDisplay />
                }
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        // paddingTop: 20,
        flex: 1
    },
    searchHeader: {
        position: 'absolute',
        right: 0,
        left: 0,
        zIndex: 10,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
        marginTop: 6,
        flexDirection: 'row'
    }
})