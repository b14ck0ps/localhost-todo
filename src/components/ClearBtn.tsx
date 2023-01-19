import React from "react";
type IClrProp = {
  onClear: () => any;
};
export default function ClearBtn({ onClear }: IClrProp) {
  const handleClick = () => {
    if (window.confirm("Are you sure you wish to claer all TODOs?")) onClear();
  };
  return (
    <div>
      {" "}
      <div>
        <button
          onClick={handleClick}
          className="scale-75 -rotate-90  bg-red-600 opacity-40 rounded-md px-4  mt-5  hover:scale-90 hover:opacity-100 transition-all "
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
