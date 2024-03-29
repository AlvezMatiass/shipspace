import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './style'

const SelectLoginRegister = ({navigation}) => {

    const onHandlerNavigationLogin = () => {
        navigation.navigate('Login')
    }

    const onHandlerNavigationRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imageLogo} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/shipspace-ea24f.appspot.com/o/shiplogo.png?alt=media&token=39f3bbd8-3fbc-44cd-a010-ddeeff6a0096'}} />

            <View style={styles.subtitlecontainer}>
                <Text style={styles.subtitle}>You are free to explore what the world is talking about.</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => onHandlerNavigationLogin()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.noAccountTextContainer}>
                <Text style={styles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => onHandlerNavigationRegister()}>
                    <Text style={styles.noAccountTextRegister}>Register.</Text>
                </TouchableOpacity>
            </View>
            

            
        </View>
    )
}

export default SelectLoginRegister