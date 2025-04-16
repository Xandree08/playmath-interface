import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const treasurePosition = { x: 5, y: 5 };

  return (
    <GameContext.Provider value={{ playerPosition, setPlayerPosition, treasurePosition }}>
      {children}
    </GameContext.Provider>
  );
};
