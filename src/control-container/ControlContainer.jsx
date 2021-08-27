import React from "react";

import "./control-container.styles.css";

const ControlContainer = ({ handleClick }) => {
  return (
    <div className='control-container'>
      <div className='up' onClick={(e) => handleClick("up", e)}>
        up
      </div>
      <div className='side-controls'>
        <div className='left' onClick={(e) => handleClick("left", e)}>
          left
        </div>
        <div className='right' onClick={(e) => handleClick("right", e)}>
          right
        </div>
      </div>
      <div className='down' onClick={(e) => handleClick("down", e)}>
        down
      </div>
    </div>
  );
};

export default ControlContainer;
