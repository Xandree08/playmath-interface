import { useContext, useState, useRef } from 'react';
import { GameContext } from '../context/GameContext';
import { generateLinearEquation } from '../utils/equationGenerator';
import { solveLinearEquation } from '../utils/equationSolver';

export const useGameLogic = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameLogic deve ser usado dentro de um GameProvider');
  }

  const { setPlayerPosition } = context;
  const [showInput, setShowInput] = useState(false);
  const [currentEquation, setCurrentEquation] = useState('');
  const directionRef = useRef(null); 

  const movePlayer = (direction) => {
    console.log("MovePlayer chamado", direction);  // Debug
    directionRef.current = direction; 
    const equation = generateLinearEquation();
    console.log("Equação gerada:", equation);  // Debug
    setCurrentEquation(equation);
    setShowInput(true);
  };

  const handleAnswerSubmit = (answer) => {
    console.log("Resposta recebida:", answer);  // Debug
    const correctAnswer = solveLinearEquation(currentEquation);
    const direction = directionRef.current;
    const parsedAnswer = parseInt(answer, 10);

    if (parsedAnswer === correctAnswer) {
      console.log("Resposta correta! Movendo para:", direction);
      setPlayerPosition(prev => ({
        x: prev.x + (direction === 'right' ? 1 : direction === 'left' ? -1 : 0),
        y: prev.y + (direction === 'down' ? 1 : direction === 'up' ? -1 : 0)
      }));
    } else {
      console.log("Resposta errada! Movimento aleatório");

      // Escolher uma direção aleatória
      const directions = ['up', 'down', 'left', 'right'];
      let randomDirection = directions[Math.floor(Math.random() * directions.length)];

      console.log("Direção aleatória escolhida:", randomDirection);

      setPlayerPosition(prev => ({
        x: prev.x + (randomDirection === 'right' ? 1 : randomDirection === 'left' ? -1 : 0),
        y: prev.y + (randomDirection === 'down' ? 1 : randomDirection === 'up' ? -1 : 0)
      }));
    }

    setShowInput(false); // Fecha o modal
  };

  return { 
    movePlayer,
    showInput,
    currentEquation,
    handleAnswerSubmit,
    setShowInput
  };
};
