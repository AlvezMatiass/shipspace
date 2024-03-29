import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { useSignInMutation } from '../../store/auth/api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/auth.slice';
import { insertDataUser } from '../../db';

const RegisterSuccess = ({ navigation, route }) => {

    const onHandlerLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textSuccess}>Register Success, now you can Log In</Text>
            <TouchableOpacity onPress={onHandlerLogin} style={styles.successlogin}>
                <Text style={styles.loginText}>
                    Go to Login Screen
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterSuccess