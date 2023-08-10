import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { styles } from './styles';
import { Publication } from '../../components';
import { useSelector } from 'react-redux';

const Menu = ({ navigation }) => {

    const onSelectPublication = ({ publicationId }) => {
        navigation.navigate('PublicationDetail', { publicationId })
    }

    const publication = useSelector((state) => state.publication.data)

    return (
        <View style={styles.container}>
            <FlatList
            data={publication}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.publication} onPress={() => onSelectPublication({publicationId: item.publicationId})}>
                        <View>
                            <Image style={styles.userImage} source={{uri: item.image}}/>
                        </View>
                        <View style={styles.publicationInfo}>
                            <View style={styles.userContainer}>
                                <Text style={styles.userName}>{item.userName}</Text>
                                <Text style={styles.user}>@{item.user}</Text>
                            </View>
                            <Text style={styles.publicacionText}>{item.publicationText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={publication.user}
            />
        </View>
    )
}

export default Menu;