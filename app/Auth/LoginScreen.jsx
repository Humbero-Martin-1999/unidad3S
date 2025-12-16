import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import useTheme from '../../hooks/useTheme'; 
import { useAuth } from '../../context/AuthContext'; 

// Las variables se mantienen para que la interfaz se vea con datos
const DEFAULT_EMAIL = 'test@example.com'; 
const DEFAULT_PASSWORD = '123456'; 

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { login } = useAuth(); 

  // Usar los valores predeterminados para el estado inicial
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);
  const [loading, setLoading] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    
    // 🚨 1. Única verificación: que los campos no estén vacíos.
    if (!email || !password) {
        Alert.alert('Error', 'Por favor, ingresa correo y contraseña.');
        return;
    }

    setLoading(true);
    
    try {
      // 2. Simulación y LLAMADA AL LOGIN del contexto (esto te lleva al DrawerNavigator)
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      // La función login() es la que cambia el estado global de la app
      login({ user: email, token: 'simple-pass-token' }); 
      
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión.');
    } finally {
      setLoading(false);
    }
};

  const goToRegister = () => {
    navigation.navigate('Register'); 
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
      color: colors.text,
    },
    input: {
      width: '100%',
      padding: 15,
      marginVertical: 10,
      borderRadius: 8,
      backgroundColor: colors.card,
      color: colors.text,
      borderColor: colors.border,
      borderWidth: 1,
    },
    buttonContainer: {
      width: '100%',
      marginTop: 20,
    },
    registerText: {
      marginTop: 20,
      color: colors.text,
    },
    registerLink: {
      color: colors.primary,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        placeholderTextColor={colors.placeholder}
        keyboardType="email-address"
        value={email} 
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={colors.placeholder}
        secureTextEntry
        value={password} 
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Iniciando...' : 'Entrar (ACCESO DIRECTO)'}
          onPress={handleLogin}
          color={colors.primary}
          disabled={loading}
        />
      </View>

      <TouchableOpacity onPress={goToRegister}>
        <Text style={styles.registerText}>
          ¿No tienes cuenta? <Text style={styles.registerLink}>Regístrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;