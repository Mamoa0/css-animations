"use client";
import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text } : { text: string }) => {
  const [htmlSpans, setHtmlSpans] = useState<JSX.Element[]>([] as JSX.Element[]);
  const [tooltip, setTooltip] = useState("");
  useEffect(() => {
    const spans = text.split('').map((letter, i) => (
      <span 
        key={i} 
        style={{
          animationDuration: `${Math.random() * 5}s`,
          filter: `hue-rotate(${i * 50}deg)`
        }}
      >
        {letter}
      </span>
    ));
    setHtmlSpans(spans);
  }, [text]);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };
  
  
  return <div className="relative">
      <div className="absolute top-2 left-full">
     <button
        onClick={copyToClipboard}
        className="relative"
        onMouseEnter={() => setTooltip("Copy")}
        onMouseLeave={() => tooltip != "Copied" && setTooltip("")}
      >
        <svg
          className=" cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
        >
          <path
            className="fill-primary stroke-secondary"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 4c.93 0 1.395 0 1.776.102a3 3 0 012.122 2.122C20 6.605 20 7.07 20 8v9.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C4 19.72 4 18.88 4 17.2V8c0-.93 0-1.395.102-1.776a3 3 0 012.122-2.122C6.605 4 7.07 4 8 4m1.6 2h4.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C16 5.24 16 4.96 16 4.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C15.24 2 14.96 2 14.4 2H9.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C8 2.76 8 3.04 8 3.6v.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C8.76 6 9.04 6 9.6 6z"
          ></path>
        </svg>
        <span
          className={`absolute top-8 right-1 px-2 py-1 text-white bg-secondary rounded-md text-xs ${
            tooltip ? "opacity-100 transition-opacity duration-300" : "opacity-0"
          } `}
        >
          {tooltip}
        </span>
      </button>
     </div>
    <h2 className="text">{htmlSpans}</h2>
  </div>;
};

export default AnimatedText;

const code= `import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text } : { text: string }) => {
  const [htmlSpans, setHtmlSpans] = useState<JSX.Element[]>([] as JSX.Element[]);

  useEffect(() => {
    const spans = text.split('').map((letter, i) => (
      <span 
        key={i} 
        style={{
        "Math.random() * 5
          animationDuration: \`\`,

          "i * 50"
          filter: \`hue-rotate(deg)\`
        }}
      >
        {letter}
      </span>
    ));
    setHtmlSpans(spans);
  }, [text]);

  return <h2 className="text">{htmlSpans}</h2>;
};

export default AnimatedText;

////////////////////////////////////////////////// css code /////////////////////////////////////
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');


// .text {
//     position: relative;
//     font-size: 3em;
//     letter-spacing: 0.25em;
//     text-transform: uppercase;
//     font-weight: 500;
//     color: white;
// }

// @keyframes colorfullText {
//     0%, 20% {
//         color: #fff2;
//     }

//     21%, 79% {
//         color: #0f0;
//     }

//     80%, 100% {
//         color: #fff2;
//     }
// }

// h2 span {
//     position: relative;
//     animation: colorfullText 1s linear infinite;
// }`