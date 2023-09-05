import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { COLORS } from '../../themes';
import { useGetProfileQuery } from '../../store/users/api';
import { fetchPublications, deletePublication } from '../../store/publications/publication.slice';

const Menu = ({ navigation }) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const [focus, setFocus] = useState(false);
  const localId = useSelector((state) => state.auth.user.localId);
  const userInfo = useSelector((state) => state.user.data);

  const { data: publicationData, loading } = useSelector((state) => state.publications);
  const { data, isLoading, error } = useGetProfileQuery({ localId });

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchPublications());
  }, [dispatch]);

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

  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchPublications());
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {publicationData.length === 0 ? (
        <ScrollView
          contentContainerStyle={styles.noPublicationContain}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
        >
          <View style={styles.noPublicationContain}>
            <Text style={styles.noPublication}>No Publications</Text>
            <Text style={styles.noPublicationSub}>{`Post something to revive this :(`}</Text>
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={publicationData.slice().reverse()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity style={width > 660 ? styles.publicationTablet : styles.publication} onPress={() => onSelectPublication({ publicationId: item.id })}>
                <View>
                  <Image style={width > 660 ? styles.userImageTablet : styles.userImage} source={{
                    uri: userInfo?.localId === item?.localId
                      ? userInfo?.profileImage
                      : item?.userInfoData.profileImage,
                  }} />
                </View>
                <View style={styles.publicationInfo}>
                  <View style={width > 660 ? styles.userContainerTablet : styles.userContainer}>
                    <Text style={width > 660 ? styles.userNameTablet : styles.userName}>
                      {userInfo?.localId === item?.localId ? userInfo?.username : item?.userInfoData.username}
                    </Text>
                    <Text style={width > 660 ? styles.userTablet : styles.user}>
                      @{userInfo?.localId === item?.localId ? userInfo?.shipid : item?.userInfoData.shipid}
                    </Text>
                  </View>
                  <Text style={width > 660 ? styles.publicacionTextTablet : styles.publicacionText}>{item.publicationText}</Text>
                </View>
                {
                  localId === item.localId ? (
                    <TouchableOpacity style={styles.deletePublication} onPress={() => handleDeletePublication(item.id)}>
                      <MaterialIcons name="delete" size={width > 660 ? 28 : 22} color={COLORS.textWhite} />
                    </TouchableOpacity>
                  ) : ''
                }
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
      )}
    </View>
  );
}

export default Menu;
