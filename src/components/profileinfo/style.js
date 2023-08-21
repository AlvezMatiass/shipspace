import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        height: 140,
        borderBottomWidth: .4,
        borderBlockColor: COLORS.textWhite,
        marginHorizontal: 24,
        justifyContent: 'center'
    },
    contain: {
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
    userStatsContainer: {
        flexDirection: 'row',
        marginTop: 4
    },
    userPubliLike: {
        fontSize: 15,
        color: COLORS.textWhite,
        marginRight: 12,
    },
})