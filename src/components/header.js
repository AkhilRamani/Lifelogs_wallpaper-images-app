import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Header = {
    Default: ({ title }) => (
        <View style={[styles.conatiner, styles.default]} >
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity style={styles.icon} >
                <Feather name="share-2" size={23} color="black" style={{opacity: 0.8, marginTop: 3}} />
            </TouchableOpacity>
        </View>
    ),
    Center: ({ title, onBack }) => (
        <>
        
        <View style={[styles.conatiner, styles.center]} >
            <TouchableOpacity onPress={onBack} >
                <Ionicons name="ios-arrow-round-back" size={40} color="black" />
            </TouchableOpacity>
            <View style={styles.textView} >
                <Text style={styles.text} >{title}</Text>
            </View>
        </View>
        <View style={{height: 60}} />
        </>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        display: 'flex',
        width: '100%',
        height: 60 + StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        position: 'absolute',
        zIndex: 200,
        // top: StatusBar.currentHeight,
        left: 0,
        right: 0,
        backgroundColor: '#F2F2F2',
        // alignItems: 'center'
        // paddingVertical: 30,
        paddingHorizontal: 16,
        // borderBottomWidth: 1,
    },
    default: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    center: {
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row'
    },
    textView: {
        alignItems: 'center',
        width: '100%',
        marginLeft: -27
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    icon: {
        // backgroundColor: "lightgray",
        borderRadius: 50,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})