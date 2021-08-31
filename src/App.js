import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import ControlContainer from "./control-container/ControlContainer";
import PlayAreaContainer from "./play-area/PlayAreaContainer";

const App = () => {
  const refBlock = useRef(null);
  const [gameStatus, setGameStatus] = useState(false);
  const [snakeDirection, setSnakeDirection] = useState("right");
  const playAreaWidth = 512; // for setting up height and width of PlayAreaContainer dynamically
  const blockWidth = 16; // for initial width of block (must be a factor of playAreaWidth value)
  const blockHeight = 16; // for initial height of block (must be a factor of playAreaWidth value)
  const [blockPosition, setBlockPosition] = useState([80, 160]); // position of block in absolute

  const handleClick = (direction, e) => {
    switch (direction) {
      case "start":
        // console.log("Start the game");
        console.log("Start the game");
        setGameStatus(!gameStatus);
        break;
      case "up":
        // console.log("Up direction");
        if (blockPosition[1] !== 0 && gameStatus === true) {
          // setBlockPosition((arr) => [arr[0], arr[1] - blockWidth]);
          setSnakeDirection("up");
        }
        break;
      case "left":
        // console.log("Left direction");
        if (blockPosition[0] !== 0 && gameStatus === true) {
          // setBlockPosition((arr) => [arr[0] - blockWidth, arr[1]]);
          setSnakeDirection("left");
        }
        break;
      case "right":
        // console.log("Right direction");
        if (
          blockPosition[0] !== playAreaWidth - blockWidth &&
          blockPosition[0] < 512 &&
          gameStatus === true
        ) {
          // setBlockPosition((arr) => [arr[0] + blockWidth, arr[1]]);
          setSnakeDirection("right");
        }
        break;
      case "down":
        // console.log("Down direction");
        if (
          blockPosition[1] !== playAreaWidth - blockWidth &&
          blockPosition[1] < 512 &&
          gameStatus === true
        ) {
          // setBlockPosition((arr) => [arr[0], arr[1] + blockWidth]);
          setSnakeDirection("down");
        }
        break;

      default:
        console.log("Invalid");
        break;
    }
  };

  useEffect(() => {
    if (gameStatus) {
      if (snakeDirection === "up") {
        console.log("go up");
        // setBlockPosition((arr) => [arr[0], arr[1] - 10]);
      }
      // if (snakeDirection === "down") {
      // }
      // if (snakeDirection === "left") {
      // }
      // if (snakeDirection === "right") {
      // }
    }
  }, [gameStatus, snakeDirection]);

  return (
    <div className='App'>
      <PlayAreaContainer
        playAreaWidth={playAreaWidth}
        blockWidth={blockWidth}
        blockHeight={blockHeight}
        blockPosition={blockPosition}
        snakeDirection={snakeDirection}
        ref={refBlock}
      />
      <ControlContainer gameStatus={gameStatus} handleClick={handleClick} />
    </div>
  );
};

export default App;
