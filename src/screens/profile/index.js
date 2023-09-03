import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, FlatList, RefreshControl } from 'react-native';
import { styles } from './styles';
import { useGetProfileQuery } from '../../store/users/api';
import { fetchPublications, deletePublication } from '../../store/publications/publication.slice';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../themes';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({ navigation, route }) => {
    const dispatch = useDispatch();
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

    if (!userInfo?.username && !data?.username) {
        return (
            <View style={styles.createContainer}>
                <Text style={styles.createProfileText}>Welcome, it's time to create your profile. Select a username, a Shipid, and a profile picture to continue.</Text>
                <Text style={styles.createProfileSubText}>WARNING: Be careful, you can create your profile and select an image once per account!</Text>
                <TouchableOpacity onPress={onHandlerCreateProfile} style={styles.createProfileButtonContainer}>
                    <Text style={styles.createProfileButtonText}>Create Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.contain}>
                <View style={styles.containProfile}>
                    <View style={styles.profilePhotoContainer}>
                        <Image style={styles.profilePhoto} source={{ uri: userInfo ? userInfo?.profileImage : data?.profileImage }} />
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.textProfile}>{userInfo ? userInfo?.username : data?.username}</Text>
                        <Text style={styles.textSubProfile}>@{userInfo ? userInfo?.shipid : data?.shipid}</Text>
                    </View>
                    {isLoading && (
                        <View style={styles.loading}>
                            <ActivityIndicator size='large' color={COLORS.textWhite} />
                        </View>
                    )}
                </View>
            </View>
                <View style={styles.yourPublications}>
                    <Text style={styles.yourPublicationsText}>Your Publications</Text>
                </View>
            <FlatList
                data={profilePublication.filter(item => item.localId === localId).slice().reverse()}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.publication} onPress={() => onSelectPublication({ publicationId: item.id })}>
                            <View>
                                <Image style={styles.userImage} source={{ uri: userInfo?.localId ? userInfo?.profileImage : data?.profileImage }} />
                            </View>
                            <View style={styles.publicationInfo}>
                                <View style={styles.userContainer}>
                                    <Text style={styles.userName}>
                                        {userInfo?.localId ? userInfo?.username : data?.username}
                                    </Text>
                                    <Text style={styles.user}>
                                        @{userInfo?.localId ? userInfo?.shipid : data?.shipid}
                                    </Text>
                                </View>
                                <Text style={styles.publicacionText}>{item.publicationText}</Text>
                            </View>
                            {localId === item.localId && (
                                <TouchableOpacity style={styles.deletePublication} onPress={() => handleDeletePublication(item.id)}>
                                    <MaterialIcons name="delete" size={18} color={COLORS.textWhite} />
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
