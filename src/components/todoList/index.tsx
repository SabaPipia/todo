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
  setValue: (value: string | any) => void;
  setEditButton: (e: boolean) => void;
  setModifyID: (id: number | undefined) => void;
  todoClass?: string;
}
const TodoList: React.FC<TodoListI> = ({
  todos,
  removeTodo,
  selectTodo,
  setValue,
  setEditButton,
  setModifyID,
  todoClass,
}) => {
  const handleClick = (id?: number) => {
    todos.map((todo) => {
      if (todo.id === id) {
        setValue(todo.text);
        setModifyID(todo.id);
      }
    });
  };

  return (
    <div className={`todoList ${todoClass}`}>
      {todos.map((item, index) => {
        return (
          <div className="todoItem" key={index}>
            <div className="leftPart">
              <div
                className={`icon`}
                style={{
                  opacity: item.selected ? "1" : "",
                }}
                onClick={() => selectTodo(item.id, index)}
              >
                <Check />
              </div>
              <span
                style={{
                  textDecoration: item.selected ? "line-through" : "none",
                  color: item.selected ? "#8080808a" : "",
                  fontWeight: item.selected ? "500" : "300",
                }}
                onClick={(e) => {
                  setEditButton(true);
                  handleClick(item.id);
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
