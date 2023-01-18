import React, { useRef } from "react";

export default function InputField() {
  const newTodo = useRef<HTMLInputElement>(null);

  const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newTodo.current?.value);
  };
  return (
    <div>
      <form onSubmit={(e) => onAdd(e)}>
        <input
          ref={newTodo}
          className="border rounded-lg p-2 "
          type="text"
          placeholder="Add new todo"
        />
        <button className="border ml-5 px-5 p-2 rounded-md" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
