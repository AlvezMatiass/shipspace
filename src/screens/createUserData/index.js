import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { COLORS } from "../../themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useSingUpUserDataMutation, useUpdateImageProfileMutation } from "../../store/users/api";
import { updateData } from "../../store/users/user.slice";
import { ImageSelector } from "../../components";

const CreateUserData = ({ navigation }) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [shipid, setShipid] = useState('')

    const localId = useSelector((state) => state.auth.user.localId);

    const [ singUpUserData, { data, isLoading, error } ] = useSingUpUserDataMutation()

    const [uploadImageProfile, {data: photoData}] = useUpdateImageProfileMutation()

    const onHandlerImage =  async ({uri, base64}) => {
        await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` })
    }

    const isButtonDisabled = username === '' || shipid === '';

    const onHandlerUserData = async () => {
        await singUpUserData({username, shipid, localId, profileImage: photoData.profileImage})

        navigation.navigate('Profile')
    }

    useEffect(() => {
        if(data) {
            dispatch(updateData(data))
        }
    }, [data])


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageSelector profileImage={data?.profileImage} onSelect={onHandlerImage}/>
            </View>
            <View style={styles.inputContain}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter a Username'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={username}
                    maxLength={20}
                    onChangeText={(text) => {setUsername(text)}}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter a ShipID'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={shipid}
                    maxLength={20}
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