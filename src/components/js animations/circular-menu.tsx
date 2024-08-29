" use client";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { IoKey } from "react-icons/io5";

const CircularMenu = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [tooltip, setTooltip] = React.useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };

  return (
    <div className="relative">
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
      <div className={`menu-container ${showMenu ? "active" : ""}`}>
        <div className="toggle-menu" onClick={() => setShowMenu(!showMenu)}>
          <IoAdd />
        </div>
        <ul className="menu">
          <li style={{ "--i": 1 } as any}>
            <span onClick={() => setShowMenu(false)}>
              <FaHome />
            </span>
          </li>
          <li style={{ "--i": 2 } as any}>
            {" "}
            <span onClick={() => setShowMenu(false)}>
              <FaCamera />
            </span>
          </li>
          <li style={{ "--i": 3 } as any}>
            <span onClick={() => setShowMenu(false)}>
              <IoPersonSharp />
            </span>
          </li>
          <li style={{ "--i": 4 } as any}>
            <span onClick={() => setShowMenu(false)}>
              <IoMdAirplane />
            </span>
          </li>
          <li style={{ "--i": 5 } as any}>
            <span onClick={() => setShowMenu(false)}>
              <IoMailSharp />{" "}
            </span>
          </li>
          <li style={{ "--i": 6 } as any}>
            <span onClick={() => setShowMenu(false)}>
              <IoKey />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CircularMenu;

const code = `
"use client";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { IoKey } from "react-icons/io5";

const CircularMenu = () => {
const [showMenu, setShowMenu] = React.useState(false);
return (
<div className=\`menu-container ${"showMenu" ? "active" : ""}\`}>
<div className="toggle-menu" onClick={() => setShowMenu(!showMenu)}>
  <IoAdd />
</div>
<ul className="menu">
  <li style={{ "--i": 1 } as any}>
    <a href="#">
      <FaHome />
    </a>
  </li>
  <li style={{ "--i": 2 } as any}>
    {" "}
    <a href="#">
      <FaCamera />
    </a>
  </li>
  <li style={{ "--i": 3 } as any}>
    <a href="#">
      <IoPersonSharp />
    </a>
  </li>
  <li style={{ "--i": 4 } as any}>
    <a href="#">
      <IoMdAirplane />
    </a>
  </li>
  <li style={{ "--i": 5 } as any}>
    <a href="#">
      <IoMailSharp />{" "}
    </a>
  </li>
  <li style={{ "--i": 6 } as any}>
    <a href="#">
      <IoKey />
    </a>
  </li>
</ul>
</div>
);
};

export default CircularMenu;
////////////////////////////////// css code //////////////////////////////////
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


// .menu-container {
// 	width: 270px;
// 	height: 270px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	position: relative;
// }

// .toggle-menu {
// 	width: 70px;
// 	height: 70px;
// 	background: #fff;
// 	border-radius: 50%;
// 	color: #222;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	font-size: 30px;
// 	cursor: pointer;
// 	z-index: 20;
// 	transition: 0.3s;
// }

// .container.active .toggle-menu {
// 	transform: rotate(45deg);
// }

// .container .menu {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// }

// .menu li {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	pointer-events: none;
// 	transform: rotate(calc(360deg / 6 * var(--i)));

// }

// .menu li a {
// 	width: 55px;
// 	height: 55px;
// 	color: #222;
// 	background: #fff;
// 	border-radius: 50%;
// 	font-size: 22px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	pointer-events: visible;
// 	transition: 0.3s;
// }

// .menu-container.active .menu li a {
// 	top: 0;
// 	transform: translate(-50%, -50%) rotate(calc(-360deg / 6 * var(--i)))
// }`;
