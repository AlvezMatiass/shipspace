import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.textWhite,
        borderRadius: 100
    },
    contentImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
})