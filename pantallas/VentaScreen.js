import { View, Text,TextInput } from "react-native"
import { useState } from "react"
import styles from "../src/styles/ventaStyles"

export default function VentaScreen() {
    //Variables que utilizaremos para mostrar la información 
    const [costo,setCosto] = useState(0)
    const [salario,setSalario] = useState(0)

    return (
        <View style={styles.container}>
            <Text>Venta de Auto</Text>

            <View style={styles.input}>
                <Text>Costo:</Text>
                <TextInput
                placeholder="Ingrese el costo del auto"
                onChangeText={(text) => setCosto(text)}
                />
            </View>
            
            <View style={styles.input}> 
                <Text>Salario:</Text>
                <TextInput
                    placeholder="Ingrese el salario"
                    onChangeText={(text) => setSalario(text)}
                />
            </View>

            <View>
                <Text>Forma de Pago:</Text>
                
            </View>
        </View>
    )
}