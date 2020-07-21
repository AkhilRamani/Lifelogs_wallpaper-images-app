import React from 'react'
import { Image, View, StyleSheet, Dimensions, CameraRoll } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { doanloadFile } from '../../utils/downloadFile'
import { Permissions, FileSystem } from 'expo'
// import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce'

const screenHeight = Dimensions.get('window').height

export const ImageCard = ({ uri, size, onCardPress, onDownloadPress }) => (
    <View style={[styles.container, { height: size.height > size.width ? screenHeight / 1.5 : screenHeight / 2.5 }]} onPress={onCardPress} >
        <View style={styles.btnView} >
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={onDownloadPress} >
                <Ionicons style={{ opacity: 0.8 }} name="md-download" size={21} />
            </TouchableOpacity>
        </View>
        <Image style={styles.image}
            source={{ uri }} />
    </View>
)


const styles = StyleSheet.create({
    container: {
        // marginVertical: 8,
    },
    btnView: {
        position: 'absolute',
        zIndex: 2,
        // width: '100%',
        // height: '100%',
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        padding: 10
    },
    btn: {
        borderRadius: 50,
        width: 37,
        height: 37,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    image: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: 'lightgray'
    }
})