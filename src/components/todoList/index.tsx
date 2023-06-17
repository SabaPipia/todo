import React, { useState } from "react";
import { Check, Remove } from "../../icons";

import TodoItem from "./todoItem";
import "./style.scss";

interface Todo {
  id: number | undefined;
  text: string | undefined;
}
interface TodoListI {
  todos: Todo[];
}
const TodoList: React.FC<TodoListI> = ({ todos }) => {
  return (
    <div className="todoList">
      {todos.map((item) => {
        return (
          <div className="todoItem" key={item.id}>
            <div className="leftPart">
              <Check />
              <span>{item.text}</span>
            </div>
            <div className="rightPart">
              <Remove />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
