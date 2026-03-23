import React from 'react';
import { Image } from 'react-native';
import { GAME_ASSETS } from '../constants/games';

const GameIcon = ({ gameId }) => {
    // Si el id que recibimos (gameId) existe en nuestro diccionario, lo usamos.
    // Si no existe, usamos el de csgo por defecto para que no explote.
    const imageSource = GAME_ASSETS[gameId] || GAME_ASSETS['csgo'];

    return (
        <Image 
            source={imageSource} 
            style={{ width: 50, height: 50, borderRadius: 8 }} 
            resizeMode="contain" 
        />
    );
};

export default GameIcon;
