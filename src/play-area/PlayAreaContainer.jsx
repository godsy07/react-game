import React from "react";
import FoodBlock from "../food-block/FoodBlock";
import PlayAreaBlocks from "../play-area-blocks/PlayAreaBlocks";

import "./play-area-container.styles.css";

const PlayAreaContainer = ({ playAreaWidth, snakeDots, food }) => {
  return (
    <div
      className='play-area'
      style={{
        position: "relative",
        height: `${playAreaWidth}px`,
        width: `${playAreaWidth}px`,
      }}
    >
      <PlayAreaBlocks snakeDots={snakeDots} />
      {food !== null && <FoodBlock food={food} />}
    </div>
  );
};

export default PlayAreaContainer;
