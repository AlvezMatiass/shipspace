import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { COLORS } from '../../themes';
import { MaterialIcons } from '@expo/vector-icons';
import { useUploadComentaryMutation } from '../../store/publications/api';
import { useGetProfileQuery } from '../../store/users/api';
import { fetchPublications } from '../../store/publications/publication.slice';
import { deleteComment } from '../../store/comments/comments.slice';


const PublicationDetail = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const [ commentsText, setCommentsText ] = useState('')
    const [refreshing, setRefreshing] = useState(false);
    const [commentKey, setCommentKey] = useState(0);

    const isButtonDisabled = commentsText === ''

    const { publicationId } = route.params

    const localId = useSelector((state) => state.auth.user.localId)
    const userInfo = useSelector((state) => state.user.data)
      
    const { data: publicationData, loading } = useSelector(state => state.publications);
    const [ uploadComentary, { data, isLoading, error } ] = useUploadComentaryMutation({publicationId})
    const { data: dataUser} = useGetProfileQuery({ localId });

    const userCommerInfo = userInfo || dataUser;
    
    const publication = publicationData?.find((publication) => publication.id === publicationId);

    const allCommentIds = publicationData.map(publication => {
        return publication.comments ? Object.keys(publication.comments) : [];
    }).flat();

    const mergePublicationDataWithComments = (publications, commentIds) => {
        return publications.map(publication => ({
          ...publication,
          comments: commentIds
            .filter(commentId => publication.comments && publication.comments[commentId])
            .map(commentId => ({
              id: commentId,
              ...publication.comments[commentId]
            }))
        }));
    }; 

    const combinedPublicationData = mergePublicationDataWithComments(publicationData, allCommentIds);

    const photoProfile = publication?.userInfoData.profileImage ? publication?.userInfoData.profileImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'

    const onHandlerPublicationPublicate = async () => {
        uploadComentary({localId, commentsText, publicationId, userCommerInfo})
        setCommentsText('')
    }

    const handleRefresh = async () => {
        setRefreshing(true);
        await dispatch(fetchPublications());
        setRefreshing(false);
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await dispatch(deleteComment({ publicationId, commentId }));
            setCommentKey(commentKey + 1);
        } catch (error) {
            console.error(error);
        }
    };  
    
    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <Image style={styles.userImage} source={{uri: userInfo?.localId === publication?.localId ? userInfo?.profileImage : photoProfile}}/>
                <View style={styles.userContainer}>
                    <Text style={styles.userName}>{publication.userInfoData.username}</Text>
                    <Text style={styles.user}>@{publication.userInfoData.shipid}</Text>
                </View>
            </View>
            <View style={styles.publicationTextContainer}>
                <Text style={styles.publicationText}>{publication.publicationText}</Text>
            </View>
            <TextInput
            multiline
            placeholder={`Leave a comment!`}
            placeholderTextColor={COLORS.textWhite}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            textAlignVertical='top'
            maxLength={90}
            value={commentsText}
            onChangeText={(text) => {setCommentsText(text)}}
            />
            <View style={styles.commentButtonContainer}>
                <TouchableOpacity style={[styles.commentButton, {opacity: isButtonDisabled ? 0.5 : 1}]} onPress={onHandlerPublicationPublicate} disabled={isButtonDisabled}>
                    <Text style={styles.commentButtonText}>Create Answer</Text>
                </TouchableOpacity>
            </View>
            {
                loading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator />
                    </View>
                ) : (
                    <FlatList
                    data={Object.values(combinedPublicationData
                        .find(item => item.id === publicationId)
                        ?.comments || {}).slice().reverse()}
                    style={styles.flatlistContainer}
                    renderItem={({ item }) => (
                        <View style={styles.publication}>
                            <Image
                                style={styles.userImage}
                                source={{
                                    uri: item?.userCommerInfo?.profileImage
                                }}
                            />
                            <View style={styles.publicationInfo}>
                                <View style={styles.userContainer}>
                                    <Text style={styles.userName}>
                                        {item?.userCommerInfo?.username}
                                    </Text>
                                    <Text style={styles.user}>
                                        @{item?.userCommerInfo?.shipid}
                                    </Text>
                                </View>
                                <Text style={styles.publicacionText}>{item?.commentsText}</Text>
                            </View>
                            {localId === item.userCommerInfo?.localId ? (
                                <TouchableOpacity style={styles.deletePublication} onPress={() => handleDeleteComment(item.id)}>
                                    <MaterialIcons name="delete" size={18} color={COLORS.textWhite} />
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    extraData={commentKey}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                    />
                )
            }
                
        </View>
    )
}

export default PublicationDetail;