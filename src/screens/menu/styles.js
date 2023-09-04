import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground
    },
    publication: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 8,
        gap: 10
    },
    publicationTablet: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: 1,
        paddingVertical: 32,
        paddingHorizontal: 26,
        gap: 10  
    },
    userImage: {
        height: 38,
        width: 38,
        borderRadius: 100
    },
    userImageTablet: {
        height: 56,
        width: 56,
        borderRadius: 100,
        marginTop: 6
    },
    publicationInfo: {
        flex: 1,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    userContainerTablet: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    userName: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 15
    },
    userNameTablet: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 22
    },
    user: {
        color: COLORS.textWhite,
        fontSize: 12,
        opacity: .4
    },
    userTablet: {
        color: COLORS.textWhite,
        fontSize: 19,
        opacity: .4
    },
    publicacionText: {
        color: COLORS.textWhite,
        fontSize: 14,
        fontFamily: 'Inter-Light',
    },
    publicacionTextTablet: {
        color: COLORS.textWhite,
        fontSize: 19,
        fontFamily: 'Inter-Light',
    },
    loading: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noPublicationContain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secundaryBackground
    },
    noPublication: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: COLORS.textWhite
    },
    noPublicationSub: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        opacity: .4,
        color: COLORS.textWhite
    },
    deletePublication: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4
    },
})