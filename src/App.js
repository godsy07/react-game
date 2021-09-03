import React, { useState, useEffect } from "react";
import "./App.css";
import ControlContainer from "./control-container/ControlContainer";
import PlayAreaContainer from "./play-area/PlayAreaContainer";

const initialPosition = [
  [10, 10],
  [12, 10],
];

const getRandomCoordinates = () => {
  const x = Math.floor(Math.random() * (100 / 2)) * 2;
  const y = Math.floor(Math.random() * (100 / 2)) * 2;
  return { top: y, left: x };
};

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);
  const [collapseStatus, setCollapseStatus] = useState(false);
  const [snakeDirection, setSnakeDirection] = useState("right");
  const [snakeSpeed, setSnakeSpeed] = useState(200);
  const [score, setScore] = useState(0);
  const [food, setFood] = useState(getRandomCoordinates);
  const [lastLocation, setLastLocation] = useState(null);
  const [snakeDots, setSnakeDots] = useState(initialPosition); // position of snake in absolute in percentage (%)
  const playAreaWidth = 512; // for setting up height and width of PlayAreaContainer dynamically
  // const blockWidth = 8; // for initial width of block (must be a factor of playAreaWidth value)
  // const [blockPosition, setBlockPosition] = useState([80, 160]); // position of block in absolute

  const handleClick = (direction) => {
    if (direction === "start") {
      setGameStatus(!gameStatus);
    }
    if (direction === "reset") {
      setFood(getRandomCoordinates);
      setGameStatus(false);
      setCollapseStatus(false);
      setSnakeDirection("right");
      setScore(10);
      setSnakeDots(initialPosition);
      setLastLocation(null);
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

  const checkOutOfBoundary = (a, b) => {
    if (a >= 100 || b >= 100 || a < 0 || b < 0) {
      setCollapseStatus(true);
      setGameStatus(false);
      return true;
    }
  };

  const checkEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    let tempFood = food; // tempFood is object while head is array
    if (head[0] === tempFood.left && head[1] === tempFood.top) {
      setFood(getRandomCoordinates);
      enlargeSnake();
      increaseSnakeSpeed();
      setScore(score + 4);
      setLastLocation(snakeDots[0]);
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const increaseSnakeSpeed = () => {
    if (snakeSpeed > 8) {
      setSnakeSpeed(snakeSpeed - 8);
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

    if (lastLocation !== null) {
      dots.unshift(lastLocation);
      setLastLocation(null);
    }
    checkEat();
    dots.push(head); // Adds new element at array end in snakeDots
    dots.shift(); // Removes first element in array snakeDots
    setSnakeDots(dots);
  };

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.code === "Space") {
        setGameStatus(true);
      }
    };
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
      <PlayAreaContainer
        playAreaWidth={playAreaWidth}
        snakeDots={snakeDots}
        food={food}
      />
      <ControlContainer
        gameStatus={gameStatus}
        score={score}
        collapseStatus={collapseStatus}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
