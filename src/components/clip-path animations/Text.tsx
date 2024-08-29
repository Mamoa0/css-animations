import React from "react";
import Clipboard from "../clipboard";

const Text = () => {

  return (
<div className="relative">
<Clipboard code={code} />

<div className="section-3">
      <h1 className="clip-text ">Black</h1>
      <h1 className="clip-text ">White</h1>
    </div>
</div>
  );
};

export default Text;

const code = `

import React from 'react'

const Text = () => {
  return (
    <div className="section-3">
    <h1>Black</h1>
    <h1>White</h1>
  </div>
  )
}

export default Text

/////////////////// css code //////////////////
.section-3 {
  position: relative;
  width: 100%;
  background-color: var(--secondary-color);
  height: 200px;
  background-color: transparent;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  text-transform: uppercase;
}

h1:nth-child(1) {
  color: var(--primary-color);
  background-color: var(--tertiary-color);
}
h1:nth-child(2) {
  color: white;
  background-color: var(--tertiary-color);
  transition: 0.5s;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0% 100%);
}

h1:nth-child(2):hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

h1:nth-child(1):hover ~ h1 {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
  `;
