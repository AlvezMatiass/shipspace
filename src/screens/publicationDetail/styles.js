import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginHorizontal: 8,
        marginVertical: 8
    },
    userInfoContainerTablet: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginHorizontal: 24,
        marginVertical: 12
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    userImageTablet: {
        height: 60,
        width: 60,
        borderRadius: 100
    },
    userContainer: {
        marginLeft: 4,
    },
    userContainerTablet: {
        marginLeft: 8,
    },
    userName: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
    userNameTablet: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 24,
    },
    user: {
        color: COLORS.textWhite,
        fontSize: 14,
        opacity: .3,
    },
    userTablet: {
        color: COLORS.textWhite,
        fontSize: 18,
        opacity: .3,
    },
    publicationText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: COLORS.textWhite,
        marginHorizontal: 8,
        paddingVertical: 4
    },
    publicationTextTablet: {
        fontSize: 22,
        fontFamily: 'Inter-Regular',
        color: COLORS.textWhite,
        marginHorizontal: 22,
        paddingVertical: 8
    },
    input: {
        height: 56,
        marginTop: 12,
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 14,
        color: COLORS.textWhite,
        fontFamily: 'Inter-Light',
        borderTopWidth: .6,
        borderColor: COLORS.textWhite,
        marginHorizontal: 12,
    },
    inputTablet: {
        height: 56,
        marginTop: 20,
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 20,
        color: COLORS.textWhite,
        fontFamily: 'Inter-Light',
        borderTopWidth: .6,
        borderColor: COLORS.textWhite,
        marginHorizontal: 24,
    },
    commentButtonContainer: {
        alignItems: 'flex-end',
        marginHorizontal: 12,
        marginTop: 8,
        paddingBottom: 12,
        borderBottomColor: COLORS.textWhite,
        borderBottomWidth: .6
    },
    commentButtonContainerTablet: {
        alignItems: 'flex-end',
        marginHorizontal: 24,
        marginTop: 12,
        paddingBottom: 14,
        borderBottomColor: COLORS.textWhite,
        borderBottomWidth: .6
    },
    commentButton: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: COLORS.textWhite,
        borderRadius: 3
    },
    commentButtonTablet: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: COLORS.textWhite,
        borderRadius: 6 
    },
    commentButtonText: {
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
        fontSize: 10
    },
    commentButtonTextTablet: {
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
        fontSize: 16
    },
    commentpublication: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        paddingVertical: 14,
        paddingHorizontal: 14,
        gap: 10
    },
    commentpublicationTablet: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        paddingVertical: 18,
        paddingHorizontal: 24,
        gap: 10
    },
    commentuserImage: {
        height: 38,
        width: 38,
        borderRadius: 100
    },
    commentuserImageTablet: {
        height: 56,
        width: 56,
        borderRadius: 100
    },
    commentpublicationInfo: {
        flex: 1,
    },
    commentpublicationInfoTablet: {
        flex: 1
    },
    commentuserContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    commentuserContainerTablet: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    commentuserName: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 15
    },
    commentuserNameTablet: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 21
    },
    commentuser: {
        color: COLORS.textWhite,
        fontSize: 12,
        opacity: .4
    },
    commentuserTablet: {
        color: COLORS.textWhite,
        fontSize: 19,
        opacity: .4
    },
    commentpublicacionText: {
        color: COLORS.textWhite,
        fontSize: 14,
        fontFamily: 'Inter-Light',
    },
    commentpublicacionTextTablet: {
        color: COLORS.textWhite,
        fontSize: 20,
        fontFamily: 'Inter-Light',
    },
    flatlistContainer: {
        paddingVertical: 12
    },
    loading: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noProfile: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.textWhite,
        borderBottomWidth: .6,
        borderTopWidth: .6,
        margin: 12
    },
    noProfileTablet: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.textWhite,
        borderBottomWidth: .6,
        borderTopWidth: .6,
        margin: 24
    },
    noProfileText: {
        fontFamily: 'Inter-Medium',
        fontSize: 14,
        color: COLORS.textWhite,
        opacity: .2
    },
    noProfileTextTablet: {
        fontFamily: 'Inter-Medium',
        fontSize: 20,
        color: COLORS.textWhite,
        opacity: .2
    },
})