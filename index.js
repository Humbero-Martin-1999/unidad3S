// index.js (Este es el punto de entrada principal)

import { registerRootComponent } from 'expo';
import React from 'react';
// Importaciones de Contextos y Navegación
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import RootNavigator from './navigation/RootNavigator';

// Importación crucial para el Drawer Navigator (resuelve el error de gestos)
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

const App = () => {
  return (
    // 1. Envuelve toda la aplicación en el manejador de gestos
    <GestureHandlerRootView style={{ flex: 1 }}> 
      
      {/* 2. Provee el Contexto de Autenticación */}
      <AuthProvider>
        
        {/* 3. Provee el Contexto de Tema */}
        <ThemeProvider>
          
          {/* 4. Renderiza el navegador principal (la lógica de autenticación) */}
          <RootNavigator />
          
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

// 🚨 ESTA LÍNEA ES VITAL: Resuelve el error de "Invariant Violation: 'main' has not been registered"
registerRootComponent(App);