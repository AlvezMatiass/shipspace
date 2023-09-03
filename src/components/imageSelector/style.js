import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        backgroundColor: COLORS.textWhite,
        borderRadius: 100
    },
    contentImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        height: 90,
        width: 90,
        borderRadius: 100
    },
})