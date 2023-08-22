import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { COLORS } from "../../themes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useSingUpUserDataMutation, useUpdateImageProfileMutation } from "../../store/users/api";
import { ImageSelector } from "../../components";

const CreateUserData = ({ navigation }) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [shipid, setShipid] = useState('')

    const localId = useSelector((state) => state.auth.user.localId)
    const isButtonDisabled = username === '' || shipid === '';

    const [ singUpUserData, { data, isLoading, error } ] = useSingUpUserDataMutation()
    const [uploadImageProfile, { data: photoData, isLoading: isLoadingPhoto, error: errorPhoto }] = useUpdateImageProfileMutation()
    const {data: userData, isLoading: isLoadingUserData} = useGetProfileQuery({localId})

    const onHandlerImage =  async ({uri, base64}) => {
        await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` })
    }

    const onHandlerUserData = async () => {
        await singUpUserData({username, shipid, localId})
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage}/>
                {
                    isLoading && (
                        <View style={styles.loading}> 
                            <ActivityIndicator  size='large' color={COLORS.text} />
                        </View>
                )}
            </View>
            <View style={styles.inputContain}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter a Username'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={username}
                    maxLength={14}
                    onChangeText={(text) => {setUsername(text)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter a Shipid'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={shipid}
                    maxLength={14}
                    onChangeText={(text) => {setShipid(text)}}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {opacity: isButtonDisabled ? 0.5 : 1} ]} onPress={onHandlerUserData} disabled={isButtonDisabled} >
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateUserData;