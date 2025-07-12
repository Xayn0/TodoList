import React, { useState } from "react";
import type { TodoItem } from "./App";
import { isDateValid } from "./date.lib";

type User = {
  age: number;
  name: string;
};

const user = {
  age: 1,
  name: "",
};

// const age = user.age
// const name = user.name

// const { age, name } = user;

// function printUser({ name }: User) {
//   console.log(name);
// }

type Props = {
  addTodo: (todo: TodoItem) => void;
  close: () => void;
};

{
  /* <RenderDialog isOpen={true} num={1} />;
RenderDialog({
  isOpen,
}); */
}
{/* <Input type = {oneline} />
<Input type = {multiple} />
<Input type = {date} />
<Input type = {done} /> */}
export function Dialog({ addTodo, close }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [deadline, setDeadline] = useState<Date | null>(null);

  const isValid = Boolean(title) && Boolean(description) && Boolean(deadline);
  return (
    // Overlay
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      {/* Dialog Content Box */}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative">
        <form
          className="space-y-4" // Tailwind: Adds vertical spacing between form elements
          onSubmit={() => {
            if (!isValid || deadline === null) return;

            const task: TodoItem = {
              deadline,
              title,
              description,
              isDone,
            };
            addTodo(task);
            close();
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-cEnter">Add New Todo</h2>

          {/* Input for Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>

          {/* Input for Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
              <textarea
                className="mt-1 block w-full h-36 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>

          {/* Input for Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deadline
              <input
                type="date" // Use type="date" for better UX
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => {
                  const date = new Date(e.target.value);

                  setDeadline(isDateValid(date) ? date : null);
                }}
              />
            </label>
          </div>

          {/* Input for Is Done */}
          <div className="flex items-center">
            <label className="ml-2 block text-sm text-gray-900 flex items-center gap-1">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                onChange={(e) => setIsDone(e.target.checked)}
              />
              Is Done?
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              disabled={!isValid}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:bg-blue-500 disabled:cursor-not-allowed"
            >
              Add ToDo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

