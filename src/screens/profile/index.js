import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, FlatList, RefreshControl, useWindowDimensions } from 'react-native';
import { styles } from './styles';
import { useGetProfileQuery } from '../../store/users/api';
import { fetchPublications, deletePublication } from '../../store/publications/publication.slice';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../themes';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { logout } from '../../store/auth/auth.slice';
import { deleteSession } from '../../db';

const Profile = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const {width} = useWindowDimensions()
    const localId = useSelector((state) => state.auth.user.localId);
    const userInfo = useSelector((state) => state.user.data);

    const [refreshing, setRefreshing] = useState(false);

    const { data: profilePublication, loading } = useSelector(state => state.publications);
    const { data, isLoading, error } = useGetProfileQuery({ localId });

    useEffect(() => {
        dispatch(fetchPublications());
    }, [dispatch]);

    const onHandlerCreateProfile = () => {
        navigation.navigate('CreateUserData');
    }

    const handleRefresh = async () => {
        setRefreshing(true);
        await dispatch(fetchPublications());
        setRefreshing(false);
    };

    const onSelectPublication = ({ publicationId, userInfo }) => {
        navigation.navigate('PublicationDetail', { publicationId, userInfo });
    };

    const handleDeletePublication = async (publicationId) => {
        try {
            await dispatch(deletePublication(publicationId));
        } catch (error) {
            console.error(error);
        }
    };

    const onLogout = async () => {
        dispatch(logout())
        await deleteSession({localId})
    }

    if (!userInfo?.username && !data?.username) {
        return (
            <View style={width > 660 ? styles.createContainerTablet : styles.createContainer}>
                <Text style={width > 660 ? styles.createProfileTextTablet : styles.createProfileText}>Welcome, it's time to create your profile. Select a username, a Shipid, and a profile picture to continue.</Text>
                <Text style={width > 660 ? styles.createProfileSubTextTablet : styles.createProfileSubText}>WARNING: Be careful, you can create your profile and select an image once per account!</Text>
                <TouchableOpacity onPress={onHandlerCreateProfile} style={width > 660 ? styles.createProfileButtonContainerTablet : styles.createProfileButtonContainer}>
                    <Text style={width > 660 ? styles.createProfileButtonTextTablet : styles.createProfileButtonText}>Create Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLogout} style={width > 660 ? styles.logoutContainerDosTablet : styles.logoutContainerDos}>
                    <Entypo name="log-out" size={width > 660 ? 28 : 22} color={COLORS.textWhite} />
                </TouchableOpacity>
            </View>
        )
    }   

    return (
        <View style={styles.container}>
            <View style={width > 660 ? styles.containTablet : styles.contain}>
                <View style={width > 660 ? styles.containProfileTablet : styles.containProfile}>
                    <View style={width > 660 ? styles.profilePhotoContainerTablet : styles.profilePhotoContainer}>
                        <Image style={width > 660 ? styles.profilePhotoTablet : styles.profilePhoto} source={{ uri: userInfo ? userInfo?.profileImage : data?.profileImage }} />
                    </View>
                    <View style={width > 660 ? styles.userInfoContainerTablet : styles.userInfoContainer}>
                        <Text style={width > 660 ? styles.textProfileTablet : styles.textProfile}>{userInfo ? userInfo?.username : data?.username}</Text>
                        <Text style={width > 660 ? styles.textSubProfileTablet : styles.textSubProfile}>@{userInfo ? userInfo?.shipid : data?.shipid}</Text>
                    </View>
                    {isLoading && (
                        <View style={styles.loading}>
                            <ActivityIndicator size='large' color={COLORS.textWhite} />
                        </View>
                    )}
                    <TouchableOpacity onPress={onLogout} style={width > 660 ? styles.logoutContainerTablet : styles.logoutContainer}>
                        <Entypo name="log-out" size={width > 660 ? 24 : 20} color={COLORS.textWhite} />
                    </TouchableOpacity>
                </View>
            </View>
                <View style={width > 660 ? styles.yourPublicationsTablet : styles.yourPublications}>
                    <Text style={width > 660 ? styles.yourPublicationsTextTablet : styles.yourPublicationsText}>Your Publications</Text>
                </View>
            <FlatList
                data={profilePublication.filter(item => item.localId === localId).slice().reverse()}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <TouchableOpacity style={width > 660 ? styles.publicationTablet : styles.publication} onPress={() => onSelectPublication({ publicationId: item.id })}>
                            <View>
                                <Image style={width > 660 ? styles.userImageTablet : styles.userImage} source={{ uri: userInfo?.localId ? userInfo?.profileImage : data?.profileImage }} />
                            </View>
                            <View style={width > 660 ? styles.publicationInfoTablet : styles.publicationInfo}>
                                <View style={width > 660 ? styles.userContainerTablet : styles.userContainer}>
                                    <Text style={width > 660 ? styles.userNameTablet : styles.userName}>
                                        {userInfo?.localId ? userInfo?.username : data?.username}
                                    </Text>
                                    <Text style={width > 660 ? styles.userTablet : styles.user}>
                                        @{userInfo?.localId ? userInfo?.shipid : data?.shipid}
                                    </Text>
                                </View>
                                <Text style={width > 660 ? styles.publicacionTextTablet : styles.publicacionText}>{item.publicationText}</Text>
                            </View>
                            {localId === item.localId && (
                                <TouchableOpacity style={width > 660 ? styles.deletePublicationTablet : styles.deletePublication} onPress={() => handleDeletePublication(item.id)}>
                                    <MaterialIcons name="delete" size={width > 660 ? 26 : 18} color={COLORS.textWhite} />
                                </TouchableOpacity>
                            )}
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            />
        </View>
    )
}

export default Profile;
