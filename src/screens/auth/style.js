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
    contentTablet : {
        width: '60%'
    },
    header: {
        fontFamily: 'Inter-Bold',
        fontSize: 22,
        color: COLORS.textWhite
    },
    headerTablet: {
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        color: COLORS.textWhite
    },
    label: {
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        marginTop: 12,
        color: COLORS.textWhite
    },
    labelTablet: {
        fontSize: 20,
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
    inputTablet: {
        fontFamily: 'Inter-Regular',
        height: 46,
        width: '90%',
        borderBottomColor: COLORS.textWhite,
        borderBottomWidth: 1,
        color: COLORS.textWhite,
        fontSize: 18
    },
    buttonContainer: {
        marginTop: 18
    },
    buttonContainerTablet: {
        marginTop: 30
    },
    button: {
        backgroundColor: COLORS.textWhite,
        paddingVertical: 7,
        paddingHorizontal: 16
    },
    buttonTablet: {
        backgroundColor: COLORS.textWhite,
        paddingVertical: 9,
        paddingHorizontal: 18
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Inter-Medium',
        color: COLORS.extraColor
    },
    buttonTextTablet: {
        fontSize: 18,
        fontFamily: 'Inter-Medium',
        color: COLORS.extraColor
    },
    linkContainer: {
        marginTop: 12
    },
    linkContainerTablet: {
        marginTop: 14
    },
    link: {

    },
    linkText: {
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        opacity: .4,
        color: COLORS.textWhite
    },
    linkTextTablet: {
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        opacity: .4,
        color: COLORS.textWhite
    },
})