import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style';

const CreateButton = () => {
    return (
        <View style={styles.container}>
             <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.textButton}>Create</Text>
            </TouchableOpacity>
        </View>   
    )
}

export default CreateButton;