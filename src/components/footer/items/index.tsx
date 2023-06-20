import React from "react";
import "./style.scss";
interface todoI {
  todoL: number;
}

const Items: React.FC<todoI> = ({ todoL }) => {
  return <div className="items">{todoL} items left</div>;
};

export default Items;
