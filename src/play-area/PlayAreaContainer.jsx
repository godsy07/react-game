import React, { forwardRef } from "react";
import PlayAreaBlocks from "../play-area-blocks/PlayAreaBlocks";

import "./play-area-container.styles.css";

const PlayAreaContainer = ({ playAreaWidth, ...otherProps }, ref) => {
  return (
    <div
      className='play-area'
      style={{
        position: "relative",
        height: `${playAreaWidth}px`,
        width: `${playAreaWidth}px`,
      }}
    >
      <PlayAreaBlocks ref={ref} {...otherProps} />
    </div>
  );
};

export default forwardRef(PlayAreaContainer);
