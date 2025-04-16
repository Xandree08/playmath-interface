export const generateLinearEquation = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return `${a}x + ${b} = ${a * 2 + b}`; // Exemplo: 3x + 4 = 10
  };
  
  export const generateQuadraticEquation = () => {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const c = Math.floor(Math.random() * 10) - 5;
    return `${a}x² + ${b}x + ${c} = 0`;
  };