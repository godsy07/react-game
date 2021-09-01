import React from "react";

import "./control-container.styles.css";

const ControlContainer = ({ handleClick, gameStatus, score }) => {
  return (
    <div className='control-container'>
      <div className='score-board'>
        <div className='score-text'>
          <div>Score</div>
          <div>:</div>
          <div>{score}</div>
        </div>
        {score && <div className='message-area'>test message</div>}
      </div>
      <div className='up' onClick={(e) => handleClick("up")}>
        &#129153;
      </div>
      <div className='side-controls'>
        <div className='left' onClick={(e) => handleClick("left")}>
          &#129152;
        </div>
        <div className='right' onClick={(e) => handleClick("right")}>
          &#129154;
        </div>
      </div>
      <div className='down' onClick={(e) => handleClick("down")}>
        &#129155;
      </div>
      <div className='buttons-group'>
        <button
          className={`${
            gameStatus ? "stop-button" : "start-button"
          } custom-button`}
          onClick={(e) => handleClick("start")}
        >
          {gameStatus ? "PAUSE" : "START"}
        </button>
        <button
          className='custom-button reset-button'
          onClick={(e) => handleClick("reset")}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default ControlContainer;
