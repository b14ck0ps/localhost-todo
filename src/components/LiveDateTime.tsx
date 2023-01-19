import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

export default function LiveDateTime() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 1000);
  }, []);
  return (
    <div className="flex justify-center gap-10 [&]:text-blue-400">
      <p>
        <BsCalendar3 className="inline scale-110 mr-3" />

        {dateState.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p>
        <AiOutlineClockCircle className="inline scale-110 mr-3" />

        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          hour12: true,
        })}
      </p>
    </div>
  );
}
