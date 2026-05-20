import { StyleSheet } from "react-native"

const VIOLET_PRIMARY = '#7C3AED'
const VIOLET_DARK = '#6D28D9'
const VIOLET_LIGHT = '#EDE9FE'
const TEXT_DARK = '#1F2937'
const TEXT_LIGHT = '#6B7280'
const SUCCESS_COLOR = '#10B981'

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 52,        // un poco más de aire arriba
        paddingBottom: 32,
        backgroundColor: '#F9FAFB'  // gris muy suave en vez de blanco puro
    },

    title:{
        fontSize: 26,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 20,
        letterSpacing: 0.3,
        alignSelf: 'flex-start'  // alineado a la izquierda, se ve más natural
    },

    resultContainer:{
        width: '100%',
        backgroundColor: '#FFFFFF',  // blanco sobre fondo gris, da profundidad
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        borderLeftWidth: 4,
        borderLeftColor: VIOLET_PRIMARY,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3
    },

    resultRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6'  // línea más sutil
    },

    resultRowLast:{
        borderBottomWidth: 0,
        paddingTop: 14
    },

    resultLabel:{
        fontSize: 14,
        fontWeight: '500',
        color: TEXT_LIGHT,
        flex: 1
    },

    resultValue:{
        fontSize: 15,
        fontWeight: '700',
        color: TEXT_DARK,  // oscuro en vez de violeta, más legible para datos
        flex: 1,
        textAlign: 'right'
    },

    statusBadge:{
        alignSelf: 'stretch',        // ocupa todo el ancho
        backgroundColor: VIOLET_PRIMARY,  // violeta en vez de verde (el estado ya dice APROBADO/NO)
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        elevation: 2
    },

    statusText:{
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 1
    },

    button:{
        width: '100%',
        height: 52,
        backgroundColor: VIOLET_PRIMARY,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        elevation: 4
    },

    buttonText:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.3
    },

    emptyState:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40
    },

    emptyStateText:{
        fontSize: 15,
        color: TEXT_LIGHT,
        fontWeight: '500'
    }
})