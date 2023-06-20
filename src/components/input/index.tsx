import React, { useRef, useState } from "react";
import { Arrow } from "../../icons";
import "./style.scss";

interface Todo {
  id: number | undefined;
  text: string | undefined;
  selected: boolean | undefined;
}
interface InputI {
  todo: Todo[];
  addTodo: (text?: string, id?: number, selected?: boolean) => void;
}

const Input: React.FC<InputI> = ({ addTodo, todo }) => {
  const [value, setValue] = useState<string | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSave = () => {
    const input = inputRef.current?.value;
    const index = todo.length;
    const id = index;
    addTodo(input, id, false);
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
