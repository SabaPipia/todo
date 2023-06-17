import React from "react";
import { Arrow } from "../../icons";
import "./style.scss";

const Input = () => {
  return (
    <div className="Input">
      <Arrow />
      <input placeholder="what needs to be done?" />
    </div>
  );
};

export default Input;
