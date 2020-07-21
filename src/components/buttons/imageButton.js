import React from 'react'
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native'

export const ImageButton = {
    CenterText: ({ width, uri, text, src, onPress }) => (
        <TouchableOpacity onPress={onPress} style={[styles.container, styles.cContainer, { width: width || 'auto' }]} activeOpacity={0.6}  >
            <View style={[styles.view, styles.cView]} >
                <Text style={styles.text} >{text}</Text>
            </View>
            <Image source={src || { uri: uri || "https://unsplash.com/photos/_KaMTEmJnxY/download?force=true" }}
                style={styles.image}
            />
        </TouchableOpacity>
    ),
    BottomText: ({ width, uri, text, src, onPress }) => (
        <TouchableOpacity onPress={onPress} style={[styles.container, styles.bContainer, { width: width || 'auto' }]} activeOpacity={0.6}>
            <View style={[styles.view, styles.bView]} >
                <Text style={styles.text} >{text}</Text>
            </View>
            <Image source={src}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 17,
        flex: 1,
        display: 'flex',
        margin: 8
    },
    cContainer: {
        height: 90,
    },
    bContainer: {
        height: 160
    },
    view: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        backgroundColor: '#00000010',
        zIndex: 2,
        borderRadius: 15
    },
    cView: {
        justifyContent: 'center'
    },
    bView: {
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: '#00000060',
        textShadowRadius: 8
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    }
})