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
      setIsLoading(false);
    }, 1000); // Reducido a 1 segundo para carga más rápida
  }, []);

  // 🚨 FUNCIÓN LOGIN CORREGIDA: ACCESO DIRECTO
  const login = async (email, password) => {
    setIsLoading(true);
    // Simulación de carga
    await new Promise(resolve => setTimeout(resolve, 500)); // Carga más rápida
    
    // 🚨 LÓGICA CLAVE: Se salta la verificación de credenciales y establece el estado a logueado.
    setIsLoggedIn(true); 
    
    // Opcional: Puedes quitar el Alert si no quieres el mensaje de éxito
    // Alert.alert('Éxito', 'Inicio de sesión correcto.'); 
    
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