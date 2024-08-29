"use client";
import React, { useState, useEffect, useRef } from "react";

const Arrows = () => {
  const gridRef = useRef<HTMLDivElement>(null);



  const rotateWithMouse = (e: any, elt: any) => {
    const rect = elt.getBoundingClientRect();
    const center_x = rect.left + rect.width / 2;
    const center_y = rect.top + rect.height / 2;
    const mouse_x = e.clientX;
    const mouse_y = e.clientY;
    const radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    const degree = radians * (180 / Math.PI) * -1 + (180 + 135) - 360;
    elt.style.transform = `rotate(${degree}deg) scale(0.95)`;
  };

  const resetArrows = () => {
    const arrows = gridRef.current?.querySelectorAll(".arrow");
    arrows?.forEach((arrow) => {
      // @ts-ignore
      arrow.style.transform = "rotate(0) scale(1)";
    });
  };

  useEffect(() => {
    const grid = gridRef.current;

    const handleMouseMove = (e : any) => {
      const arrows = grid?.querySelectorAll(".arrow");
      // @ts-ignore
      arrows.forEach((arrow) => {
        rotateWithMouse(e, arrow);
      });
    };

    const handleMouseEnter = () => {
      grid?.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      grid?.removeEventListener("mousemove", handleMouseMove);
      resetArrows();
    };

    grid?.addEventListener("mouseenter", handleMouseEnter);
    grid?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid?.removeEventListener("mouseenter", handleMouseEnter);
      grid?.removeEventListener("mouseleave", handleMouseLeave);
      grid?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
const [tooltip, setTooltip] = useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };
  
  return (
  <div className="relative">
      <div className={`poster `}>
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
     
     <div id="grid" ref={gridRef}>
       {Array(36)
         .fill( null )
         .map((_, index) => (
           <div
             key={index}
             className={`arrow ${index === 0 || index === 35 ? "alt" : ""}`}
           />
         ))}
     </div>
   </div>
  </div>
  );
};

export default Arrows;
const   code=`"use client";
import React, { useState, useEffect, useRef } from "react";

const Arrows = () => {
  const gridRef = useRef<HTMLDivElement>(null);



  const rotateWithMouse = (e: any, elt: any) => {
    const rect = elt.getBoundingClientRect();
    const center_x = rect.left + rect.width / 2;
    const center_y = rect.top + rect.height / 2;
    const mouse_x = e.clientX;
    const mouse_y = e.clientY;
    const radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    const degree = radians * (180 / Math.PI) * -1 + (180 + 135) - 360;
    
    elt.style.transform = \`rotate(dgreee deg) scale(0.95)\`;
  };

  const resetArrows = () => {
    const arrows = gridRef.current?.querySelectorAll(".arrow");
    arrows?.forEach((arrow) => {
      // @ts-ignore
      arrow.style.transform = "rotate(0) scale(1)";
    });
  };

  useEffect(() => {
    const grid = gridRef.current;

    const handleMouseMove = (e : any) => {
      const arrows = grid?.querySelectorAll(".arrow");
      // @ts-ignore
      arrows.forEach((arrow) => {
        rotateWithMouse(e, arrow);
      });
    };

    const handleMouseEnter = () => {
      grid?.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      grid?.removeEventListener("mousemove", handleMouseMove);
      resetArrows();
    };

    grid?.addEventListener("mouseenter", handleMouseEnter);
    grid?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid?.removeEventListener("mouseenter", handleMouseEnter);
      grid?.removeEventListener("mouseleave", handleMouseLeave);
      grid?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={"poster"}>
     
      <div id="grid" ref={gridRef}>
        {Array(36)
          .fill( null )
          .map((_, index) => (
            <div
              key={index}
              "{index === 0 || index === 35"
              className={\`arrow $ ? "alt" : ""}\`}
            />
          ))}
      </div>
    </div>
  );
};

export default Arrows;
// /* Poster styles */
// .poster {
//     width: 100%;
//     height: 884px;
//     margin: 40px auto;
//     padding: 20px;
//     box-shadow: 0 0 3px 0 rgba(0,0,0,0.2);
//     overflow: hidden;
//     position: relative;
//   }
  
//   /* Info section styles */
//   #info {
//     margin-top: 25px;
//     border-top: 1px solid #dfe2d9;
//     padding: 15px 10px 20px 10px;
//     display: flex;
//     min-height: 140px;
//     cursor: pointer;
//   }
  
//   #info h1, #info p {
//     color: #dfe2d9;
//     font-size: 11px;
//     margin: 0 10px;
//   }
  
//   #info h1 {
//     font-size: 36px;
//     letter-spacing: 1.3px;
//   }
  
//   /* Grid styles */
//   #grid {
//     position: absolute;
//     bottom: 0;
//     display: grid;
//     grid-template-columns: repeat(6, 1fr);
//     grid-gap: 10px;
//     padding: 20px;
//   }
  
//   .arrow {
//     background-color: #a3248f;
//     width: 90px;
//     height: 90px;
//     clip-path: polygon(0% 25%, 0% 100%, 75% 100%, 75% 75%, 45% 75%, 100% 19%, 81% 0%, 26% 55%, 26% 25%);
//     transition: all 0.2s linear;
//   }
  
//   .arrow:nth-child(5n+1):not(.alt) {
//     background-color: #dfe2d9;
//   }
  
//   #grid:hover .arrow {
//     box-shadow: inset 0 0 10px 0 rgba(0,0,0,0.4);
//   }
  
//   /* Animation */
//   @keyframes arrowSpin {
//     0%, 100% { clip-path: polygon(0% 25%, 0% 100%, 75% 100%, 75% 75%, 45% 75%, 100% 19%, 81% 0%, 26% 55%, 26% 25%); }
//     25% { clip-path: polygon(0% 75%, 0% 0%, 75% 0%, 75% 25%, 45% 25%, 100% 80%, 80% 100%, 25% 44%, 25% 75%); }
//     50% { clip-path: polygon(25% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 45%, 20% 100%, 0% 80%, 55% 25%, 25% 25%); }
//     75% { clip-path: polygon(0% 20%, 20% 0%, 75% 55%, 75% 25%, 100% 25%, 100% 100%, 25% 100%, 25% 75%, 55% 75%); }
//   }
  
//   /* Responsive adjustments */
//   @media (max-width: 640px) {
//     .poster {
//       width: 100%;
//       height: auto;
//       margin: 20px auto;
//     }
  
//     #grid {
//       position: relative;
//       grid-template-columns: repeat(3, 1fr);
//     }
  
//     .arrow {
//       width: 60px;
//       height: 60px;
//     }
//   }
  
  `
  
  