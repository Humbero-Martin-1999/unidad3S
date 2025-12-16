// components/AvatarProfile.jsx (CORRECCIÓN DE RUTA FINAL)
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';

// 🚨 CORRECCIÓN FINAL: Incluir la subcarpeta 'images' 🚨
// Ruta corregida: Sube un nivel (..) -> entra a assets -> entra a images -> descarga.png
import DefaulAvatar from '../assets/images/descarga.png'; 
 
const AvatarProfile = ({ name }) => {
  const { colors } = useTheme();
  
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { borderColor: colors.primary }]}
        source={ DefaulAvatar }
      />
      <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AvatarProfile;