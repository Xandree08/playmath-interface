export const solveLinearEquation = (equation) => {
    const [left, right] = equation.split('=');
    const x = (eval(right) - eval(left.split('x')[1])) / eval(left.split('x')[0]);
    return x;
  };
  
  export const solveQuadraticEquation = (equation) => {
    const [a, b, c] = equation.split('x²')[0].split('x').map(Number);
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return null;
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  };