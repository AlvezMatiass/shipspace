import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../themes';
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync } from 'expo-image-picker'
import { useState } from 'react';
import { styles } from './style'

const ImageSelector = ({ profileImage, onSelect }) => {

    const [ image, setImage ] = useState(null)

    const verifyPermissions = async () => {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if ( status !== 'granted') {
            Alert.alert(
                'Permission Denied',
                'You need to grant camera permissions',
                [{text: 'Ok'}]
            )
            return false
        }
        return true
    }

    const onHandlerPhoto = async () => {
        const isMediaPermissions = await verifyPermissions()
        if (!isMediaPermissions) return;
        const result = await launchImageLibraryAsync({
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
            base64: true
        })
        if (result.canceled) {
            console.log("Selección de imagen cancelada");
        } else {
        }

        onSelect({uri: result.assets[0].uri, base64: result.assets[0].base64})
        setImage(result.assets[0].uri)
    }

    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentImage} onPress={onHandlerPhoto}>
                {
                    ( image || profileImage ) ? (
                        <Image source={{uri: image || profileImage }} style={styles.imageProfile} resizeMode='contain' />
                    ) : (
                        <Ionicons name='camera' size={30} color={COLORS.text} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector;