"use client";
import React from "react";
import Clipboard from "../clipboard";

const CircleImage = () => {
  return (
    <div className="relative">
      <Clipboard code={code} />

      <div className="section-4">
        <img src="/1.jpg" className="img-1" alt="" />
      </div>
    </div>
  );
};

export default CircleImage;

const code = `
import React from 'react'

const CircleImage = () => {
  return (
    <div className="section-4">
    <img src="/1.jpg" className="img-1" alt="" />
  </div>
  )
}

export default CircleImage;
/////////////////// css code //////////////////
.section-4 {
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
}
.img-1 {
  width: 100%;
  height: 100%;
  animation: rotateOrb 5s ease-in-out infinite;
}

@keyframes rotateOrb {
  0% {
    clip-path: circle(35% at 10% 16%);
  }
  25% {
    clip-path: circle(40% at 90% 9%);
  }
  50% {
    clip-path: circle(45% at 90% 90%);
  }
  75% {
    clip-path: circle(55% at 10% 90%);
  }
  100% {
    clip-path: circle(100% at 42% 68%);
  }
}

`;
