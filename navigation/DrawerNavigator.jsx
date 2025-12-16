// navigation/DrawerNavigator.jsx

import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, View, Text, StyleSheet } from 'react-native'; 

// Importaciones
import HomeScreen from '../app/Main/HomeScreen';
import SettingsScreen from '../app/Main/SettingsScreen';
import LogoutScreen from '../app/Main/LogoutScreen';
import useTheme from '../hooks/useTheme';

const Drawer = createDrawerNavigator();

// --- Datos de Perfil de Prueba ---
const USER_PHOTO_URL = 'https://i.pravatar.cc/150?img=68'; 
const userName = "Usuario de Prueba"; 
// ---------------------------------

const CustomDrawerContent = (props) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        drawerHeader: {
            padding: 20,
            paddingTop: 50, 
            alignItems: 'center',
            backgroundColor: colors.card, 
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            marginBottom: 10,
        },
        profileImage: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 10,
            borderWidth: 2,
            borderColor: colors.primary, 
        },
        userNameText: {
            color: colors.text,
            fontSize: 18,
            fontWeight: 'bold',
        },
        drawerListContainer: {
            backgroundColor: colors.background,
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.drawerHeader}>
                <Image
                    source={{ uri: USER_PHOTO_URL }}
                    style={styles.profileImage}
                />
                <Text style={styles.userNameText}>{userName}</Text> 
            </View>

            <DrawerContentScrollView 
                {...props} 
                contentContainerStyle={styles.drawerListContainer}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
};


const DrawerNavigator = () => {
  const { colors, isDarkTheme } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Home Screen"
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
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
        drawerActiveBackgroundColor: isDarkTheme ? '#3f3f46' : '#e0f2f1', 
      }}
    >
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="Setting Screen" component={SettingsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;