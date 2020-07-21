import React from 'react'
import { Animated, StatusBar } from 'react-native'
import { Header } from '../../components/header'
import { SafeArea } from '../../components/safeArea'
import { ImageButton } from '../../components/buttons/imageButton'
import { FlatList, Image, View, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { routes } from '../../constants/routes'
import { CustomTextInput } from '../../components/textInput/textInput'
// import Animated from 'react-native-reanimated'

export const HomeScreen = ({ navigation }) => {

    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 64)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 64],
        outputRange: [0, - 64]
    })

    const _handleOnScroll = e => {
        const y = e.nativeEvent.contentOffset.y
        y > -1 && scrollY.setValue(e.nativeEvent.contentOffset.y * 0.5)
    }

    return (
        <SafeArea>
            <Header.Default title='Lifelogs' />

            <ScrollView style={styles.container} onScroll={_handleOnScroll} >

                <View style={{ height: 120 }} />
                <View style={styles.btnPairView} >
                    <ImageButton.BottomText text='Fashion' src={require('../../../assets/imgs/home-screen/fashion.png')} onPress={() => navigation.navigate('Fashion')} />
                    <ImageButton.BottomText text='Fitness' src={require('../../../assets/imgs/home-screen/fitness.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'fitness' })} />
                </View>
                <View style={styles.btnPairView} >
                    <ImageButton.BottomText text='Food' src={require('../../../assets/imgs/home-screen/food.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'food' })} />
                    <ImageButton.BottomText text='Meditation' src={require('../../../assets/imgs/home-screen/meditation.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'meditation' })} />
                </View>
                <View style={styles.btnPairView} >
                    <ImageButton.BottomText text='Motivation' src={require('../../../assets/imgs/home-screen/motivation.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'motivation' })} />
                    <ImageButton.BottomText text='Wallpaper' src={require('../../../assets/imgs/home-screen/wallpaper.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'wallpaper' })} />
                </View>
                <View style={styles.btnPairView} >
                    <ImageButton.BottomText text='Technology' src={require('../../../assets/imgs/home-screen/technology.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'technology' })} />
                    <ImageButton.BottomText text='Travel' src={require('../../../assets/imgs/home-screen/travel.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'travel' })} />
                </View>
                <View style={styles.btnPairView} >
                    <ImageButton.BottomText text='Space' src={require('../../../assets/imgs/home-screen/space.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'space' })} />
                    <ImageButton.BottomText text='Architecture' src={require('../../../assets/imgs/home-screen/architecture.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'architecture' })} />
                </View>

                <View style={{ height: 8 }} />
            </ScrollView>

            {/* Animated search bar on top */}
            <Animated.View style={{ transform: [{ translateY }], zIndex: 5, position: 'absolute', top: StatusBar.currentHeight + 60, right: 0, left: 0, backgroundColor: '#F2F2F2' }}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate(routes.imagesListScreen, {searchable: true })} >
                    <CustomTextInput style={{ marginHorizontal: 15, marginBottom: 8 }} editable={true} pointerEvents='none' iconName='ios-search' />
                </TouchableOpacity>
            </Animated.View>

        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingBottom: 8
        // paddingTop: 70
    },
    btnPairView: {
        flexDirection: 'row'
    }
})