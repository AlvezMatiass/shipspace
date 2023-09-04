import { View, Text, Image, useWindowDimensions } from "react-native";
import { styles } from "./style";

const Header = () => {

    const {width} = useWindowDimensions()

    return  (
        <View style={width > 660 ? styles.containerTablet : styles.container }>
            <View style={width > 660 ? styles.headerContentTablet : styles.headerContent}>
                <Image style={width > 660 ? styles.headerImageTablet : styles.headerImage} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/shipspace-ea24f.appspot.com/o/Sin%20t%C3%ADtulo-1.png?alt=media&token=72e4ecb3-e87c-4470-adfc-98bcf3daa819'}}/>
            </View>
        </View>
    )
}

export default Header