// app/Main/LogoutScreen.jsx
import React, { useEffect } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native'; // Para saber cuándo se enfoca

const LogoutScreen = () => {
  const { logout } = useAuth();
  const { colors } = useTheme();
  const navigation = useNavigation();
  
  // Requisito (g) componente necesario para validar si el usuario realmente desea salir
  const showLogoutAlert = () => {
    Alert.alert(
      'Cerrar Sesión', // Título
      '¿Estás seguro de que deseas cerrar la sesión?', // Mensaje (como en la imagen de ejemplo)
      [
        {
          text: 'Cancelar', // Botón Cancelar
          onPress: () => navigation.goBack(), // Vuelve a la pantalla anterior (Home)
          style: 'cancel',
        },
        {
          text: 'Confirmar', // Botón Confirmar
          onPress: logout, // Llama a la función de logout
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };
  
  useEffect(() => {
    // Al enfocar esta pantalla, mostramos el Alert
    const unsubscribe = navigation.addListener('focus', () => {
      showLogoutAlert();
    });
    
    // Al salir de la pantalla, volvemos a Home (si no se cerró sesión)
    const blurUnsubscribe = navigation.addListener('blur', () => {
      // Si el usuario canceló, vuelve a Home. Si se deslogueó, RootNavigator se encargará de redirigir.
      if (navigation.isFocused()) {
          navigation.navigate('Home Screen');
      }
    });

    return () => {
        unsubscribe();
        blurUnsubscribe();
    };
  }, [navigation, logout]);

  // Mientras se muestra el diálogo, mostramos un indicador simple.
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default LogoutScreen;