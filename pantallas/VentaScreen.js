import { View, Text, TextInput, Pressable } from "react-native"
import { useState } from "react"
import { RadioButton } from "react-native-paper"
import styles from "../styles/ventaStyles"

// DESESTRUCTURACIÓN: { navigateToSalida } extrae función de props
export default function VentaScreen({ navigateToSalida }) {
    // useState: [estado actual, función para actualizar estado]
    const [costo,setCosto] = useState(0)
    const [salario,setSalario] = useState(0)
    const [letraMensual,setLetraMensual] = useState(0)
    const [tipoAuto,setTipoAuto] = useState("")
    const [formaPago,setFormaPago] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Venta de Auto</Text>

            <View style={styles.input}>
                <Text style={styles.inputText}>Costo:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese el costo del auto"
                    placeholderTextColor="#A0AEC0"
                    keyboardType="numeric"
                    onChangeText={(text) => setCosto(text)}
                />
            </View>
            
            <View style={styles.input}> 
                <Text style={styles.inputText}>Salario:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese el salario"
                    placeholderTextColor="#A0AEC0"
                    keyboardType="numeric"
                    onChangeText={(text) => setSalario(text)}
                />
            </View>

            <View style={styles.radioContainer}>
                <Text style={styles.radioLabel}>Tipo de auto:</Text>
                // Solo un RadioButton puede estar seleccionado
                <RadioButton.Group onValueChange={(value) => setTipoAuto(value)} value={tipoAuto}>
                    
                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Manual" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Manual</Text>
                    </View>

                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Automatico" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Automático</Text>
                    </View>

                </RadioButton.Group>
            </View>

            <View style={styles.radioContainer}>
                <Text style={styles.radioLabel}>Forma de Pago:</Text>
                <RadioButton.Group onValueChange={(value) => setFormaPago(value)} value={formaPago}>
                    
                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Credito" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Crédito</Text>
                    </View>

                    <View style={styles.radioButtonRow}>
                        <RadioButton value="Contado" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Contado</Text>
                    </View>

                </RadioButton.Group>
            </View>

            <View style={styles.input}> 
                <Text style={styles.inputText}>Letra Mensual:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese la letra mensual"
                    placeholderTextColor="#A0AEC0"
                    keyboardType="numeric"
                    onChangeText={(text) => setLetraMensual(text)}
                />
            </View>

            <Pressable 
                style={styles.button}
                onPress={() => {
                    const data = { costo, salario, letraMensual, tipoAuto, formaPago }
                    console.log(data)
                    navigateToSalida(data)
                }}
            >
                <Text style={styles.buttonText}>Procesar transacción</Text>
            </Pressable>
        </View>
    )
}