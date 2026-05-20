import { View, Text, TextInput, Pressable } from "react-native"
import { useState } from "react"
import { RadioButton } from "react-native-paper"
import styles from "../styles/ventaStyles"

// DESESTRUCTURACIÓN DE PROPS: { navigateToSalida } extrae la prop del objeto props
export default function VentaScreen({ navigateToSalida }) {
    // useState: [estado actual, función para actualizar estado]
    // Cada campo del formulario tiene su propio estado
    const [costo,setCosto] = useState(0)  // Inicia en 0
    const [salario,setSalario] = useState(0)
    const [letraMensual,setLetraMensual] = useState(0)
    const [tipoAuto,setTipoAuto] = useState("")  // Estados de RadioButton inician vacíos
    const [formaPago,setFormaPago] = useState("")
    return (
        <View style={styles.container}>
            <Text>Venta de Auto</Text>

            <View style={styles.input}>
                <Text style={styles.inputText}>Costo:</Text>
                {/* TextInput: Campo de entrada de texto */}
                {/* onChangeText: Se ejecuta cada vez que el usuario escribe (callback) */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese el costo del auto"
                    onChangeText={(text) => setCosto(text)}  {/* Actualiza el estado costo */}
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
                {/* RadioButton.Group: Agrupa radio buttons para que solo uno pueda estar seleccionado */}
                {/* value: el valor actual seleccionado */}
                {/* onValueChange: función que se ejecuta cuando cambia la selección */}
                <RadioButton.Group onValueChange={(value) => setTipoAuto(value)} value={tipoAuto}>
                    
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

            {/* Pressable: Componente para crear botones que responden a toques */}
            <Pressable 
                style={{marginTop: 20, padding: 10, backgroundColor: '#007AFF', borderRadius: 5}}
                onPress={() => {
                    {/* Crear objeto con todos los datos del formulario */}
                    const data = { costo, salario, letraMensual, tipoAuto, formaPago }
                    console.log(data)  {/* Ver en la consola qué datos se envían */}
                    navigateToSalida(data)  {/* Llamar la función que vino como PROP */}
                }}
            >
                <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Procesar transacción</Text>
            </Pressable>
        </View>
    )
}