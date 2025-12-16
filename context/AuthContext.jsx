// context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicialmente, asumimos que no está logueado hasta que lo verificamos
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de verificación de token (por ejemplo, al iniciar la app)
  useEffect(() => {
    // Aquí iría la lógica para AsyncStorage o SecureStore para checar si hay un token válido
    setTimeout(() => {
      // Por ahora, asumimos que no hay token
      // setIsLoggedIn(true); // Descomenta para probar el estado logueado
      setIsLoading(false);
    }, 2000); // 2 segundos de simulación de carga
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    // Simulación de llamada API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Validación básica simulada
    if (email === 'test@app.com' && password === '123456') {
      setIsLoggedIn(true);
      Alert.alert('Éxito', 'Inicio de sesión correcto.');
    } else {
      Alert.alert('Error', 'Por favor, verifica tu email o contraseña.');
    }
    setIsLoading(false);
  };

  const logout = async () => {
    // Aquí iría la lógica para borrar el token de AsyncStorage/SecureStore
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);