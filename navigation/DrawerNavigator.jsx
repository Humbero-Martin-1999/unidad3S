// navigation/DrawerNavigator.jsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../app/Main/HomeScreen';
import SettingsScreen from '../app/Main/SettingsScreen';
import LogoutScreen from '../app/Main/LogoutScreen';
import useTheme from '../hooks/useTheme';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { colors, isDarkTheme } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Home Screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.text,
        sceneContainerStyle: {
          backgroundColor: colors.background,
        },
        drawerStyle: {
          backgroundColor: colors.background,
        },
        drawerInactiveTintColor: colors.text,
        drawerActiveTintColor: colors.primary,
        drawerActiveBackgroundColor: isDarkTheme ? '#3f3f46' : '#e0f2f1', // Color de fondo activo
      }}
    >
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="Setting Screen" component={SettingsScreen} />
      {/* LogoutScreen se usa para activar un modal y luego cerrar sesión */}
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;