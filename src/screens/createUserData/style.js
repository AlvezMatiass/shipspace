import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        color: COLORS.textWhite,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginTop: 24,
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        width: 260,
        borderBottomWidth: .5,
        borderBottomColor: COLORS.textWhite
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 24,
        height: 36,
        width: 80,
        backgroundColor: COLORS.textWhite,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.textBlack,
        fontFamily: 'Inter-Medium',
    },
})