// navigation/RootNavigator.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ActivityIndicator } from 'react-native';
import useAuth from '../hooks/useAuth';
import useTheme from '../hooks/useTheme';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import SplashScreen from '../app/Auth/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const { colors } = useTheme();

  // Muestra el Splash Screen o un indicador de carga mientras se verifica la autenticación
  if (isLoading) {
    // Nota: El SplashScreen real debería ser un componente bonito. Aquí solo mostramos el indicador.
    // Requisito (b) - Se debe mostrar la pantalla inicial splash
    return <SplashScreen />; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          // Usuario Logueado: Accede a las pantallas principales (Drawer)
          <Stack.Screen name="AppFlow" component={DrawerNavigator} />
        ) : (
          // Usuario No Logueado: Accede al flujo de Autenticación
          <Stack.Screen name="AuthFlow" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;