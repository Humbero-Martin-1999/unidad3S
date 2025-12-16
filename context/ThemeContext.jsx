// context/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Usa el esquema de color del sistema como valor inicial, pero permite anularlo
  const systemColorScheme = useColorScheme(); // 'light' o 'dark'
  const [isDarkTheme, setIsDarkTheme] = useState(systemColorScheme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Define los colores básicos (puedes expandir esto con tu paleta de gluestack)
  const colors = {
    primary: isDarkTheme ? '#4f46e5' : '#1e3a8a', // Índigo/Azul
    background: isDarkTheme ? '#1f2937' : '#ffffff', // Gris Oscuro / Blanco
    text: isDarkTheme ? '#f3f4f6' : '#111827', // Blanco Claro / Negro Oscuro
    card: isDarkTheme ? '#374151' : '#f9fafb', // Gris medio / Gris muy claro
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);