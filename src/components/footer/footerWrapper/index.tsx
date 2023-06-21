import React from "react";
import Clear from "../clear";
import Items from "../items";
import Sections from "../sections";
import "./style.scss";

interface Todo {
  text: string | undefined;
  id: number | undefined;
  selected: boolean | undefined;
}

interface todoL {
  todoL: number;
  clear: () => void;
}

const FooterWrapper: React.FC<todoL> = ({ todoL, clear }) => {
  // const removeTodo = (id?: number) => {
  //   const newTodo = todos.filter((item) => item.id !== id);
  //   setTodos([...newTodo]);
  // };

  return (
    <div className="footerWrapper">
      <Items todoL={todoL} />
      <Sections />
      <Clear clear={clear} />
    </div>
  );
};

export default FooterWrapper;
