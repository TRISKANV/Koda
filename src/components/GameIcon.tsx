import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { GAME_ICONS } from '../constants/gameAssets';

interface Props {
  gameId: string;
}

const GameIcon = ({ gameId }: Props) => {
  // Buscamos el icono por ID, si no existe usamos el default
  const source = GAME_ICONS[gameId] || GAME_ICONS.default;

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: '#232323',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  image: {
    width: 35,
    height: 35,
  },
});

export default GameIcon;
