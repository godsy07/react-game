import React from "react";

import "./control-container.styles.css";

const ControlContainer = ({
  handleClick,
  gameStatus,
  score,
  collapseStatus,
}) => {
  return (
    <div className='control-container'>
      <div className='score-board'>
        <div className='score-text'>
          <div>Score</div>
          <div>:</div>
          <div>{score}</div>
        </div>
        {collapseStatus ? (
          <div className='message-area'>
            Game Over...!!!
            <br />
            You scored <b>{score}</b> points.
          </div>
        ) : !gameStatus ? (
          <div className='message-area'>
            Press <span className='highlight-text'>SPACE BAR</span>{" "}
            <i>
              <strong>or</strong>
            </i>
            <br /> Click at <span className='highlight-text'>START</span> to
            start the game.
          </div>
        ) : (
          <div className='mesage-area'>
            <p>
              Press <span className='highlight-text'>SPACE BAR</span> to{" "}
              <em>
                <strong>PAUSE</strong>
              </em>
            </p>
          </div>
        )}
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
            !collapseStatus && (gameStatus ? "stop-button" : "start-button")
          } custom-button`}
          onClick={(e) => {
            if (!collapseStatus) {
              handleClick("start");
            }
          }}
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
      <div className='to-github-page'>
        <p>To check the source code click on the link below:</p>
        <div className='github-link'>
          <div className='click-here left-pointer'>&#9758;</div>
          <a
            href='https://github.com/godsy07/react-game'
            target='_blank'
            rel='noreferrer'
          >
            Click Here
          </a>
          <div className='click-here right-pointer'>&#9756;</div>
        </div>
      </div>
    </div>
  );
};

export default ControlContainer;
