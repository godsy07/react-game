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
  const [snakeSpeed, setSnakeSpeed] = useState(300);
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
      setScore(0);
      setSnakeDots(initialPosition);
      setLastLocation(null);
    }
    if (gameStatus === true) {
      checkDirection(direction);
    }
  };

  const keyPressEvent = (e) => {
    e = e || window.event;
    let direction = "";
    if (e.keyCode === 37) {
      direction = "left";
    }
    if (e.keyCode === 38) {
      direction = "up";
    }
    if (e.keyCode === 39) {
      direction = "right";
    }
    if (e.keyCode === 40) {
      direction = "down";
    }
    if (direction !== "") {
      checkDirection(direction);
    }
  };

  const checkDirection = (direction) => {
    if (
      (direction === "up" && snakeDirection === "down") ||
      (direction === "down" && snakeDirection === "up") ||
      (direction === "left" && snakeDirection === "right") ||
      (direction === "right" && snakeDirection === "left")
    ) {
      return false;
    }
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
  };

  const checkOutOfBoundary = (a, b) => {
    if (a >= 100 || b >= 100 || a < 0 || b < 0) {
      setCollapseStatus(true);
      setGameStatus(false);
      return true;
    }
  };

  const checkCollapsed = () => {
    // console.log("bitten itself");
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];
    dots.pop();

    for (let i = 0; i < dots.length; i++) {
      if (head[0] === dots[i][0] && head[1] === dots[i][1]) {
        setCollapseStatus(true);
        setGameStatus(false);
        // return true;
      }
    }
    // return false;
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
    if (snakeSpeed > 3) {
      setSnakeSpeed(snakeSpeed - 3);
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
    window.addEventListener("keypress", (e) => {
      if (e.code === "Space") {
        setGameStatus(!gameStatus);
      }
    });
    if (gameStatus === true) {
      document.onkeydown = keyPressEvent;
      checkCollapsed();
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
