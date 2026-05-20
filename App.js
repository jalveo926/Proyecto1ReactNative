import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import VentaScreen from "./src/pantallas/VentaScreen"
import SalidaScreen from './src/pantallas/SalidaScreen';

export default function App() {
  // useState es un HOOK que permite agregar estado a componentes funcionales
  // Primer elemento: valor actual, Segundo elemento: función para actualizar
  const [currentScreen, setCurrentScreen] = useState('Venta')
  // ventaDatos almacena los datos que vienen del formulario de VentaScreen
  const [ventaDatos, setVentaDatos] = useState(null)

  // Función que se pasa como PROP a VentaScreen para ir a la pantalla de Salida
  // Recibe los datos del formulario como parámetro
  const navigateToSalida = (data) => {
    setVentaDatos(data)  // Guarda los datos en el estado
    setCurrentScreen('Salida')  // Cambia la pantalla actual
  }

  // Función que se pasa como PROP a SalidaScreen para volver a VentaScreen
  const navigateToVenta = () => {
    setCurrentScreen('Venta')
  }

  return (
    <View style={{flex: 1}}>
      {/* RENDERIZADO CONDICIONAL: Solo muestra VentaScreen si currentScreen === 'Venta' */}
      {currentScreen === 'Venta' && 
          <VentaScreen navigateToSalida={navigateToSalida} />
      }
      {/* PROPS: Pasar datos y funciones a componentes hijos */}
      {currentScreen === 'Salida' && 
          <SalidaScreen ventaDatos={ventaDatos} navigateToVenta={navigateToVenta} />
      }
    </View>
  );
}

