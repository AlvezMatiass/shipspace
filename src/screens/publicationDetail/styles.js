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
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    userContainer: {
        marginLeft: 4,
    },
    userName: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
    user: {
        color: COLORS.textWhite,
        fontSize: 14,
        opacity: .3,
    },
    publicationText: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: COLORS.textWhite,
        marginHorizontal: 8,
        paddingVertical: 4
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
    commentButtonContainer: {
        alignItems: 'flex-end',
        marginHorizontal: 12,
        marginTop: 8,
        paddingBottom: 12,
        borderBottomColor: COLORS.textWhite,
        borderBottomWidth: .6
    },
    commentButton: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: COLORS.textWhite,
        borderRadius: 3
    },
    commentButtonText: {
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
        fontSize: 10
    },
    publication: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        paddingVertical: 14,
        paddingHorizontal: 14,
        gap: 10
    },
    userImage: {
        height: 38,
        width: 38,
        borderRadius: 100
    },
    publicationInfo: {
        flex: 1,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    userName: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 15
    },
    user: {
        color: COLORS.textWhite,
        fontSize: 12,
        opacity: .4
    },
    publicacionText: {
        color: COLORS.textWhite,
        fontSize: 14,
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
})