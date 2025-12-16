// app/Auth/RegisterScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
// Si usas gluestack-ui, podrías reemplazar View, Text, etc., por Box, Text, Input, Button, etc.

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  // Estado para los campos del formulario, siguiendo los ejemplos de las imágenes
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState(''); // Añadimos password para un registro completo
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Por favor, completa los campos obligatorios (Nombre, Email, Contraseña).');
      return;
    }

    setIsLoading(true);
    // Simulación de llamada a la API de registro
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);

    // Simulación de registro exitoso
    Alert.alert(
      'Registro Exitoso', 
      'Tu cuenta ha sido creada. Por favor, inicia sesión ahora.', 
      [
        { text: 'Login Now', onPress: () => navigation.navigate('Login') }
      ]
    );
    
    // Opcional: Podrías navegar a una pantalla de "Registro Exitoso" (como en la imagen de ejemplo)
    // navigation.navigate('RegistrationSuccess'); 
  };

  const containerStyle = { flex: 1, backgroundColor: colors.background, padding: 20 };
  const inputContainerStyle = { borderColor: colors.text, ...styles.inputContainer };
  const inputStyle = { color: colors.text, ...styles.input };
  const buttonStyle = { backgroundColor: isLoading ? '#6b7280' : '#4ade80', ...styles.button };
  const buttonTextStyle = { color: colors.text, ...styles.buttonText };
  const linkTextStyle = { color: colors.primary, ...styles.linkText };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: colors.background }}>
      <View style={[styles.header, { backgroundColor: '#3b82f6' }]}>
        <Text style={styles.headerText}>REGISTER</Text>
      </View>
      
      <View style={containerStyle}>
        
        {/* Formulario de Registro (basado en la imagen de ejemplo) */}
        <View style={inputContainerStyle}>
          <TextInput
            style={inputStyle}
            placeholder="Enter Name"
            placeholderTextColor="#9ca3af"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={inputContainerStyle}>
          <TextInput
            style={inputStyle}
            placeholder="Enter Email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        
        <View style={inputContainerStyle}>
          <TextInput
            style={inputStyle}
            placeholder="Enter Age"
            placeholderTextColor="#9ca3af"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>
        
        <View style={inputContainerStyle}>
          <TextInput
            style={inputStyle}
            placeholder="Enter Address"
            placeholderTextColor="#9ca3af"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        
        <View style={inputContainerStyle}>
          <TextInput
            style={inputStyle}
            placeholder="Enter Password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          style={buttonStyle}
          onPress={handleRegister}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'REGISTRANDO...' : 'REGISTER'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
          <Text style={linkTextStyle}>
            Ya tengo cuenta? Iniciar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 50,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  linkText: {
    textAlign: 'center',
    fontSize: 16,
  }
});

export default RegisterScreen;