import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    publication: {
        flexDirection: 'row',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: 1,
        paddingVertical: 24,
        paddingHorizontal: 8,
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
})