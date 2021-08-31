import React from "react";

import "./control-container.styles.css";

const ControlContainer = ({ handleClick, gameStatus }) => {
  return (
    <div className='control-container'>
      <div className='up' onClick={(e) => handleClick("up", e)}>
        &#129153;
      </div>
      <div className='side-controls'>
        <div className='left' onClick={(e) => handleClick("left", e)}>
          &#129152;
        </div>
        <div className='right' onClick={(e) => handleClick("right", e)}>
          &#129154;
        </div>
      </div>
      <div className='down' onClick={(e) => handleClick("down", e)}>
        &#129155;
      </div>
      <button
        className={`${
          gameStatus ? "stop-button" : "start-button"
        } custom-button`}
        onClick={(e) => handleClick("start", e)}
      >
        {gameStatus ? "Stop Game" : "Start Game"}
      </button>
    </div>
  );
};

export default ControlContainer;
