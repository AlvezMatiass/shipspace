import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSuccess: {
        color: COLORS.textWhite,
        fontSize: 15
    },
    successlogin: {
        backgroundColor: COLORS.textWhite,
        height: 32,
        width: 240,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90
    },
    loginText: {
        color: COLORS.secundaryBackground
    },
})