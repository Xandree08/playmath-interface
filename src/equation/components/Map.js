// /components/Map.jsx
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext'; // Importe o contexto!
import './Map.css';

const Map = ({ size }) => {
  const { playerPosition, treasurePosition } = useContext(GameContext);

  if (!playerPosition || !treasurePosition) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="map">
      {Array(size).fill(0).map((_, y) => (
        <div key={y} className="row">
          {Array(size).fill(0).map((_, x) => (
            <div 
              key={x} 
              className={`cell 
                ${x === playerPosition.x && y === playerPosition.y ? 'player' : ''} 
                ${x === treasurePosition.x && y === treasurePosition.y ? 'treasure' : ''}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;