import React from "react";
import type { TodoItem } from "./App";

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

function Dialog({ addTodo, close }: Props) {
  
  return (
    // Overlay
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      {/* Dialog Content Box */}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative">
        <form
          className="space-y-4" // Tailwind: Adds vertical spacing between form elements
          onSubmit={(ev) => {
            ev.preventDefault();
            const formData = new FormData(ev.target as HTMLFormElement);

            const todoItem: TodoItem = {
              title: formData.get("title") as string,
              description: formData.get("description") as string,
              deadline: new Date(formData.get("deadline") as string),
              isDone: formData.get("isDone") === "on",
            };

            addTodo(todoItem);
            close();
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-cEnter">Add New Todo</h2>

          {/* Input for Title */}
          <div>
            <label
              htmlFor="dialog-title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="dialog-title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name="title"
              required
            />
          </div>

          {/* Input for Description */}
          <div>
            <label
              htmlFor="dialog-description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="dialog-description"
              className="mt-1 block w-full h-36 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              name="description"
            />
          </div>

          {/* Input for Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deadline
              <input
                type="date" // Use type="date" for better UX
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name="deadline"
              />
            </label>
          </div>

          {/* Input for Is Done */}
          <div className="flex items-center">
            <label className="ml-2 block text-sm text-gray-900 flex items-center gap-1">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                name="isDone"
              />
              Is Done?
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <input
              type="submit"
              value="Save Todo" // Text for the button
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
