import React, { useState, useEffect } from "react";
// import "./App.css";
import css from "./style.module.css";
import Dialog from "./RenderDialog";

export type TodoItem = {
  title: string;
  deadline: Date;
  isDone: boolean;
  description: string;
};

const task: TodoItem = {
  title: "new task",
  deadline: new Date(),
  isDone: true,
  description: "some task",
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
    </div>
  );
}

function f<ArgType>(arg1: ArgType) {}

f<string>("abc");
f<number>(1);

// function useState<T>(initialState: T) {

// }

// useState<number>(1)
// useState<boolean>(true)
// useState<string>('')
// useState<number[]>([])

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [todoList, setTodos] = useState<TodoItem[]>([]);

  const condition = false;

  const [text, setText] = useState("hello");

  return (
    <>
      text = {text}
      <input onChange={(e) => setText(e.target.value)} value={text} />
      {text.length > 5 && <div>Bigger than 5 symbols</div>}
      <button onClick={() => {
        console.log('Creating todo with the text:', text);
        
      }}>Click me </button>
      {condition && <button>Click me </button>}
      <Counter/>
      {/* Extract this button into a separete component */}
      {/* <Button
        text="Add New Todo"
        type="success"
        onClick={() => setIsDialogOpen(true)}
      /> */}
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

function Counter() {
  const [x, setX] = useState(0);
  console.log('Counter component rerendered');
  
  return (
    <div>
      <button onClick={() => setX(x + 1)}>+</button>
      <button onClick={() => setX(x - 1)}>-</button>
    </div>
  );
}

// Controlled components

function Card(props: {}) {
  return <div>Card</div>;
}

export default App;
