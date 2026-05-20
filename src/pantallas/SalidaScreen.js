import { View, Text, Pressable } from 'react-native'
import styles from '../styles/salidaStyles'
import { calcularAuto } from '../servicios/calculoAuto'

// DESESTRUCTURACIÓN: Extrae props necesarios
export default function SalidaScreen({ ventaDatos, navigateToVenta }) {
    // Operador ternario: Si ventaDatos existe, calcula resultados, si no devuelve null
    const resultados = ventaDatos ? calcularAuto(
        ventaDatos.costo, 
        ventaDatos.salario, 
        ventaDatos.letraMensual,
        ventaDatos.tipoAuto, 
        ventaDatos.formaPago
    ) : null

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen de Venta</Text>
            
            // Renderiza solo si ambos datos existen
            {ventaDatos && resultados ? (
                <>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>TRANSACCION PROCESADA</Text>
                    </View>

                    <View style={styles.resultContainer}>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>Costo del Auto:</Text>
                            <Text style={styles.resultValue}>${resultados.costo}</Text>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>Salario (30%):</Text>
                            <Text style={styles.resultValue}>${resultados.salario30}</Text>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>Letra Mensual:</Text>
                            <Text style={styles.resultValue}>${resultados.letraMensual}</Text>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>Tipo de Auto:</Text>
                            <Text style={styles.resultValue}>{ventaDatos.tipoAuto}</Text>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>Forma de Pago:</Text>
                            <Text style={styles.resultValue}>{ventaDatos.formaPago}</Text>
                        </View>
                        <View style={[styles.resultRow, styles.resultRowLast]}>
                            <Text style={styles.resultLabel}>Estado:</Text>
                            <Text style={styles.resultValue}>{resultados.estado}</Text>
                        </View>
                    </View>
                </>
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyStateText}>No hay datos disponibles</Text>
                </View>
            )}
            
            <Pressable 
                style={styles.button}
                onPress={navigateToVenta}
            >
                <Text style={styles.buttonText}>← Volver a Venta</Text>
            </Pressable>
        </View>
    )
}