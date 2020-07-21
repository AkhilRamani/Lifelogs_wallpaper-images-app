import {WToast,WSnackBar} from 'react-native-smart-tip'

export const toastAlert = message => WSnackBar.show({
    data: message, 
    duration: WSnackBar.duration.SHORT,
    backgroundColor: '#fff',
    textColor: '#454545',
    height: 50,
    // backgroundColor: '#2b2b2b',
    // textColor: '#f2f2f2',
    position: WSnackBar.position.BOTTOM
})