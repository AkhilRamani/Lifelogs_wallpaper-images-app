import {createDownloadResumable, documentDirectory} from 'expo-file-system'

const downloadResumable = createDownloadResumable(
    'http://techslides.com/demos/sample-videos/small.mp4',
    documentDirectory + 'akhil-101.mp4',
    () => console.log('downloading')
)

export const doanloadFile = async url => {
    try{
        await downloadResumable.downloadAsync()
    }
    catch(e){
        console.log(e)
    }
}