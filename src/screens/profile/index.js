import { View, Text } from 'react-native'
import { styles } from './styles';
import { ProfileInfo } from '../../components';

const Profile = () => {

    return (
        <View style={styles.container}>
            <ProfileInfo />
        </View>
    )
}

export default Profile;