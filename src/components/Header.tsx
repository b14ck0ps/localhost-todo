import React from "react";
import LiveDateTime from "./LiveDateTime";

export default function Header() {
  return (
    <>
      <div className="text-center text-4xl p-10 text-amber-400">
        <span className="pb-3 border-b-2 border-amber-400">
          {" "}
          📝 Local Host Todo 📝
        </span>
      </div>
      <LiveDateTime />
    </>
  );
}
