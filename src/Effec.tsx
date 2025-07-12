import { useEffect, useState } from "react";
import { TextInput } from "./InputLine";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const apiProvider = {
  getTodo: (id: number): Promise<Todo> => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (response) => {
        // 4**, 5**
        if (!response.ok) {
          throw new Error("Response isn't");
        }
        return response.json();
      }
    );
  },
};

function useTodo(id: number) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
    setTodo(null);
    setLoading(true);

    apiProvider
      .getTodo(id)
      .then((todo) => setTodo(todo))
      .catch((err) => setError((err as Error).message))
      .finally(() => setLoading(false));
  }, [id]);

  return { todo, error, loading };
}

// Read http methods CRUD

export function Effect() {
  const [id, setId] = useState(0);
  const { error, loading, todo } = useTodo(id);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <TextInput
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        className="mb-4"
      />
      <TextInput
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <button onClick={() => setId(id + 1)}>Next todo Id = {id}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {todo && (
        <>
          <p>Title = {todo.title}</p>
          <p>Id = {todo.id}</p>
        </>
      )}
    </div>
  );
}

// const promise = {
//     status: "pending", // 'penging' | 'rejected' | 'resolved',
//     result: null,
//     error: null
// }

// const promise = {
//     status: "rejected", // 'penging' | 'rejected' | 'resolved',
//     result: null,
//     error: new Error("Network issue")
// }

// const promise = {
//     status: "resolved", // 'penging' | 'rejected' | 'resolved',
//     result: {
//         name: 'John'
//     },
//     error: null
// }
