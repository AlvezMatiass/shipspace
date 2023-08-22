import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from './styles';
import { useSelector } from 'react-redux';

const PublicationDetail = ({ navigation, route }) => {

    const { publicationId } = route.params

    const publication = useSelector((state) => state.publication.data)

    const publi = publication?.find((es) => es.publicationId === publicationId)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userInfoContainer}>
                <Image style={styles.userImage} source={{uri: 'https://i.pinimg.com/originals/81/66/1b/81661b2091f3d765e0d7946f26aed816.jpg'}}/>
                <View style={styles.userContainer}>
                        <Text style={styles.userName}>{publi.userName}</Text>
                        <Text style={styles.user}>@{publi.user}</Text>
                    </View>
            </View>
            <Text style={styles.publicationText}>{publi.publicationText}</Text>
        </ScrollView>
    )
}

export default PublicationDetail;