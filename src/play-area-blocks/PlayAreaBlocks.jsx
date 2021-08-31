import React from "react";
import "./play-area-blocks.styles.css";

const PlayAreaBlocks = ({ blockPosition, blockWidth, snakeDots }, ref) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        // console.log(dot);
        return <div key={i} style={style} className='play-area-block'></div>;
      })}
      {/* <div
        style={{
          left: "2%",
          top: 0,
          // left: `${blockPosition[0]}px`,
          // top: `${blockPosition[1]}px`,
          // height: `${blockWidth}px`,
          // width: `${blockWidth}px`,
        }}
        className='play-area-block'
      ></div> */}
    </div>
  );
};

export default PlayAreaBlocks;
