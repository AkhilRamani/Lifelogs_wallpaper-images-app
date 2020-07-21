import React from 'react'
import { View, StatusBar, Platform, SafeAreaView } from 'react-native'

export const SafeArea = props => (
    Platform.OS == 'ios' ?
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
        :
        <View style={{ paddingTop: StatusBar.currentHeight, flex: 1 }} >
            {props.children}
        </View>
)