import React, { useRef, useState } from "react";
import "./App.css";
import ControlContainer from "./control-container/ControlContainer";
import PlayAreaContainer from "./play-area/PlayAreaContainer";

const App = () => {
  const refBlock = useRef(null);
  const playAreaWidth = 512; // for setting up height and width of PlayAreaContainer dynamically
  const blockWidth = 32; // for initial width of block (must be a factor of playAreaWidth value)
  const [leftPosition, setLeftPosition] = useState(0); // left position in absolute
  const [topPosition, setTopPosition] = useState(0); // top position in absolute
  const handleClick = (direction, e) => {
    switch (direction) {
      case "up":
        // console.log("Up direction");
        if (topPosition !== 0) {
          setTopPosition(topPosition - blockWidth);
        }
        break;
      case "left":
        // console.log("Left direction");
        if (leftPosition !== 0) {
          setLeftPosition(leftPosition - blockWidth);
        }
        break;
      case "right":
        // console.log("Right direction");
        if (leftPosition !== playAreaWidth - blockWidth && leftPosition < 512) {
          setLeftPosition(leftPosition + blockWidth);
        }
        break;
      case "down":
        // console.log("Down direction");
        if (topPosition !== playAreaWidth - blockWidth && topPosition < 512) {
          setTopPosition(topPosition + blockWidth);
        }
        break;

      default:
        console.log("Invalid");
        break;
    }
  };
  return (
    <div className='App'>
      <PlayAreaContainer
        playAreaWidth={playAreaWidth}
        blockWidth={blockWidth}
        leftPosition={leftPosition}
        topPosition={topPosition}
        ref={refBlock}
      />
      <ControlContainer handleClick={handleClick} />
    </div>
  );
};

export default App;
