import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: .6
    },
    containerTablet: {
        height: 76,
        width: '100%',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: .6
    },
    headerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContentTablet: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
     headerImage: {
        height: 40,
        width: 40,
    },
    headerImageTablet: {
        height: 60,
        width: 60,
    },
})