// App.js
import React from 'react';
// Importación crucial para el Drawer Navigator
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <AuthProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default App;