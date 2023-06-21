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
  setTodoClass: (className: string) => void;
  setValue: (value: string) => void;
  setEditButton: (e: boolean) => void;
  modifyTodo: () => void;
  todoClass: string | undefined;
  value?: string | undefined;
  editButton: boolean;
}

const Input: React.FC<InputI> = ({
  addTodo,
  setTodoClass,
  setValue,
  modifyTodo,
  todo,
  todoClass,
  editButton,
  value,
}) => {
  const [error, setError] = useState<string | undefined>();
  const [isBlank, setIsBlank] = useState<string | undefined>();
  const [arrowToggle, setArrowToggle] = useState<string | undefined>(
    "downward"
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSave = () => {
    const input = inputRef.current?.value;
    const index = todo.length;
    let id = index;
    todo.map((todo: any) => {
      let max = Math.max(todo.id) + 1;
      id = max;
    });

    if (input?.trim() === "") {
      setError("Uh-oh! Task field is blank. Please enter a task.");
      setIsBlank("error");
    } else {
      addTodo(input, id, false);
      setIsBlank("");
      setError("");
    }
    setValue("");
  };
  const handleToggleDirection = () => {
    setTodoClass(todoClass === "last" ? "" : "last");
    setArrowToggle(arrowToggle === "downward" ? "upward" : "downward");
  };
  return (
    <div className="Input">
      <div className={`arrow ${arrowToggle}`} onClick={handleToggleDirection}>
        <Arrow />
      </div>
      <p className={isBlank}>{error}</p>
      <input
        ref={inputRef}
        placeholder="what needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (editButton === false && e.key === "Enter") {
            handleSave();
          }
        }}
      />
      {editButton ? (
        <button onClick={modifyTodo} className="saveButton">
          Save
        </button>
      ) : null}
    </div>
  );
};

export default Input;
