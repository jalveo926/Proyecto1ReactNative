import { StyleSheet } from "react-native"

// Colores del tema violeta moderno
const VIOLET_PRIMARY = '#7C3AED'
const VIOLET_DARK = '#6D28D9'
const VIOLET_LIGHT = '#EDE9FE'
const TEXT_DARK = '#1F2937'
const TEXT_LIGHT = '#6B7280'
const SUCCESS_COLOR = '#10B981'  // Verde para éxito

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 40,
        backgroundColor: '#FFFFFF'
    },

    title:{
        fontSize: 28,
        fontWeight: '700',
        color: TEXT_DARK,
        marginBottom: 32,
        letterSpacing: 0.5
    },

    resultContainer:{
        width: '100%',
        backgroundColor: VIOLET_LIGHT,
        borderRadius: 16,
        padding: 24,
        marginBottom: 24,
        borderLeftWidth: 4,
        borderLeftColor: VIOLET_PRIMARY,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3
    },

    resultRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    },

    resultRowLast:{
        borderBottomWidth: 0
    },

    resultLabel:{
        fontSize: 15,
        fontWeight: '600',
        color: TEXT_LIGHT,
        flex: 1
    },

    resultValue:{
        fontSize: 16,
        fontWeight: '700',
        color: VIOLET_DARK,
        flex: 1,
        textAlign: 'right'
    },

    statusBadge:{
        alignSelf: 'center',
        backgroundColor: SUCCESS_COLOR,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: SUCCESS_COLOR,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
    },

    statusText:{
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 0.5
    },

    button:{
        width: '100%',
        height: 56,
        backgroundColor: VIOLET_PRIMARY,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
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
    },

    emptyState:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40
    },

    emptyStateText:{
        fontSize: 16,
        color: TEXT_LIGHT,
        fontWeight: '500'
    }
})