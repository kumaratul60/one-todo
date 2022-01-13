import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    console.log(`Todo is ${input}`);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello ToDO 2022</h1>

      <form className="app_input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          click to add
        </button>
      </form>

      {/* {todos.map((item) => (
        <p>{item}</p>
      ))} */}
      {todos.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
}
