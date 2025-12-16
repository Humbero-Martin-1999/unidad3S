// App.js
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import RootNavigator from './navigation/RootNavigator';

// Si usas gluestack-ui, aquí importarías el componente GluestackUIProvider
// import { GluestackUIProvider } from '@gluestack-ui/themed';
// import { config } from './gluestack-config'; // Asegúrate de tener tu archivo de configuración

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        {/*
        <GluestackUIProvider config={config}>
          <RootNavigator />
        </GluestackUIProvider>
        */}
        <RootNavigator />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;