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
        height: 42,
        width: 42,
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
        fontSize: 15,
        opacity: .3,
    },
    publicationText: {
        fontSize: 17,
        fontFamily: 'Inter-Light',
        color: COLORS.textWhite,
        marginHorizontal: 8,
    },
    publicationImageContainer: {
        height: 240
    },
    publicationImage: {
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 12
    },
})