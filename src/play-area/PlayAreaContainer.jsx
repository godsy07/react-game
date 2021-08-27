import React, { forwardRef } from "react";

import "./play-area-container.styles.css";

const PlayAreaContainer = (
  { playAreaWidth, blockWidth, leftPosition, topPosition },
  ref
) => {
  return (
    <div
      className='play-area'
      style={{
        position: "relative",
        height: `${playAreaWidth}px`,
        width: `${playAreaWidth}px`,
      }}
    >
      <div
        ref={ref}
        // style={{ position: "absolute", top: "10px", right: "10px" }}
        style={{
          position: "absolute",
          left: `${leftPosition}px`,
          top: `${topPosition}px`,
          height: `${blockWidth}px`,
          width: `${blockWidth}px`,
          transition: "all 0.2s ease-in",
        }}
        className='play-area-block'
      ></div>
    </div>
  );
};

export default forwardRef(PlayAreaContainer);
