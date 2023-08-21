import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton : {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Bold',
        fontSize: 16
    }
})