import React from "react";
import Input from "../input";
import TodoList from "../todoList";
import FooterWrapper from "../footer/footerWrapper";
import "./style.scss";

const WrapperComponent = () => {
  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="main">
        <Input />
        <TodoList />
      </div>
      <FooterWrapper />
    </div>
  );
};

export default WrapperComponent;
