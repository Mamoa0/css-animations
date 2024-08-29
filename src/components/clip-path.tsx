"use client";
import React from "react";

type Props = {
  className?: string;
  code: string;
};

const ClipPath = ({ className, code }: Props) => {
  const [tooltip, setTooltip] = React.useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };

  return (
    <div
      className="box-wrap lg:col-span-3 md:col-span-4 col-span-6 justify-self-center"
      onClick={copyToClipboard}
    >
      <div className={`box ${className}`}></div>
      <div className={`content`}>
        {tooltip == "Copied" ? tooltip : "Click Me!"}
      </div>
    </div>
  );
};

export default ClipPath;
