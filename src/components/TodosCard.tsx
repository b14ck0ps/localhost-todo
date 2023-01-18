import React from "react";
import { Todo } from "../../Types";

export default function TodosCard({ desc, date, isDone }: Todo) {
  return (
    <div className="bg-amber-400 p-5 w-[290px] rounded shadow-lg">
      <p className={isDone ? "line-through" : ""}>{desc}</p>
      <p className="text-right mt-2 border-t pt-2">{date}</p>
    </div>
  );
}
