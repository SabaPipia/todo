import React from "react";
import "./style.scss";
import { Check, Remove } from "../../icons";

const TodoList = () => {
  return (
    <div>
      <div className="todoItem">
        <div className="leftPart">
          <Check />
          <h3>first</h3>
        </div>
        <div className="rightPart">
          <Remove />
        </div>
      </div>
      <div className="todoItem">
        <div className="leftPart">
          <Check />
          <h3>Second</h3>
        </div>
        <div className="rightPart">
          <Remove />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
