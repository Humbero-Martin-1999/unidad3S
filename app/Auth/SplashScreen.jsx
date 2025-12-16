// app/Auth/SplashScreen.jsx
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const SplashScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: '#3b82f6' }]}> {/* Azul como en el ejemplo */}
      {/* Aquí puedes usar un componente Image o Logo con el texto "ABOUTREACT" */}
      <Text style={styles.logoText}>ABOUTREACT</Text>
      <ActivityIndicator size="large" color="#ffffff" style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 50,
    // Asegúrate de usar un logo o ícono de lanzamiento (Requisito a)
  },
  indicator: {
      marginTop: 20
  }
});

export default SplashScreen;