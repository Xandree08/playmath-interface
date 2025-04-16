import "./EquationFirst.css"
import Map from "./components/Map";
import Controls from "./components/Controls";
import { useGameLogic } from "./hooks/useGameLogic";
import EquationInput from "./components/EquationInput";

const EquationFirst = () => {
  const {
    movePlayer,
    showInput,
    currentEquation,
    handleAnswerSubmit,
    setShowInput
  } = useGameLogic();

  return (
      <div className="equationFirst">
        <h1>Caça ao Tesouro Matemático</h1>
        <p>Uma equação do primeiro grau é uma igualdade matemática que envolve uma incógnita elevada à potência 1. Sua forma geral é:</p>
        <p>𝑎
𝑥
+
𝑏
=
0
ax+b=0</p>
        <div className="equationFirst-container">
        <Map size={10} />
        <Controls movePlayer={movePlayer} />
        <EquationInput
          showInput={showInput}
          equation={currentEquation}
          onSubmit={handleAnswerSubmit}
          onClose={() => setShowInput(false)}
        />
        </div>
      </div>
  );
};

export default EquationFirst