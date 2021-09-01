import React from "react";
import "./play-area-blocks.styles.css";

const PlayAreaBlocks = ({ snakeDots }, ref) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div key={i} style={style} className='play-area-block'></div>;
      })}
    </div>
  );
};

export default PlayAreaBlocks;
