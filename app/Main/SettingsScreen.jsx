// app/Main/SettingsScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import ThemeSwitch from '../../components/ThemeSwitch'; // Requisito (f)

const SettingsScreen = () => {
  const { colors } = useTheme();
  const containerStyle = { flex: 1, padding: 20, backgroundColor: colors.background };
  const textStyle = { color: colors.text, fontSize: 18 };

  return (
    <View style={containerStyle}>
      <Text style={[textStyle, { marginBottom: 30, fontWeight: 'bold' }]}>
        Opciones de Configuración
      </Text>
      
      {/* Requisito (f) Switch para tema oscuro/normal */}
      <View style={styles.optionRow}>
        <Text style={textStyle}>Modo Oscuro</Text>
        <ThemeSwitch />
      </View>
      
      {/* ... Otras configuraciones ... */}
    </View>
  );
};

const styles = StyleSheet.create({
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc', // Se podría ajustar con ThemeContext
    }
});

export default SettingsScreen;