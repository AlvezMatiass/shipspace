import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
    },
    noUserContain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noUserContainTablet : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noUserText: {
        fontFamily: 'Inter-Bold',
        color: COLORS.textWhite,
        fontSize: 16
    },
    noUserTextTablet: {
        fontFamily: 'Inter-Bold',
        color: COLORS.textWhite,
        fontSize: 22
    },
    noUserTextSub: {
        fontSize: 14,
        color: COLORS.textWhite,
        marginHorizontal: 60,
        textAlign: 'center',
        opacity: .5
    },
    noUserTextSubTablet: {
        fontSize: 18,
        color: COLORS.textWhite,
        marginHorizontal: 160,
        textAlign: 'center',
        opacity: .5
    },
    input: {
        flex: 1,
        marginTop: 12,
        paddingHorizontal: 4,
        paddingVertical: 12,
        fontSize: 16,
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        borderTopWidth: .5,
        borderTopColor: COLORS.textWhite,
        marginHorizontal: 12
    },
    inputTablet: {
        flex: 1,
        marginTop: 22,
        paddingHorizontal: 8,
        paddingVertical: 14,
        fontSize: 22,
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        borderTopWidth: 1,
        borderTopColor: COLORS.textWhite,
        marginHorizontal: 24
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 12,
        marginTop: 8
    },
    buttonContainerTablet: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 16,
        marginTop: 8
    },
    textButton : {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Bold',
        fontSize: 16
    },
    textButtonTablet : {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Bold',
        fontSize: 22
    },
})