import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import VentaScreen from "./src/pantallas/VentaScreen"
import SalidaScreen from './src/pantallas/SalidaScreen';

export default function App() {
  // useState: [estado actual, función para actualizar]
  const [currentScreen, setCurrentScreen] = useState('Venta')
  const [ventaDatos, setVentaDatos] = useState(null)

  const navigateToSalida = (data) => {
    setVentaDatos(data)
    setCurrentScreen('Salida')
  }

  const navigateToVenta = () => {
    setCurrentScreen('Venta')
  }

  return (
    <View style={{flex: 1}}>
      {currentScreen === 'Venta' && 
          <VentaScreen navigateToSalida={navigateToSalida} />
      }
      {currentScreen === 'Salida' && 
          <SalidaScreen ventaDatos={ventaDatos} navigateToVenta={navigateToVenta} />
      }
    </View>
  );
}

