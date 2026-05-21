import { View, Text, TextInput, Pressable, ScrollView } from "react-native"
import { useState } from "react"
import { RadioButton } from "react-native-paper"
import styles from "../styles/ventaStyles"

export default function VentaScreen({ navigateToSalida }) {
    //Variables que utilizaremos para mostrar la información 
    const [costo,setCosto] = useState(0)
    const [salario,setSalario] = useState(0)
    const [tipoAuto,setTipoAuto] = useState("")
    const [formaPago,setFormaPago] = useState("")
    return (
        <ScrollView style={styles.container}>
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
            
            {/* Solo visible si seleccionó Crédito */}
            {formaPago === "Credito" && (
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
            )}

            <View style={styles.radioContainer}>
                <Text style={styles.radioLabel}>Tipo de auto:</Text>
                <RadioButton.Group onValueChange={(value) => setTipoAuto(value)} value={tipoAuto}>

                    <Pressable style={styles.radioButtonRow} onPress={() => setTipoAuto("Manual")}>
                        <RadioButton value="Manual" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Manual</Text>
                    </Pressable>

                    <Pressable style={styles.radioButtonRow} onPress={() => setTipoAuto("Automatico")}>
                        <RadioButton value="Automatico" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Automático</Text>
                    </Pressable>

                </RadioButton.Group>
            </View>

            <View style={styles.radioContainer}>
                <Text style={styles.radioLabel}>Forma de Pago:</Text>
                <RadioButton.Group onValueChange={(value) => { setFormaPago(value); setSalario("") }} value={formaPago}>

                    <Pressable style={styles.radioButtonRow} onPress={() => { setFormaPago("Credito"); setSalario("") }}>
                        <RadioButton value="Credito" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Crédito</Text>
                    </Pressable>

                    <Pressable style={styles.radioButtonRow} onPress={() => { setFormaPago("Contado"); setSalario("") }}>
                        <RadioButton value="Contado" color="#7C3AED" />
                        <Text style={styles.radioButtonText}>Contado</Text>
                    </Pressable>

                </RadioButton.Group>
            </View>

            <Pressable 
                style={styles.button}
                onPress={() => {
                    const data = { costo, salario, tipoAuto, formaPago }
                    console.log(data)
                    navigateToSalida(data)
                }}
            >
                <Text style={styles.buttonText}>Procesar transacción</Text>
            </Pressable>
        </ScrollView>
    )
}