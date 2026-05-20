import { StyleSheet } from "react-native"

const VIOLET_PRIMARY = '#7C3AED'
const VIOLET_LIGHT = '#EDE9FE'
const VIOLET_BORDER = '#C4B5FD'   // borde más suave que el primario
const TEXT_DARK = '#1F2937'
const TEXT_LIGHT = '#6B7280'

export default StyleSheet.create({
    container:{
        paddingHorizontal: 24,
        paddingTop: 52,
        paddingBottom: 40,
        backgroundColor: '#F9FAFB'
    },

    title:{
        fontSize: 26,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 28,
        letterSpacing: 0.3
    },

    input:{
        flexDirection: "row",
        height: 54,
        backgroundColor: '#FFFFFF',   // blanco sobre fondo gris
        borderColor: VIOLET_BORDER,   
        borderWidth: 1.5,
        borderRadius: 12,
        width: "100%",
        marginBottom: 14,
        paddingHorizontal: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1
    },

    inputText:{
        marginRight: 10,
        minWidth: 75,
        fontSize: 14,
        fontWeight: '600',
        color: TEXT_DARK
    },

    textInput:{
        flex: 1,
        fontSize: 15,
        color: TEXT_DARK,
        fontWeight: '400'
    },

    radioContainer:{
        width: "100%",
        marginTop: 20,
        marginBottom: 4,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },

    radioLabel:{
        fontSize: 15,
        fontWeight: '600',
        color: TEXT_DARK,
        marginBottom: 10
    },

    radioButtonRow:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',   
        borderRadius: 10,
        marginBottom: 8,
        borderWidth: 1.5,
        borderColor: VIOLET_BORDER    
    },

    radioButtonText:{
        marginLeft: 8,
        fontSize: 14,
        color: TEXT_DARK,
        fontWeight: '500'
    },

    button:{
        width: "100%",
        height: 54,
        backgroundColor: VIOLET_PRIMARY,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 28,
        elevation: 4
    },

    buttonText:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.3
    }
})