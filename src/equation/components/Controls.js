import "./Controls.css"
import { FaArrowRight, FaArrowDown, FaArrowLeft, FaArrowUp, FaCircle } from "react-icons/fa";

const Controls = ({ movePlayer }) => {
  return (
    <div className="controls">
      <FaArrowUp className='up' color={"white"} onClick={() => movePlayer('up')} />
      <FaArrowDown className='down' color={"white"} onClick={() => movePlayer('down')} />
      <FaArrowLeft className='left' color={"white"} onClick={() => movePlayer('left')} />
      <FaArrowRight className='right' color={"white"} onClick={() => movePlayer('right')} />
      <FaCircle className='circle' color={"white"} />
    </div>
  );
};

export default Controls;
