import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './style';

const Publication = ({onSelectPublication, user, userName, publicationText, image, publicationId}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.publication} onPress={onSelectPublication}>
                <View>
                    <Image style={styles.userImage} source={{uri: image}}/>
                </View>
                <View style={styles.publicationInfo}>
                    <View style={styles.userContainer}>
                        <Text style={styles.userName}>{userName}</Text>
                        <Text style={styles.user}>@{user}</Text>
                    </View>
                    <Text style={styles.publicacionText}>{publicationText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Publication;