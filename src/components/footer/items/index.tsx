import React from "react";
import "./style.scss";
interface Todo {
  text: string | undefined;
  id: number | undefined;
  selected: boolean | undefined;
}
interface todoI {
  todo: Todo[];
  todoL: number;
  selectedPage: number;
}

const Items: React.FC<todoI> = ({ todoL, selectedPage, todo }) => {
  const itemCounter = () => {
    let count = 0;

    if (selectedPage === 0 || selectedPage === 1) {
      todo.map((todo) => {
        if (!todo.selected) {
          count++;
        }
      });
    } else if (selectedPage === 2) {
      todo.map((todo) => {
        if (todo.selected) {
          count++;
        }
      });
    }
    return count;
  };
  return <div className="items">{itemCounter()} items left</div>;
};

export default Items;
