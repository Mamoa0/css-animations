"use client";
import React, { useState } from "react";

type Props = {
  button: {
    content: any;
    code: string;
  };
  index: number;
};
const Button = ({ button, index }: Props) => {
  const [tooltip, setTooltip] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(button.code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 1000); // Reset tooltip after 2 seconds
    });
  };
  return (
  <div data-aos="fade-left" className="relative md:col-span-1 col-span-2 text-center ">
      <button className={`${"btn-"+(index+1)}`} onClick={copyToClipboard}>
      {button.content}
    </button>
    <span
          className={`absolute top-full left-1/2 -translate-x-1/2 px-2 py-1 text-white bg-secondary rounded-md text-xs ${
            tooltip ? "opacity-100 transition-opacity duration-300" : "opacity-0"
          } `}
        >
          {tooltip}
        </span>
  </div>
  );
};

export default Button;
