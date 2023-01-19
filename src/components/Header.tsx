import React from "react";
import LiveDateTime from "./LiveDateTime";
import { RiTodoLine } from "react-icons/ri";

export default function Header() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="inline-block rounded-md bg-gradient-to-r from-amber-500 via-gray-800 to-blue-500 p-1 w-[500px]">
          <div className=" bg-gray-800 back">
            <h1 className="text-2xl font-black text-white">
              <div className="text-center text-4xl px-5 py-2">
                <span className="">
                  {" "}
                  <span className="font-Courgette font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-blue-500">
                    localhost: todo
                  </span>{" "}
                  <RiTodoLine className="inline text-blue-500" />
                </span>
              </div>
              <div className="p-5">
                <LiveDateTime />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
