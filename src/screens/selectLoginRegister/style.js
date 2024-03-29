import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secundaryBackground
    },
    imageLogo: {
        position: 'absolute',
        height: 50,
        width: 50, 
        top: 30
    },
    noAccountTextContainer: {
        flexDirection: 'row',
        marginHorizontal: 12,
        gap: 4,
        marginTop: 8
    },
    noAccountText: {
        color: COLORS.textWhite,
        opacity: .4,
        fontSize: 14
    },
    noAccountTextRegister: {
        color: COLORS.textWhite,
        opacity: .8,
        fontSize: 14
    },
    buttonContainer: {
        height: 46,
        width: 330,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLORS.textWhite,
        marginHorizontal: 24
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        color: COLORS.textWhite
    },
    subtitlecontainer: {
        flex: .3,
        marginHorizontal: 24
      },
    subtitle: {
        fontFamily: 'Inter-Bold',
        color: COLORS.textWhite,
        fontSize: 33,
        opacity: .8
    },
})