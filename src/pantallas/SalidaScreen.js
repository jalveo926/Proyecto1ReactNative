import { View, Text, Pressable } from 'react-native'
import styles from '../styles/salidaStyles'
import { calcularAuto } from '../servicios/calculoAuto'

// DESESTRUCTURACIÓN: Extrae ventaDatos y navigateVenta de props
export default function SalidaScreen({ ventaDatos, navigateToVenta }) {
    // OPERADOR TERNARIO: condición ? valorSiTrue : valorSiFalse
    // Si ventaDatos existe, llama calcularAuto(), si no, asigna null
    // Esto evita errores si los datos no llegan
    const resultados = ventaDatos ? calcularAuto(
        ventaDatos.costo, 
        ventaDatos.salario, 
        ventaDatos.letraMensual,
        ventaDatos.tipoAuto, 
        ventaDatos.formaPago
    ) : null

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, marginBottom: 20, fontWeight: 'bold'}}>Resumen de Salida</Text>
            
            {/* RENDERIZADO CONDICIONAL: && significa "solo renderiza si ambas condiciones son true" */}
            {/* Esto verifica que tanto ventaDatos como resultados existan antes de mostrar */}
            {ventaDatos && resultados && (
                <View style={{width: '80%', paddingBottom: 20}}>
                    <Text style={{fontSize: 16, marginBottom: 10}}>Costo: ${resultados.costo}</Text>
                    <Text style={{fontSize: 16, marginBottom: 10}}>Salario: ${resultados.salario30}</Text>
                    <Text style={{fontSize: 16, marginBottom: 10}}>Letra Mensual: ${resultados.letraMensual}</Text>
                    <Text style={{fontSize: 16, marginBottom: 10}}>Tipo de Auto: {ventaDatos.tipoAuto}</Text>
                    <Text style={{fontSize: 16, marginBottom: 10}}>Forma de Pago: {ventaDatos.formaPago}</Text>
                    <Text style={{fontSize: 16, marginBottom: 10}}>Estado: {resultados.estado}</Text>
                </View>
            )}
            
            {/* onPress: Evento que se dispara cuando se toca el botón */}
            <Pressable 
                style={{marginTop: 20, padding: 10, backgroundColor: '#34C759', borderRadius: 5}}
                onPress={navigateToVenta}  {/* Ejecuta la función que vino como PROP */}
            >
                <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Volver a Venta</Text>
            </Pressable>
        </View>
    )
}