import { useState } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/todoList/TodoList";
import "./app.scss";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addtodo = (value) => {
    const todo = {
      text: value,
      id: Math.floor(Math.random() * 1000),
      complete: false,
      checked: false,
    };
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id) => {
    const filterByDelete = todos.filter((el) => id !== el.id);
    setTodos(filterByDelete);
  };

  const doneTodo = (id, e, todo) => {
    const filterByDone = todos.map((el) => {
      if (id === el.id) {
        return {
          ...el,
          complete: !el.complete,
        };
      }
      return el;
    });
    e.target.innerHTML = !todo.complete ? "Undo" : "Done";
    setTodos(filterByDone);
  };

  const editTodo = (todo) => {
    const editedTodos = todos.map((el) => {
      if (todo.id === el.id) {
        return {
          ...el,
          text: value,
        };
      }
      return el;
    });
    setTodos(editedTodos);
  };

  const inputValue = (text) => {
    setValue(text);
  };

  const deleteAllTodo = () => {
    setTodos([]);
  };

  const deleteAllConfirmed = () => {
    const filterByConfirmed = todos.filter((todo) => todo.complete !== true);
    setTodos(filterByConfirmed);
  };

  const deleteAllChecked = () => {
    const filterByChecked = todos.filter((todo) => todo.checked !== true);
    setTodos(filterByChecked);
  };

  const checkCheckbox = (todo) => {
    const check = todos.map((el) => {
      if (todo.id === el.id) {
        return {
          ...el,
          checked: !el.checked,
        };
      }
      return el;
    });
    setTodos(check);
  };

  return (
    <div className="todo-container">
      <header>
        <AddTodo inputValue={inputValue} todos={todos} addtodo={addtodo} />
      </header>
      <main>
        <TodoList
          checkCheckbox={checkCheckbox}
          editTodo={editTodo}
          doneTodo={doneTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
      </main>
      <div className="footer-btn">
        <button onClick={() => deleteAllTodo()}>delete All</button>
        <button onClick={() => deleteAllChecked()}>delete All Checked</button>
        <button onClick={() => deleteAllConfirmed()}>
          delete all Confirmed
        </button>
      </div>
    </div>
  );
}
