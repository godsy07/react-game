import React from "react";

import "./food-block.styles.css";

const FoodBlock = ({ food }) => {
  return (
    <div
      className='food-block'
      style={{ top: `${food.top}%`, left: `${food.left}%` }}
    ></div>
  );
  // return <div className='food-block' style={{ top: "20%", left: "20%" }}></div>;
};

export default FoodBlock;
