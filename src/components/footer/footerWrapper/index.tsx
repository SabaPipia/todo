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

interface todoI {
  todos: Todo[];
  todoL: number;
  selectedPage: number;
  clear: () => void;
  setSelectedPage: (page: number) => void;
}

const FooterWrapper: React.FC<todoI> = ({
  todos,
  todoL,
  selectedPage,
  clear,
  setSelectedPage,
}) => {
  return (
    <div className="footerWrapper">
      <Items todo={todos} todoL={todoL} selectedPage={selectedPage} />
      <Sections selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Clear clear={clear} />
    </div>
  );
};

export default FooterWrapper;
