import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secundaryBackground,
    },
    noUserContain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noUserText: {
        fontFamily: 'Inter-Bold',
        color: COLORS.textWhite,
        fontSize: 16
    },
    noUserTextSub: {
        fontSize: 14,
        color: COLORS.textWhite,
        marginHorizontal: 60,
        textAlign: 'center',
        opacity: .5
    },
    input: {
        flex: 1,
        marginTop: 12,
        paddingHorizontal: 4,
        paddingVertical: 12,
        fontSize: 16,
        color: COLORS.textWhite,
        fontFamily: 'Inter-Medium',
        borderTopWidth: .5,
        borderTopColor: COLORS.textWhite,
        marginHorizontal: 12
    },
    buttonContainer: {
        height: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 24,
        borderBottomWidth: .6,
        borderBottomColor: COLORS.textWhite,
        marginTop: 24
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 12,
        marginTop: 8
    },
    textButton : {
        color: COLORS.textWhite,
        fontFamily: 'Inter-Bold',
        fontSize: 16
    }
})