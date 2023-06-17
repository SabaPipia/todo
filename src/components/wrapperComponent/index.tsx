import React, { useState, useRef, useEffect } from "react";
import Input from "../input";
import TodoList from "../todoList";
import FooterWrapper from "../footer/footerWrapper";
import "./style.scss";

// export interface Todo {
//   id: number;
//   text: string;
// }

interface Todo {
  text: string | undefined;
  id: number | undefined;
}
const WrapperComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text?: string, id?: number) => {
    const newTodo: Todo = { text, id };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="main">
        <Input addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
      <FooterWrapper />
    </div>
  );
};

export default WrapperComponent;
