// components/AvatarProfile.jsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';

const AvatarProfile = ({ name, imageUrl }) => {
  const { colors } = useTheme();
  
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { borderColor: colors.primary }]}
        source={{ uri: imageUrl }}
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