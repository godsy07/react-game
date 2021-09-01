import React, { useState, useEffect } from "react";
import "./App.css";
import ControlContainer from "./control-container/ControlContainer";
import PlayAreaContainer from "./play-area/PlayAreaContainer";

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);
  const [snakeDirection, setSnakeDirection] = useState("right");
  const [snakeSpeed, setSnakeSpeed] = useState(200);
  const [score, setScore] = useState(10);
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
  ]); // position of snake in absolute in percentage (%)
  const playAreaWidth = 512; // for setting up height and width of PlayAreaContainer dynamically
  // const blockWidth = 8; // for initial width of block (must be a factor of playAreaWidth value)
  // const [blockPosition, setBlockPosition] = useState([80, 160]); // position of block in absolute

  const handleClick = (direction) => {
    if (direction === "start") {
      setGameStatus(!gameStatus);
    }
    if (direction === "reset") {
      setGameStatus(false);
      setSnakeDots([
        [0, 0],
        [2, 0],
      ]);
    }
    if (gameStatus === true) {
      if (direction === "up") {
        if (snakeDirection === "down") return;
        setSnakeDirection("up");
      }
      if (direction === "down") {
        if (snakeDirection === "up") return;
        setSnakeDirection("down");
      }
      if (direction === "left") {
        if (snakeDirection === "right") return;
        setSnakeDirection("left");
      }
      if (direction === "right") {
        if (snakeDirection === "left") return;
        setSnakeDirection("right");
      }
    }
  };

  const keyPressEvent = (e) => {
    e = e || window.event;
    if (e.keyCode === 37) {
      if (snakeDirection === "right") return;
      setSnakeDirection("left");
    }
    if (e.keyCode === 38) {
      if (snakeDirection === "down") return;
      setSnakeDirection("up");
    }
    if (e.keyCode === 39) {
      if (snakeDirection === "left") return;
      setSnakeDirection("right");
    }
    if (e.keyCode === 40) {
      if (snakeDirection === "up") return;
      setSnakeDirection("down");
    }
  };

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];
    switch (snakeDirection) {
      case "left":
        if (checkOutOfBoundary(head[0] - 2, head[1])) return;
        head = [head[0] - 2, head[1]];
        break;
      case "right":
        if (checkOutOfBoundary(head[0] + 2, head[1])) return;
        head = [head[0] + 2, head[1]];
        break;
      case "up":
        if (checkOutOfBoundary(head[0], head[1] - 2)) return;
        head = [head[0], head[1] - 2];
        break;
      case "down":
        if (checkOutOfBoundary(head[0], head[1] + 2)) return;
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

  const checkOutOfBoundary = (a, b) => {
    if (a >= 100 || b >= 100 || a < 0 || b < 0) {
      setGameStatus(false);
      return true;
    }
  };

  useEffect(() => {
    if (gameStatus === true) {
      document.onkeydown = keyPressEvent;
      const run = setInterval(() => {
        moveSnake();
      }, snakeSpeed);
      return () => clearInterval(run);
    }
  });

  return (
    <div className='App'>
      <PlayAreaContainer playAreaWidth={playAreaWidth} snakeDots={snakeDots} />
      <ControlContainer
        gameStatus={gameStatus}
        score={score}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
