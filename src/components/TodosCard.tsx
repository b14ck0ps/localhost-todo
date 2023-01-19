import React from "react";
import { Todo } from "../../Types";
import { IoMdDoneAll } from "react-icons/io";
import { AiOutlineUndo } from "react-icons/ai";

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
    <div
      className={
        " bg-amber-400 p-5 w-[290px] rounded shadow-lg [&]:text-gray-800 hover:scale-105 transition-all "
      }
    >
      <p
        className={
          " font-Solitreo text-xl " + (isDone ? "line-through blur-[1px]" : "")
        }
      >
        {desc}
      </p>
      <div className="flex justify-between mt-2 border-t border-gray-800 pt-2">
        <button
          onClick={() => handleDone(id)}
          className="border-none  px-2 rounded hover:border-gray-800"
        >
          {!isDone ? (
            <IoMdDoneAll className="hover:text-2xl transition-all" />
          ) : (
            <AiOutlineUndo className="hover:text-2xl transition-all" />
          )}
        </button>
        <p>{date}</p>
      </div>
    </div>
  );
}
