" use client";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { IoKey } from "react-icons/io5";
const DotsMenu = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [tooltip, setTooltip] = React.useState("Copy");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };

  return (
    <div className="relative md:mt-0 mt-5">
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
              tooltip
                ? "opacity-100 transition-opacity duration-300"
                : "opacity-0"
            } `}
          >
            {tooltip}
          </span>
        </button>
      </div>
      <div
        className={`navigation ${showMenu ? "active" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span style={{ "--i": 0, "--x": 0, "--y": 0 } as any}>
          <IoAdd className="icon" />
        </span>
        <span style={{ "--i": 1, "--x": 1, "--y": -1 } as any}>
          <FaCamera className="icon" />
        </span>
        <span style={{ "--i": 2, "--x": 1, "--y": 1 } as any}>
          <IoPersonSharp className="icon" />
        </span>
        <span style={{ "--i": 3, "--x": 0, "--y": 1 } as any}>
          <FaHome className="icon" />
        </span>
        <span style={{ "--i": 4, "--x": -1, "--y": 1 } as any}>
          <IoMdAirplane className="icon" />
        </span>
        <span style={{ "--i": 5, "--x": -1, "--y": -1 } as any}>
          <IoMailSharp className="icon" />
        </span>
        <span style={{ "--i": 6, "--x": 0, "--y": -1 } as any}>
          <IoKey className="icon" />
        </span>
        <span style={{ "--i": 7, "--x": -1, "--y": 0 } as any}>
          <FaCamera className="icon" />
        </span>
        <span style={{ "--i": 8, "--x": 1, "--y": 0 } as any}>
          <IoPersonSharp className="icon" />
        </span>
      </div>
    </div>
  );
};

export default DotsMenu;

const code = `
import React from "react";
import { IoAdd } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { IoKey } from "react-icons/io5";
const DotsMenu = () => {
const [showMenu, setShowMenu] = React.useState(false);
return (
<div className={\`navigation ${"showMenu" ? "active" : ""}\`}
onClick={() => setShowMenu(!showMenu)}
>
<span style={{ "--i": 0, "--x": 0, "--y": 0 } as any}>
  <IoAdd />
</span>
<span style={{ "--i": 1, "--x": 1, "--y": -1 } as any}>
  <FaCamera />
</span>
<span style={{ "--i": 2, "--x": 1, "--y": 1 } as any}>
  <IoPersonSharp />
</span>
<span style={{ "--i": 3, "--x": 0, "--y": 1 } as any}>
  <FaHome />
</span>
<span style={{ "--i": 4, "--x": -1, "--y": 1 } as any}>
  <IoMdAirplane />
</span>
<span style={{ "--i": 5, "--x": -1, "--y": -1 } as any}>
  <IoMailSharp />
</span>
<span style={{ "--i": 6, "--x": 0, "--y": -1 } as any}>
  <IoKey />
</span>
<span style={{ "--i": 7, "--x": -1, "--y": 0 } as any}>
  <FaCamera />
</span>
<span style={{ "--i": 8, "--x": 1, "--y": 0 } as any}>
  <IoPersonSharp />
</span>
</div>
);
};

export default DotsMenu;


// ///////////////////////// css code ////////////////////////
// .navigation {
//     position: relative;
//     width: 70px;
//     height: 70px;
//     background: #c22c15;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: 0.5s;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition-delay: 0.8s;
//   }

//   .navigation.active {
//     width: 200px;
//     height: 200px;
//     transition-delay: 0s;
//   }

//   .navigation span {
//     position: absolute;
//     width: 7px;
//     height: 7px;
//     background: #fff;
//     border-radius: 50%;
//     transform: translate(calc(14px * var(--x)), calc(14px * var(--y)));
//     transition: 0.5s;
//     transition-delay: calc(0.1s * var(--i));
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .navigation.active span {
//     transform: translate(calc(60px * var(--x)), calc(60px * var(--y)));
//     width: 45px;
//     height: 45px;
//     background-color: #0f296d;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .navigation span  icon {
//     font-size: 0em;
//     transition: 0.5s;
//   }

//   .navigation.active  icon {
//     font-size: 1.35em;
//     color: #fff;
//   }

//   .navigation.active span:hover  icon {
//     color: #f87966;
//   }`;
