import React, { useRef } from "react";

export default function InputField({ addTodo }: any) {
  const newTodo = useRef<HTMLInputElement>(null);

  const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = newTodo.current?.value;
    addTodo(todo);
    if (todo) newTodo.current.value = "";
  };
  return (
    <div>
      <form onSubmit={(e) => onAdd(e)}>
        <input
          ref={newTodo}
          className="border border-blue-500 rounded-lg p-2 bg-gray-800 focus:outline-none  "
          type="text"
          placeholder="Add new todo"
        />
        <button
          className=" scale-90 hover:scale-100 active:scale-110 ml-5 px-5 p-2 rounded-md hover:cursor-pointer bg-amber-400 text-gray-800 hover:bg-amber-300 transition-all"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
