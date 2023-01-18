import React from "react";
import { Todo } from "../../Types";
interface TodoProps {
  id: number;
  desc: string;
  date: string;
  isDone: boolean;
  handleDone: (id: number) => void;
}
export default function TodosCard({
  id,
  desc,
  date,
  isDone,
  handleDone,
}: TodoProps) {
  return (
    <div className="bg-amber-400 p-5 w-[290px] rounded shadow-lg">
      <p className={isDone ? "line-through" : ""}>{desc}</p>
      <div className="flex justify-between mt-2 border-t border-black pt-2">
        <button
          onClick={() => handleDone(id)}
          className="border border-black px-2 rounded hover:border-white "
        >
          {isDone ? "Undone" : "Done"}
        </button>
        <p>{date}</p>
      </div>
    </div>
  );
}
