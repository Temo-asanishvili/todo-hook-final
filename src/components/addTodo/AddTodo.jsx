import { useState } from "react";
import "./addTodo.scss";
export default function AddTodo({ addtodo, todos, inputValue }) {
  const [value, setValue] = useState("");

  const updateValue = (e) => {
    setValue(e.target.value);
    inputValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (value.length > 0 && value.trim().length > 0) {
      addtodo(value);
    }
    setValue("");
    todos.some((el) => el.text === value);
  };

  return (
    <>
      <h1>Todo App</h1>
      <form>
        <input
          type="text"
          onChange={updateValue}
          value={value}
          placeholder="Add Todo Here..."
        />
        <button onClick={submitForm} type="submit">
          Add
        </button>
      </form>
    </>
  );
}
