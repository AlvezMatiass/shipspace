import { View, Text, Image } from "react-native";
import { styles } from "./style";

const Header = () => {
    return  (
        <View style={ styles.container }>
            <View style={styles.heacerContent}>
                <Image style={styles.headerImage} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/shipspace-ea24f.appspot.com/o/Sin%20t%C3%ADtulo-1.png?alt=media&token=72e4ecb3-e87c-4470-adfc-98bcf3daa819'}}/>
            </View>
        </View>
    )
}

export default Header