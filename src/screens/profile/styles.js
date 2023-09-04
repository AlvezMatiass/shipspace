import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
    },
    contain: {
        height: 190,
        borderBottomWidth: 0.4,
        borderBlockColor: COLORS.textWhite,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secundaryBackground,
        marginTop: 12,
    },
    containTablet : {
        height: 280,
        borderBottomWidth: 0.4,
        borderBlockColor: COLORS.textWhite,
        marginHorizontal: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secundaryBackground,
        marginTop: 20,
    },
    profilePhotoContainer: {
        alignItems: 'center'
    },
    profilePhotoContainerTablet: {
        alignItems: 'center'
    },
    profilePhoto: {
        height: 90,
        width: 90,
        borderRadius: 100,
    },
    profilePhotoTablet: {
        height: 120,
        width: 120,
        borderRadius: 100,
    },
    userInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4
    },
    userInfoContainerTablet: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },
    textProfile: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 18,
    },
    textProfileTablet: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 22,
    },
    textSubProfile: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Regular',
        opacity: 0.4,
        fontSize: 14,
    },
    textSubProfileTablet: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Regular',
        opacity: 0.4,
        fontSize: 18,
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
    createContainerTablet: {
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
    createProfileTextTablet: {
        textAlign: 'center',
        color: COLORS.textWhite,
        fontFamily: 'Inter-Bold',
        fontSize: 20,
        marginHorizontal: 60,
    },
    createProfileSubText: {
        textAlign: 'center',
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        opacity: 0.4,
        fontSize: 12,
        marginHorizontal: 42,
    },
    createProfileSubTextTablet: {
        textAlign: 'center',
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        opacity: 0.4,
        fontSize: 18,
        marginHorizontal: 200,
        marginTop: 8
    },
    createProfileButtonContainer: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginTop: 12,
        backgroundColor: COLORS.textWhite,
    },
    createProfileButtonContainerTablet: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginTop: 14,
        backgroundColor: COLORS.textWhite,
    },
    createProfileButtonText: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        color: COLORS.textBlack,
    },
    createProfileButtonTextTablet: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        color: COLORS.textBlack,
        fontSize: 18
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
    publicationTablet: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: 1,
        paddingVertical: 18,
        paddingHorizontal: 20,
        gap: 12,
    },
    userImage: {
        height: 38,
        width: 38,
        borderRadius: 100,
    },
    userImageTablet: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    publicationInfo: {
        flex: 1,
    },
    publicationInfoTablet: {
        flex: 1,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    userContainerTablet: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    userName: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 15,
    },
    userNameTablet: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 20,
    },
    user: {
        color: COLORS.textWhite,
        fontSize: 12,
        opacity: 0.4,
    },
    userTablet: {
        color: COLORS.textWhite,
        fontSize: 16,
        opacity: 0.4,
    },
    publicacionText: {
        color: COLORS.textWhite,
        fontSize: 14,
        fontFamily: 'Inter-Light',
    },
    publicacionTextTablet: {
        color: COLORS.textWhite,
        fontSize: 18,
        fontFamily: 'Inter-Light',
    },
    deletePublication: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    deletePublicationTablet: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    yourPublications: {
        marginHorizontal: 24,
        alignItems: 'center',
        borderBottomColor: COLORS.textWhite,
    },
    yourPublicationsTablet: {
        marginHorizontal: 30,
        alignItems: 'center',
        borderBottomColor: COLORS.textWhite,
    },
    yourPublicationsText: {
        color: COLORS.textWhite,
        marginTop: 12,
        fontFamily: 'Inter-Medium',
    },
    yourPublicationsTextTablet: {
        color: COLORS.textWhite,
        marginTop: 12,
        fontFamily: 'Inter-Medium',
        fontSize: 20
    },
    logoutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6
    },
    logoutContainerTablet: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14
    },
    logoutContainerDos: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },
    logoutContainerDosTablet: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },
})
