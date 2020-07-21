import React from 'react'
import { Modal, View, StyleSheet } from 'react-native'

export const ImageViewModal = ({visible, onRequestClose}) => (
    <Modal visible={visible} onRequestClose={onRequestClose} animationType='slide' >
        <View>

        </View>
    </Modal>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})