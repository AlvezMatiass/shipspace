import { View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'
import { COLORS } from '../../themes';

const ProfileInfo = () => {
    return (
      <View style={styles.container}>
        <View style={styles.contain}>
          <View>
              <Image style={styles.profilePhoto} source={{ uri: 'https://pbs.twimg.com/media/FZgw2_rXwAIZZCe?format=webp&name=small'}}/>
          </View>
          <View style={styles.userInfoContainer}>
              <Text style={styles.textProfile}>Matias</Text>
              <Text style={styles.textSubProfile}>@alvezmatiass</Text>
          </View>
        </View>
      </View>  
    )
}

export default ProfileInfo