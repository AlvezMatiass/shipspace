import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, useWindowDimensions } from 'react-native'
import { styles } from './styles';
import { COLORS } from '../../themes';
import { useSelector } from 'react-redux';
import { useGetProfileQuery } from '../../store/users/api';
import { useState } from 'react';
import { useUploadPublicationMutation } from '../../store/publications/api';

const CreateScreen = ({navigation}) => {

    const {width} = useWindowDimensions()
    const [ publicationText, setPublicationText ] = useState('')
    const isButtonDisabled = publicationText === ''

    const userInfo = useSelector((state) => state.user.data)
    const localId = useSelector((state) => state.auth.user.localId)

    const {data: userData, isLoading: isLoadingUserData} = useGetProfileQuery({localId})
    const [ publicationData, {data, isLoading, error}] = useUploadPublicationMutation({localId})

    const userInfoData = userData ? userData : userInfo

    const onHandlerPublicationPublicate = async () => {
        publicationData({localId, publicationText, userInfoData})
        setPublicationText('')
        navigation.navigate('MenuTab')
    }

    if(!userData?.username && !userInfo) {
        return (
            <View style={styles.container}>
                <View style={width > 660 ? styles.noUserContainTablet : styles.noUserContain}>
                    <Text style={width > 660 ? styles.noUserTextTablet : styles.noUserText}>No User Detection</Text>
                    <Text style={width > 660 ? styles.noUserTextSubTablet : styles.noUserTextSub}>Go to Profile and create User and ShipId to be able to publish, don't forget to upload a picture!</Text>
                </View> 
                {
                    isLoadingUserData && (
                            <View style={styles.loading}> 
                                <ActivityIndicator  size='large' color={COLORS.textWhite} />
                            </View>
                )}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={width > 660 ? styles.buttonContainerTablet : styles.buttonContainer}>
                <TouchableOpacity style={[width > 660 ? styles.buttonContainerTablet : styles.buttonContainer, {opacity: isButtonDisabled ? 0.5 : 1}]} disabled={isButtonDisabled} onPress={onHandlerPublicationPublicate}>
                    <Text style={width > 660 ? styles.textButtonTablet : styles.textButton}>Create</Text>
                </TouchableOpacity>
            </View>
            <TextInput
            multiline
            placeholder={`what's happening?`}
            placeholderTextColor={COLORS.textWhite}
            autoCapitalize='none'
            autoCorrect={false}
            style={width > 660 ? styles.inputTablet : styles.input}
            textAlignVertical='top'
            maxLength={320}
            value={publicationText}
            onChangeText={(text) => {setPublicationText(text)}}
            />
        </View>
    )
}

export default CreateScreen;