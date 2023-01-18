import React, { useRef } from "react";
import { Todo } from "../../Types";

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
