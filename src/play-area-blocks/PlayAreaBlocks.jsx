import React, { forwardRef } from "react";
import "./play-area-blocks.styles.css";

const PlayAreaBlocks = (ref) => {
  return <div ref={ref} className='play-area-block'></div>;
};

export default forwardRef(PlayAreaBlocks);
