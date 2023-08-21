import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { useEffect, useState } from 'react';
import { COLORS } from '../../themes';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { useSingUpUserDataMutation } from '../../store/users/api';
import { useDispatch } from 'react-redux';
import { setLocalId, setUser } from '../../store/auth/auth.slice';

const Auth = () => {

    const dispatch = useDispatch()

    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const headerTitle = isLogin ? 'Login' : 'Register'
    const buttonTitle = isLogin ? 'Login' : 'Register'
    const messageText = isLogin ? 'Need an account?' : 'Already have an account?'

    const [signIn, {data}] = useSignInMutation();
    
    const [signUp] = useSignUpMutation()

    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                signIn({email, password})
            } else {
                signUp({email, password})
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if(data) {
            dispatch(setUser(data))
        }
    }, [data])

    const onHandlerChangeAuth = () => {
        setIsLogin(!isLogin)
        setPassword('')
        setEmail('')
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>{headerTitle}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='email@domain.com'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={(text) => {setEmail(text)}}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='**********'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => {setPassword(text)}}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onHandlerAuth}>
                    <Text style={styles.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.link} onPress={onHandlerChangeAuth}>
                    <Text style={styles.linkText}>{messageText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Auth;