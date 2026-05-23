import { View, Text, Pressable } from 'react-native'
import styles from '../styles/salidaStyles'
import { calcularAuto } from '../servicios/calculoAuto'

export default function SalidaScreen({ ventaDatos, navigateToVenta }) {
    const resultados = ventaDatos ? calcularAuto(
        ventaDatos.costo,
        ventaDatos.tipoAuto,
        ventaDatos.formaPago,
        ventaDatos.salario
    ) : null

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen de Venta</Text>

            {ventaDatos && resultados ? (
                <>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>TRANSACCIÓN PROCESADA</Text>
                    </View>

                    <View style={styles.resultContainer}>

                        {/* Campos comunes a ambos flujos */}
                        {resultados.tipo === "contado" && (
                            <>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>Costo ajustado:</Text>
                            <Text style={styles.resultValue}>${resultados.costo}</Text>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>ITBM (7%):</Text>
                            <Text style={styles.resultValue}>${resultados.impuesto}</Text>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={styles.resultLabel}>Gran Total:</Text>
                            <Text style={styles.resultValue}>${resultados.total}</Text>
                        </View>
                        </>
                        )}

                        {/* Campos exclusivos de crédito */}
                        {resultados.tipo === "credito" && (
                            <>
                                <View style={styles.resultRow}>
                                    <Text style={styles.resultLabel}>30% del Salario:</Text>
                                    <Text style={styles.resultValue}>${resultados.salario30}</Text>
                                </View>
                                <View style={styles.resultRow}>
                                    <Text style={styles.resultLabel}>Letra Mensual:</Text>
                                    <Text style={styles.resultValue}>${resultados.letraMensual}</Text>
                                </View>
                                <View style={[styles.resultRow, styles.resultRowLast]}>
                                    <Text style={styles.resultLabel}>Estado:</Text>
                                    <Text style={[
                                        styles.resultValue,
                                        resultados.aprobado ? styles.aprobado : styles.noAprobado
                                    ]}>
                                        {resultados.estado}
                                    </Text>
                                </View>
                            </>
                        )}

                    </View>
                </>
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyStateText}>No hay datos disponibles</Text>
                </View>
            )}

            <Pressable style={styles.button} onPress={navigateToVenta}>
                <Text style={styles.buttonText}>← Volver a Venta</Text>
            </Pressable>
        </View>
    )
}