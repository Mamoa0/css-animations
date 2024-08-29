import React from "react";
import Clipboard from "../clipboard";

const Tringles = () => {
  return (
    <div className="section-1 relative">
      <Clipboard code={code} />

      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
    </div>
  );
};

export default Tringles;

const code = `"use client"
import React from 'react'

const Tringles = () => {
  const [tooltip, setTooltip] = React.useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };
  
  return (
    <div className="section-1">
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
    <div className="shape shape-3"></div>
  </div>
  )
}

export default Tringles

// ////////////////// css code //////////////////
.section-1 {
  width:100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  margin: 20px 0;
}

.section-1 .shape {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}

.section-1 .shape-1 {
  background-color: var(--tertiary-color);
  clip-path: polygon(0 0, 12% 0, 47% 100%, 0% 100%);
}

.section-1 .shape-2 {
  background-color: steelblue;
  clip-path: polygon(54% 0, 100% 0, 100% 100%, 60% 100%);
}

.section-1 .shape-3 {
  background-color: tomato;
  clip-path: polygon(12% 0, 83% 0, 76% 100%, 38% 100%);
}

.section-1:hover .shape {
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
}
.section-1 .shape:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
`;
