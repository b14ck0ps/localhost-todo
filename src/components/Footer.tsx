import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";

export default function Footer() {
  return (
    <div className="text-center mt-5 p-5">
      <p>A simple TODO App create with React</p>
      Made with <AiFillHeart className="inline text-red-600" /> by{" "}
      <a
        className="text-blue-600 font-semibold group"
        href="https://github.com/b14ck0ps"
        target="_blank"
      >
        Ajran <DiGithubAlt className="inline group-hover:scale-150  " />
      </a>{" "}
    </div>
  );
}
