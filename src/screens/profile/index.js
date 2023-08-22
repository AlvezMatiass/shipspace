import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './styles';
import { ProfileInfo } from '../../components';
import { useEffect, useState } from 'react';
import { useGetProfileQuery } from '../../store/users/api';
import { useSelector } from 'react-redux';
import { COLORS } from '../../themes';

const Profile = ({ navigation }) => {

    const localId = useSelector((state) => state.auth.user.localId)

    const {data, isLoading, error} = useGetProfileQuery({localId})

    const onHandlerCreateProfile = () => {
        navigation.navigate('CreateUserData')
    }

    return (
        <View style={styles.container}>
            <View style={styles.contain}>
                <View style={styles.containProfile}>
                    <View>
                        <Image style={styles.profilePhoto} source={{ uri: data?.profileImage}}/>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.textProfile}>{ data?.username}</Text>
                        <Text style={styles.textSubProfile}>@{data?.shipid}</Text>
                        <TouchableOpacity style={styles.createProfileButton} onPress={onHandlerCreateProfile}>
                            <Text style={styles.createProfileButtonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    {
                    isLoading && (
                            <View style={styles.loading}> 
                                <ActivityIndicator  size='large' color={COLORS.textWhite} />
                            </View>
                    )}
                </View>
            </View>
            
        </View>
    )
}

export default Profile;