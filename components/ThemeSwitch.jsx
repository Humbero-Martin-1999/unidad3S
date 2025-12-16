// components/ThemeSwitch.jsx
import React from 'react';
import { Switch, Platform } from 'react-native';
import useTheme from '../hooks/useTheme';

const ThemeSwitch = () => {
  const { isDarkTheme, toggleTheme, colors } = useTheme();

  return (
    <Switch
      trackColor={{ false: '#767577', true: colors.primary }}
      thumbColor={isDarkTheme ? colors.text : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleTheme}
      value={isDarkTheme}
    />
  );
};

export default ThemeSwitch;