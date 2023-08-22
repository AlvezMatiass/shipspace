import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secundaryBackground
    },
    content: {
        width: '70%'
    },
    header: {
        fontFamily: 'Inter-Bold',
        fontSize: 22,
        color: COLORS.textWhite
    },
    label: {
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        marginTop: 12,
        color: COLORS.textWhite
    },
    input: {
        fontFamily: 'Inter-Regular',
        height: 40,
        width: '90%',
        borderBottomColor: COLORS.textWhite,
        borderBottomWidth: .5,
        color: COLORS.textWhite
    },
    buttonContainer: {
           marginTop: 18
    },
    button: {
        backgroundColor: COLORS.textWhite,
        paddingVertical: 7,
        paddingHorizontal: 16
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Inter-Medium',
        color: COLORS.extraColor
    },
    linkContainer: {
        marginTop: 12
    },
    link: {

    },
    linkText: {
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        opacity: .4,
        color: COLORS.textWhite
    },
})