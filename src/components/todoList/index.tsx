import React, { useState } from "react";
import { Check, Remove } from "../../icons";

import "./style.scss";

interface Todo {
  id: number | undefined;
  text: string | undefined;
  selected: boolean | undefined;
}
interface TodoListI {
  todos: Todo[];
  removeTodo: (id?: number, index?: number) => void;
  selectTodo: (id?: number, index?: number) => void;
  todoClass?: string;
}
const TodoList: React.FC<TodoListI> = ({
  todos,
  removeTodo,
  selectTodo,
  todoClass,
}) => {
  return (
    <div className={`todoList ${todoClass}`}>
      {todos.map((item, index) => {
        return (
          <div className="todoItem" key={index}>
            <div
              className="leftPart"
              onClick={() => selectTodo(item.id, index)}
            >
              <div
                className={`icon`}
                style={{
                  opacity: item.selected ? "1" : "",
                }}
              >
                <Check />
              </div>
              <span
                style={{
                  textDecoration: item.selected ? "line-through" : "none",
                  color: item.selected ? "#8080808a" : "",
                  fontWeight: item.selected ? "500" : "300",
                }}
              >
                {item.text}
              </span>
            </div>
            <div className="rightPart" onClick={() => removeTodo(item.id)}>
              <Remove />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
