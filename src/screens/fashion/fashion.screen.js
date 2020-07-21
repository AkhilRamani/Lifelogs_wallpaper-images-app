import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeArea } from '../../components/safeArea'
import { Header } from '../../components/header'
import { ImageButton } from '../../components/buttons/imageButton'
import { routes } from '../../constants/routes'

export const FashionScreen = ({ navigation }) => {
    return (
        <SafeArea>
            <Header.Center title='Fashion' onBack={() => navigation.goBack()} />
            <View style={styles.container} >
                <View style={styles.btnPairView}>
                    <ImageButton.CenterText text='Hair Style' src={require('../../../assets/imgs/fashion-screen/hairstyle.png')} onPress={() => navigation.navigate('ImagesList', { photoName: 'hair' })} />
                    <ImageButton.CenterText text='Cloths' src={require('../../../assets/imgs/fashion-screen/cloth.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'cloth' })} />
                </View>
                <View style={styles.btnPairView}>
                    <ImageButton.CenterText text='Shoes' src={require('../../../assets/imgs/fashion-screen/shoes.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'shoes' })} />
                    <ImageButton.CenterText text='Glasses' src={require('../../../assets/imgs/fashion-screen/glasses.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'glasses' })} />
                </View>
                <View style={styles.btnPairView}>
                    <ImageButton.CenterText text='Watches' src={require('../../../assets/imgs/fashion-screen/watch.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'watch' })} />
                    <ImageButton.CenterText text='Bags' src={require('../../../assets/imgs/fashion-screen/bag.png')} onPress={() => navigation.navigate(routes.imagesListScreen, { photoName: 'bag' })} />
                </View>
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    btnPairView: {
        flexDirection: 'row'
    }
})