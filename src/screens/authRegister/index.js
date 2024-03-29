import { View, Text, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/auth.slice';
import { insertDataUser } from '../../db';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { COLORS } from '../../themes';

const AuthRegister = ({ navigation }) => {

    const dispatch = useDispatch();
    const { width } = useWindowDimensions();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signUp, { isSuccess }] = useSignUpMutation();
    const [signIn, { data }] = useSignInMutation();

    const onHandlerAuth = async () => {
        try {
            signUp({ email, password });
            navigation.navigate('RegisterSuccess', {email, password})
            setPassword('');
            setEmail('');
        } catch (error) {
            console.error(error);
        }
    };

    const onHandlerGoBack = () => {
        navigation.navigate('Select')
    }

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
            insertDataUser({
                email: data.email,
                localId: data.localId,
                token: data.idToken,
            })
                .then()
                .catch((error) => console.log(error.message));
        }
    }, [data]);

    const onHandlerChangeAuth = () => {
        navigation.navigate('Login')
        setPassword('');
        setEmail('');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonContainer} onPress={onHandlerGoBack}>
                <AntDesign name="arrowleft" size={24} color={COLORS.textWhite} />
            </TouchableOpacity>
            <View style={width > 660 ? styles.contentTablet : styles.content}>
                <Text style={width > 660 ? styles.headerTablet : styles.header}>Register</Text>
                <Text style={width > 660 ? styles.labelTablet : styles.labelEmail}>Email</Text>
                <TextInput
                    style={width > 660 ? styles.inputTablet : styles.input}
                    placeholder=""
                    placeholderTextColor={COLORS.gray}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                />
                <Text style={width > 660 ? styles.labelTablet : styles.labelPassword}>Password</Text>
                <TextInput
                    style={width > 660 ? styles.inputTablet : styles.input}
                    placeholder=""
                    placeholderTextColor={COLORS.textWhite}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                />
            </View>
            <View style={width > 660 ? styles.buttonContainerTablet : styles.buttonContainer}>
                <TouchableOpacity style={width > 660 ? styles.buttonTablet : styles.button} onPress={onHandlerAuth}>
                    <Text style={width > 660 ? styles.buttonTextTablet : styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={width > 660 ? styles.linkContainerTablet : styles.linkContainer}>
                <TouchableOpacity style={width > 660 ? styles.linkTablet : styles.link} onPress={onHandlerChangeAuth}>
                    <Text style={width > 660 ? styles.linkTextTablet : styles.linkText}>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AuthRegister;
