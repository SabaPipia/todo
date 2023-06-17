import React, { useRef, useState } from "react";
import { Arrow } from "../../icons";
import "./style.scss";

interface InputI {
  addTodo: (text?: string, id?: number) => void;
}

const Input: React.FC<InputI> = ({ addTodo }) => {
  const [value, setValue] = useState<string | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSave = () => {
    const input = inputRef.current?.value;
    const id = Math.floor(Math.random() * Math.random() * 999999999);
    addTodo(input, id);
    setValue("");
  };
  return (
    <div className="Input">
      <Arrow />
      <input
        ref={inputRef}
        placeholder="what needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave();
          }
        }}
      />
    </div>
  );
};

export default Input;
