import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
    },
    contain: {
        height: 170,
        borderBottomWidth: 0.4,
        borderBlockColor: COLORS.textWhite,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secundaryBackground,
        marginTop: 12,
    },
    profilePhotoContainer: {
        alignItems: 'center'
    },
    profilePhoto: {
        height: 90,
        width: 90,
        borderRadius: 100,
    },
    userInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4
    },
    textProfile: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 18,
    },
    textSubProfile: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Regular',
        opacity: 0.4,
        fontSize: 14,
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginLeft: 24,
    },
    createContainer: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createProfileText: {
        textAlign: 'center',
        color: COLORS.textWhite,
        fontFamily: 'Inter-Bold',
        fontSize: 15,
        marginHorizontal: 22,
    },
    createProfileSubText: {
        textAlign: 'center',
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        opacity: 0.4,
        fontSize: 12,
        marginHorizontal: 42,
    },
    createProfileButtonContainer: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginTop: 12,
        backgroundColor: COLORS.textWhite,
    },
    createProfileButtonText: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        color: COLORS.textBlack,
    },
    publication: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 8,
        gap: 10,
    },
    userImage: {
        height: 38,
        width: 38,
        borderRadius: 100,
    },
    publicationInfo: {
        flex: 1,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    userName: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 15,
    },
    user: {
        color: COLORS.textWhite,
        fontSize: 12,
        opacity: 0.4,
    },
    publicacionText: {
        color: COLORS.textWhite,
        fontSize: 14,
        fontFamily: 'Inter-Light',
    },
    noPublicationContain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secundaryBackground,
    },
    noPublication: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: COLORS.textWhite,
    },
    noPublicationSub: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        opacity: 0.4,
        color: COLORS.textWhite,
    },
    deletePublication: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    yourPublications: {
        marginHorizontal: 24,
        alignItems: 'center',
        borderBottomColor: COLORS.textWhite,
    },
    yourPublicationsText: {
        color: COLORS.textWhite,
        marginTop: 12,
        fontFamily: 'Inter-Medium',
    },
})
