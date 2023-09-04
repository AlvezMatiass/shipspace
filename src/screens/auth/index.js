import { View, Text, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native'
import { styles } from './style';
import { useEffect, useState } from 'react';
import { COLORS } from '../../themes';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/auth.slice';
import { insertDataUser } from '../../db';

const Auth = () => {

    const dispatch = useDispatch()
    const {width} = useWindowDimensions()

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
                setIsLogin(!isLogin)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if(data) {
            dispatch(setUser(data))
            insertDataUser({
                email: data.email,
                localId: data.localId,
                token: data.idToken
            })
            .then()
            .catch(error => console.log(error.message))
        }
    }, [data])

    const onHandlerChangeAuth = () => {
        setIsLogin(!isLogin)
        setPassword('')
        setEmail('')
    }
    
    return (
        <View style={styles.container}>
            <View style={width > 660 ? styles.contentTablet : styles.content}>
                <Text style={width > 660 ? styles.headerTablet : styles.header}>{headerTitle}</Text>
                <Text style={width > 660 ? styles.labelTablet : styles.label}>Email</Text>
                <TextInput
                    style={width > 660 ? styles.inputTablet : styles.input}
                    placeholder='email@domain.com'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={(text) => {setEmail(text)}}
                />
                <Text style={width > 660 ? styles.labelTablet : styles.label}>Password</Text>
                <TextInput
                    style={width > 660 ? styles.inputTablet : styles.input}
                    placeholder='**********'
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => {setPassword(text)}}
                />
            </View>
            <View style={width > 660 ? styles.buttonContainerTablet : styles.buttonContainer}>
                <TouchableOpacity style={width > 660 ? styles.buttonTablet : styles.button} onPress={onHandlerAuth}>
                    <Text style={width > 660 ? styles.buttonTextTablet : styles.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity> 
            </View>
            <View style={width > 660 ? styles.linkContainerTablet : styles.linkContainer}>
                <TouchableOpacity style={width > 660 ? styles.linkTablet : styles.link} onPress={onHandlerChangeAuth}>
                    <Text style={width > 660 ? styles.linkTextTablet : styles.linkText}>{messageText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Auth;