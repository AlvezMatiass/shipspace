import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
    },
    input: {
        flex: 1,
        marginTop: 12,
        paddingHorizontal: 24,
        paddingVertical: 8,
        fontSize: 16,
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
    },
    buttonContainer: {
        height: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 24,
        borderBottomWidth: .6,
        borderBottomColor: COLORS.textWhite,
        marginTop: 24
    }
})