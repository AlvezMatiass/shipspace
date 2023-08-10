import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: COLORS.secundaryBackground,
        borderBottomColor: COLORS.extraColor,
        borderBottomWidth: .3
    },
    heacerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
     headerImage: {
        height: 40,
        width: 40,
    }
})