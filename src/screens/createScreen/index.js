import { View, Text, TextInput } from 'react-native'
import { styles } from './styles';
import { CreateButton } from '../../components';
import { COLORS } from '../../themes';

const CreateScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CreateButton />
            </View>
            <TextInput
            multiline
            placeholder={`what's happening?`}
            placeholderTextColor={COLORS.textWhite}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
            textAlignVertical='top'
            />
        </View>
    )
}

export default CreateScreen;