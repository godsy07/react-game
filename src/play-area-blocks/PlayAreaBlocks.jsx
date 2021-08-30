import React, { forwardRef } from "react";
import "./play-area-blocks.styles.css";

const PlayAreaBlocks = (
  { leftPosition, topPosition, blockHeight, blockWidth },
  ref
) => {
  return (
    <div
      ref={ref}
      // style={{ position: "absolute", top: "10px", right: "10px" }}
      style={{
        position: "absolute",
        left: `${leftPosition}px`,
        top: `${topPosition}px`,
        height: `${blockHeight}px`,
        width: `${blockWidth}px`,
        transition: "all 0.2s ease-in",
      }}
      className='play-area-block'
    ></div>
  );
};

export default forwardRef(PlayAreaBlocks);
