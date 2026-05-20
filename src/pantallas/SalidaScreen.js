import { View, Text, Pressable } from 'react-native'
import styles from '../styles/salidaStyles'
import { calcularAuto } from '../servicios/calculoAuto'

export default function SalidaScreen({ ventaDatos, navigateToVenta }) {
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
            
            <Pressable 
                style={{marginTop: 20, padding: 10, backgroundColor: '#34C759', borderRadius: 5}}
                onPress={navigateToVenta}
            >
                <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Volver a Venta</Text>
            </Pressable>
        </View>
    )
}