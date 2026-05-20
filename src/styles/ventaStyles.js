import { StyleSheet } from "react-native"

// Colores del tema violeta moderno
const VIOLET_PRIMARY = '#7C3AED'  // Violeta principal
const VIOLET_DARK = '#6D28D9'     // Violeta oscuro
const VIOLET_LIGHT = '#EDE9FE'    // Violeta muy claro
const TEXT_DARK = '#1F2937'       // Texto oscuro
const TEXT_LIGHT = '#6B7280'      // Texto gris claro

export default StyleSheet.create({
    container:{
        paddingHorizontal: 24,
        paddingVertical: 40,
        backgroundColor: '#FFFFFF'
    },

    title:{
        fontSize: 28,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 30,
        letterSpacing: 0.5
    },

    input:{
        display: "flex",
        flexDirection: "row",
        height: 56,
        backgroundColor: VIOLET_LIGHT,
        borderColor: VIOLET_PRIMARY,
        borderWidth: 2,
        borderRadius: 12,
        width: "100%",
        marginBottom: 16,
        paddingHorizontal: 16,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2  // Sombra para Android
    },

    inputText:{
        marginRight: 12,
        minWidth: 80,
        fontSize: 14,
        fontWeight: '600',
        color: TEXT_DARK
    },

    textInput:{
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: TEXT_DARK,
        fontWeight: '500'
    },

    radioContainer:{
        width: "100%",
        marginTop: 24,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: VIOLET_LIGHT
    },

    radioLabel:{
        fontSize: 16,
        fontWeight: '600',
        color: TEXT_DARK,
        marginBottom: 12
    },

    radioButtonRow:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: VIOLET_LIGHT,
        borderRadius: 8,
        marginBottom: 8
    },

    radioButtonText:{
        marginLeft: 8,
        fontSize: 15,
        color: TEXT_DARK,
        fontWeight: '500'
    },

    button:{
        width: "100%",
        height: 56,
        backgroundColor: VIOLET_PRIMARY,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
        shadowColor: VIOLET_PRIMARY,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5
    },

    buttonText:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5
    }
})