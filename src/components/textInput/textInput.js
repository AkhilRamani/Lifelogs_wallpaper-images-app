import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CustomTextInput = ({onChangeText, iconName, iconSize, iconPress, style, editable = true, autoFocus, returnKeyType, onSubmitEditing, ...rest }) => (

    <View {...rest} style={[styles.container, style]} >
        {iconName &&
            (iconPress ?
            <TouchableOpacity onPress={iconPress}>
                <Ionicons name={iconName} size={iconSize || 24} style={styles.icon} />
            </TouchableOpacity>
            :
            <Ionicons name={iconName} size={iconSize || 24} style={styles.icon} />)
        }
        <TextInput
            style={styles.textInput}
            placeholder='Search Life style and wallpapers'
            placeholderTextColor='#00000080'
            underlineColorAndroid='#00000000'
            editable={editable}
            autoFocus={autoFocus}
            onChangeText={onChangeText}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        // paddingVertical: 12,
        // paddingHorizontal: 20,
        paddingRight: 20,
        height: 52,
        backgroundColor: '#e7e7e7',
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',

    },
    icon: {
        paddingLeft: 20, 
        opacity: 0.5
    },
    textInput: {
        flex: 1,
        fontSize: 17,
        // paddingTop: 10,
        // paddingRight: 10,
        // paddingBottom: 10,
        paddingLeft: 15,
        // backgroundColor: '#fff',
        color: '#424242'
    }
})