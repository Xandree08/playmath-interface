import "./App.css"
import Map from "./equation/components/Map";
import Controls from "./equation/components/Controls";
import { useGameLogic } from "./equation/hooks/useGameLogic";
import EquationInput from "./equation/components/EquationInput";
import EquationFirst from "./equation/EquationFirst";
import { GiOpenTreasureChest } from "react-icons/gi";
import { RxLapTimer } from "react-icons/rx";
import Home from "./landingPage/Home";

const App = () => {
  const {
    movePlayer,
    showInput,
    currentEquation,
    handleAnswerSubmit,
    setShowInput
  } = useGameLogic();

  return (
    <div className="App" style={{ position: "relative" }}>

      <Home/>
      
    </div>
  );
};

export default App
