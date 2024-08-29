"use client";
import React, { useState } from "react";
import Clipboard from "../clipboard";

const Circle = () => {

  return (
  <div className="relative">
    <Clipboard code={code} />
      <div className="section-2">
      <div className="name">
        <span>C</span>
        <h2>CSS Animations</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quidem
        velit corrupti. Omnis voluptatibus similique culpa ratione porro odit
        ipsam.
      </p>
    </div>
  </div>
  );
};

export default Circle;
const code =`
import React from "react";

const Circle = () => {
  return (
    <div className="section-2">
      <div className="name">
        <span>C</span>
        <h2>CSS Animations</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quidem
        velit corrupti. Omnis voluptatibus similique culpa ratione porro odit
        ipsam.
      </p>
    </div>
  );
};

export default Circle;

/////////////////// css code //////////////////
.section-2 {
  width: 100%;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  background-color: #00aaaa;
  clip-path: circle(6.1% at 95% 30%);
  transition: all 0.5s ease-in-out;
}

.section-2 .name {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  gap: 10px;
}
.section-2 .name span {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  background-color: var(--brown-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
}
.section-2 .name h2 {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-2:hover {
  clip-path: circle(100% at 70% 43%);
}

`