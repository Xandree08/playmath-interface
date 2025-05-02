import "./App.css"
import Map from "./equation/components/Map";
import Controls from "./equation/components/Controls";
import { useGameLogic } from "./equation/hooks/useGameLogic";
import EquationInput from "./equation/components/EquationInput";
import EquationFirst from "./equation/EquationFirst";
import { GiOpenTreasureChest } from "react-icons/gi";
import { RxLapTimer } from "react-icons/rx";
import Home from "./landingPage/Home";
import { BrowserRouter, Router , Route ,Routes} from "react-router-dom";
import Matriz from "./matrizQuiz/matriz";

const App = () => {


  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<EquationFirst/>}/>
          <Route path="/game2" element={<Matriz/>}/>
      </Routes>
  );
};

export default App
