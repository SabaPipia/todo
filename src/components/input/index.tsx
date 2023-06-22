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
  setTodos: (todo: Todo[]) => void;
  todoClass: string | undefined;
  value?: string | undefined;
  editButton: boolean;
}

const Input: React.FC<InputI> = ({
  addTodo,
  setValue,
  modifyTodo,
  setTodos,
  todo,
  editButton,
  value,
}) => {
  const [error, setError] = useState<string | undefined>();
  const [isBlank, setIsBlank] = useState<string | undefined>();

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
  const markAll = () => {
    const mark: any = todo.map((todo) => {
      return {
        ...todo,
        selected: true,
      };
    });
    setTodos(mark);
  };
  return (
    <div className="Input">
      <div onClick={markAll}>
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
