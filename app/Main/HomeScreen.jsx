// app/Main/HomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import AvatarProfile from '../../components/AvatarProfile'; // Requisito (e)

const HomeScreen = () => {
  const { colors } = useTheme();
  const containerStyle = { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background };
  const textStyle = { color: colors.text, fontSize: 20, marginBottom: 20 };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>¡Bienvenido a la Home Screen!</Text>
      
      {/* Requisito (e) Imagen de Avatar del usuario */}
      <AvatarProfile name="Usuario Demo" imageUrl="https://via.placeholder.com/100" />
      
      <Text style={[textStyle, { marginTop: 20 }]}>Navega usando el menú lateral.</Text>
    </View>
  );
};

export default HomeScreen;