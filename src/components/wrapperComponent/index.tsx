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
  const [value, setValue] = useState<string | undefined>("");
  const [todoClass, setTodoClass] = useState<string | undefined>();
  const [editButton, setEditButton] = useState<boolean>(false);
  const [modifyID, setModifyID] = useState<number | undefined>();
  const [selectedPage, setSelectedPage] = useState(0);

  const addTodo = (text?: string, id?: number, selected?: boolean) => {
    const newTodo: Todo = { text, id, selected };
    setTodos([...todos, newTodo]);
    setEditButton(false);
  };
  const removeTodo = (id?: number) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos([...newTodo]);
  };
  const selectTodo = (id?: number) => {
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
  const modifyTodo = () => {
    const modifyTodo: any = todos.map((todo) => {
      if (todo.id === modifyID) {
        return {
          ...todo,
          text: value,
        };
      }
      return todo;
    });
    setTodos(modifyTodo);
    setValue("");
    setEditButton(false);
  };
  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="main">
        <Input
          value={value}
          setValue={setValue}
          addTodo={addTodo}
          todo={todos}
          setTodos={setTodos}
          todoClass={todoClass}
          setTodoClass={setTodoClass}
          editButton={editButton}
          setEditButton={setEditButton}
          modifyTodo={modifyTodo}
        />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          selectTodo={selectTodo}
          todoClass={todoClass}
          setValue={setValue}
          setEditButton={setEditButton}
          setModifyID={setModifyID}
          selectedPage={selectedPage}
        />
      </div>
      <FooterWrapper
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        clear={clearCompleted}
        todoL={todos.length}
        todos={todos}
      />
    </div>
  );
};

export default WrapperComponent;
