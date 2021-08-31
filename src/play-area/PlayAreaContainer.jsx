import React from "react";
import PlayAreaBlocks from "../play-area-blocks/PlayAreaBlocks";

import "./play-area-container.styles.css";

const PlayAreaContainer = ({ playAreaWidth, ...otherProps }) => {
  return (
    <div
      className='play-area'
      style={{
        position: "relative",
        height: `${playAreaWidth}px`,
        width: `${playAreaWidth}px`,
      }}
    >
      <PlayAreaBlocks {...otherProps} />
    </div>
  );
};

export default PlayAreaContainer;
