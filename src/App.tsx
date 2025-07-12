import React, { useState, useEffect } from "react";
// import "./App.css";
import css from "./style.module.css";
import { Dialog } from "./RenderDialog";

export type TodoItem = {
  id: string;
  title: string;
  deadline: Date;
  isDone: boolean;
  description: string;
};

type TodoViewProps = {
  data: TodoItem;
};

function TodoView(props: TodoViewProps) {
  return (
    <div className={css.box}>
      <div className="part">
        <h3>Title:</h3> {props.data.title}
      </div>
      <div className="part">
        <h3>Description:</h3> {props.data.description}
      </div>
      <div className="part">
        <h3>Deadline:</h3> {props.data.deadline.toLocaleString()}
      </div>
      <div className="part">
        <h3>Status:</h3> {props.data.isDone ? "✅ Done" : "❌ Not done"}
      </div>
      <button
        className="bg-amber-900 p-5-10 cursor-pointer"
        onClick={() => {
          fetch(`http://localhost:3000/todos/${props.data.id}`, {
            method: "DELETE",
          });
        }}
      >
        {" "}
        DELETE TODO
      </button>
    </div>
  );
}

const getSeven1 = () => 7;
const getSeven2 = () => {
  return 7;
};

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [todoList, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((todos: TodoItem[]) => setTodos(todos));
  }, []);

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Add New Todo
      </button>
      {todoList.map((item) => {
        // To read about the keys
        return <TodoView data={item} />;
      })}
      {isDialogOpen && (
        <Dialog
          addTodo={(newTodo) => setTodos([...todoList, newTodo])}
          close={() => setIsDialogOpen(false)}
        />
      )}
    </>
  );
}

export default App;
