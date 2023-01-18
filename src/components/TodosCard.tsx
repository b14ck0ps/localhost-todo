import React from "react";
import { Todo } from "../../Types";

export default function TodosCard({ desc, date, isDone }: Todo) {
  return (
    <div className="bg-amber-400 p-5 w-[290px] rounded shadow-lg">
      <p className={isDone ? "line-through" : ""}>{desc}</p>
      <div className="flex justify-between mt-2 border-t border-black pt-2">
        <button className="border border-black px-2 rounded hover:border-white ">
          Done
        </button>
        <p>{date}</p>
      </div>
    </div>
  );
}
