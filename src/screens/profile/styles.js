import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground
    },
    contain: {
        height: 130,
        borderBottomWidth: .4,
        borderBlockColor: COLORS.textWhite,
        marginHorizontal: 24,
        justifyContent: 'center',
        backgroundColor: COLORS.secundaryBackground,
        marginTop: 12,
    },
    containProfile: {
        flexDirection: 'row',
        marginHorizontal: 12,
    },
    profilePhoto: {
        height: 80,
        width: 80,
        borderRadius: 100
    },
    userInfoContainer: {
        justifyContent: 'center',
        paddingLeft: 18
    },
    textProfile: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        fontSize: 18
    },
    textSubProfile: {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Regular',
        opacity: .4,
        fontSize: 14
    },
    createProfileButton: {
        paddingVertical: 2,
        backgroundColor: COLORS.textWhite,
        marginTop: 6,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 12,
        paddingHorizontal: 6
    },
    createProfileButtonText: {
        fontFamily: 'Inter-Medium',
        fontSize: 12
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginLeft: 24
    }
})