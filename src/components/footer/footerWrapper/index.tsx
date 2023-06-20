import React from "react";
import Clear from "../clear";
import Items from "../items";
import Sections from "../sections";
import "./style.scss";

interface todo {
  todoL: number;
}

const FooterWrapper: React.FC<todo> = ({ todoL }) => {
  return (
    <div className="footerWrapper">
      <Items todoL={todoL} />
      <Sections />
      <Clear />
    </div>
  );
};

export default FooterWrapper;
