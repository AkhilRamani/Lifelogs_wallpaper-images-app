import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
// import {TouchableOpacity} from 'react-native'

export const IconButton = ({name, style, onPress, disabled}) => (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} disabled={disabled} activeOpacity={0.6} >
        <Ionicons name={name} size={24} color='#fff' />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF7750',
        flex: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'center'
    }
})