import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const ErrorDisplay = ({ title = 'Oops..', message = 'Something went wrong!' }) => (
    <View style={{ height: Dimensions.get('window').height - 160, alignItems: 'center', justifyContent: 'center', opacity: 0.3 }} >
        <Ionicons name="ios-bonfire" size={70} color="black" />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >{title}</Text>
        <Text style={{ fontSize: 14 }} >{message}</Text>
    </View>
)