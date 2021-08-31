import React, { useState, useEffect } from "react";
import "./App.css";
import ControlContainer from "./control-container/ControlContainer";
import PlayAreaContainer from "./play-area/PlayAreaContainer";

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);
  const [snakeDirection, setSnakeDirection] = useState("right");
  const [snakeSpeed, setSnakeSpeed] = useState(200);
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]);
  const playAreaWidth = 512; // for setting up height and width of PlayAreaContainer dynamically
  const blockWidth = 8; // for initial width of block (must be a factor of playAreaWidth value)
  // const [blockPosition, setBlockPosition] = useState([80, 160]); // position of block in absolute

  const handleClick = (direction) => {
    if (direction === "start") {
      setGameStatus(!gameStatus);
    }
    if (gameStatus === true) {
      if (direction === "up") {
        setSnakeDirection("up");
      }
      if (direction === "down") {
        setSnakeDirection("down");
      }
      if (direction === "left") {
        setSnakeDirection("left");
      }
      if (direction === "right") {
        setSnakeDirection("right");
      }
    }
  };

  const keyPressEvent = (e) => {
    e = e || window.event;
    if (e.keyCode === 37) {
      setSnakeDirection("left");
    }
    if (e.keyCode === 38) {
      setSnakeDirection("up");
    }
    if (e.keyCode === 39) {
      setSnakeDirection("right");
    }
    if (e.keyCode === 40) {
      setSnakeDirection("down");
    }
  };

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (snakeDirection) {
      case "left":
        head = [head[0] - 2, head[1]];
        break;
      case "right":
        head = [head[0] + 2, head[1]];
        break;
      case "up":
        head = [head[0], head[1] - 2];
        break;
      case "down":
        head = [head[0], head[1] + 2];
        break;
      default:
        console.log("invalid response");
        break;
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots);
  };

  useEffect(() => {
    if (gameStatus === true) {
      document.onkeydown = keyPressEvent;
      setInterval(moveSnake, snakeSpeed);
    }
  }, [gameStatus]);

  return (
    <div className='App'>
      <PlayAreaContainer
        playAreaWidth={playAreaWidth}
        blockWidth={blockWidth}
        // blockPosition={blockPosition}
        snakeDots={snakeDots}
      />
      <ControlContainer gameStatus={gameStatus} handleClick={handleClick} />
    </div>
  );
};

export default App;
