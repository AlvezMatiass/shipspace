import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secundaryBackground
    },
    backButtonContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: 32,
        marginLeft: 32
    },
    content: {
        width: '70%'
    },
    contentTablet : {
        width: '60%'
    },
    header: {
        fontFamily: 'Inter-Bold',
        fontSize: 24,
        color: COLORS.textWhite,
    },
    headerTablet: {
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        color: COLORS.textWhite
    },
    labelEmail: {
        top: 8,
        left: 6,
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        color: COLORS.textWhite,
        position: 'relative',
        backgroundColor: COLORS.secundaryBackground,
        zIndex: 2,
        width: 48,
        textAlign: 'center'
    },
    labelPassword: {
        top: 8,
        left: 6,
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        color: COLORS.textWhite,
        position: 'relative',
        backgroundColor: COLORS.secundaryBackground,
        zIndex: 2,
        width: 80,
        textAlign: 'center'
    },
    labelTablet: {
        fontSize: 20,
        fontFamily: 'Inter-Bold',
        marginTop: 12,
        color: COLORS.textWhite,
    },
    input: {
        fontFamily: 'Inter-Regular',
        height: 44,
        width: '100%',
        borderColor: COLORS.textWhite,
        borderWidth: .4,
        color: COLORS.textWhite,
        paddingHorizontal: 12
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
        width: 180,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    buttonTablet: {
        backgroundColor: COLORS.textWhite,
        paddingVertical: 9,
        paddingHorizontal: 18
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Inter-Bold',
        color: COLORS.extraColor
    },
    buttonTextTablet: {
        fontSize: 18,
        fontFamily: 'Inter-Bold',
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