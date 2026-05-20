import { View, Text,TextInput } from "react-native"
import { useState } from "react"
import { RadioButton} from "react-native-paper"
import styles from "../src/styles/ventaStyles"

export default function VentaScreen() {
    //Variables que utilizaremos para mostrar la información 
    const [costo,setCosto] = useState(0)
    const [salario,setSalario] = useState(0)
    const [letraMensual,setLetraMensual] = useState(0)
    const [formaPago,setFormaPago] = useState("")
    return (
        <View style={styles.container}>
            <Text>Venta de Auto</Text>

            <View style={styles.input}>
                <Text style={styles.inputText}>Costo:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese el costo del auto"
                    onChangeText={(text) => setCosto(text)}
                />
            </View>
            
            <View style={styles.input}> 
                <Text style={styles.inputText}>Salario:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese el salario"
                    onChangeText={(text) => setSalario(text)}
                />
            </View>

            <View style={styles.radioContainer}>
                <Text>Tipo de auto:</Text>
                <RadioButton.Group onValueChange={(value) => setFormaPago(value)} value={formaPago}>
                    
                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Manual" />
                        <Text>Manual</Text>
                    </View>

                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Automatico" />
                        <Text>Automático</Text>
                    </View>

                </RadioButton.Group>
            </View>

            <View style={styles.radioContainer}>
                <Text>Forma de Pago:</Text>
                <RadioButton.Group onValueChange={(value) => setFormaPago(value)} value={formaPago}>
                    
                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Credito" />
                        <Text>Crédito</Text>
                    </View>

                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Contado" />
                        <Text>Contado</Text>
                    </View>

                </RadioButton.Group>
            </View>

            <View style={styles.input}> 
                <Text style={styles.inputText}>Letra Mensual:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese la letra mensual"
                    onChangeText={(text) => setLetraMensual(text)}
                />
            </View>
        </View>
    )
}