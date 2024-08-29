" use client";
import React from "react";
import Clipboard from "../clipboard";

const Arrow = () => {
  return (
    <div className="relative">
      <Clipboard code={code} />

      <div className="section-5"></div>
    </div>
  );
};

export default Arrow;

const code = `
import React from "react";

const Arrow = () => {
  return <div className="section-5"></div>;
};

export default Arrow;
/////////////////// css code //////////////////
.section-5 {
  width: 200px;
  height: 200px;
  margin-top: 50px;
  clip-path: polygon(
    0% 20%,
    60% 20%,
    60% 0%,
    100% 50%,
    60% 100%,
    60% 80%,
    0% 80%
  );
  background-color: var(--secondary-color);
  transition: width 1s ease-in-out, clip-path 1s ease-in-out 0.5s;
}

.section-5:hover {
  width: 100%;
  clip-path: polygon(0 0, 59% 0, 100% 0, 100% 50%, 100% 100%, 57% 100%, 0 100%);
}

`;
