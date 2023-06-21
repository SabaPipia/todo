import React, { useState } from "react";
import Input from "../input";
import TodoList from "../todoList";
import FooterWrapper from "../footer/footerWrapper";
import "./style.scss";

interface Todo {
  text: string | undefined;
  id: number | undefined;
  selected: boolean | undefined;
}

const WrapperComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoClass, setTodoClass] = useState<string | undefined>();

  const addTodo = (text?: string, id?: number, selected?: boolean) => {
    const newTodo: Todo = { text, id, selected };
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id?: number) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos([...newTodo]);
  };
  const selectTodo = (id?: number, index?: number) => {
    const updatedTodos: any = todos.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          selected: !i.selected,
        };
      }
      return i;
    });
    setTodos(updatedTodos);
  };
  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.selected !== true);
    setTodos([...updatedTodos]);
    console.log(todos);
  };
  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="main">
        <Input
          addTodo={addTodo}
          todo={todos}
          todoClass={todoClass}
          setTodoClass={setTodoClass}
        />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          selectTodo={selectTodo}
          todoClass={todoClass}
        />
      </div>
      <FooterWrapper clear={clearCompleted} todoL={todos.length} />
    </div>
  );
};

export default WrapperComponent;
