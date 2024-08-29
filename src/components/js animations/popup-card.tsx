"use client";
import React from "react";

const PopupCard = () => {
    const [showPopup, setShowPopup] = React.useState(false);
  const [tooltip, setTooltip] = React.useState("");  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };
  

  return (
   <div className="relative">
     <div className="absolute bottom-full left-1/2 -translate-x-1/2 ">
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
     <div className={`card ${showPopup ? "active" : ""}`}>
      <div className="content">
        <div className="contentBx">
          <h2>
            paul smith
            <br />
            <span>creative developer</span>
          </h2>
          <div className="imgBx">
            <img alt="img" src="/person.jpg" />
          </div>
          <button>hire me</button>
        </div>
      </div>
      <div className="toggle" onClick={() => setShowPopup(!showPopup)}>
        <span></span>
      </div>
    </div>
   </div>
  );
};

export default PopupCard;

const   code= `"use client";
import React from "react";

const PopupCard = () => {
    const [showPopup, setShowPopup] = React.useState(false);
  return (
    <div className={\`card ${"showPopup" ? "active" : ""}\`}>
      <div className="content">
        <div className="contentBx">
          <h2>
            paul smith
            <br />
            <span>creative developer</span>
          </h2>
          <div className="imgBx">
            <img alt="img" src="/person.jpg" />
          </div>
          <button>hire me</button>
        </div>
      </div>
      <div className="toggle" onClick={() => setShowPopup(!showPopup)}>
        <span></span>
      </div>
    </div>
  );
};

export default PopupCard;


// css code
//@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');



// .card {
//     position: relative;
//     width: 350px;
//     height: 85px;
//     background: #192a56;
//     border-radius: 20px;
//     transition: 0.5s;
//     /* reload and go to html */
// }

// .toggle {
//     position: absolute;
//     width: 70px;
//     height: 60px;
//     background: #192a56;
//     bottom: -60px;
//     left: 50%;
//     transform: translateX(-50%);
//     border-bottom-left-radius: 35px;
//     border-bottom-right-radius: 35px;
//     cursor: pointer;
//     /* reload and take a look at the example */
// }

// .toggle:before {
//     content: "";
//     position: absolute;
//     width: 35px;
//     height: 35px;
//     background: transparent;
//     left: -34px;
//     border-top-right-radius: 35px;
//     box-shadow: 11px -10px 0 10px #192a56;
//      /* reload */
// } 

// .toggle:after {
//     content: "";
//     position: absolute;
//     width: 35px;
//     height: 35px;
//     background: transparent;
//     right: -34px;
//     border-top-left-radius: 35px;
//     box-shadow: -11px -10px 0 10px #192a56;
//     /* reload */
// }

// .toggle span {
//     position: absolute;
//     width: 10px;
//     height: 10px;
//     border-bottom: 3px solid #fff;
//     border-right: 3px solid #fff;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -70%) rotate(45deg);
//     transition: 0.5s;
//     /* reload */
// }

// .card.active .toggle span {
//     transform: translate(-50%, -70%) rotate(225deg);
//     /* reload */
// }

// .card.active {
//     height: 420px;
//     /* reload and go to html */
// }

// .content {
//     position: absolute;
//     inset: 0;
//     overflow: hidden;
// }

// .content .contentBx {
//     position: relative;
//     padding: 20px;
//     text-align: center;
//     z-index: 10;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;

// }

// .content .contentBx h2 {
//     color: #fff;
//     font-weight: 500;
//     font-size: 1.25em;
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//     line-height: 1.1em;
// }

// .content .contentBx h2 span {
//     font-size: 0.75em;
//     font-weight: 400;
//     text-transform: capitalize;
//     /* reload and go to html */
// }

// .imgBx {
//     position: relative;
//     width: 250px;
//     height: 250px;
//     /* background: #fff; */
//     /* reload and go to the content Bx div */
//     margin-top: 20px;
//     box-shadow: -10px 10px 10px rgba(0,0,0, 0.15);
//     border: 5px solid #fff;
//     /* reload and go to html */
// }

// .imgBx img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     /* reload and go to html */
// }

// .content button {
//     position: relative;
//     margin-top: 20px;
//     padding: 10px 35px;
//     border-radius: 25px;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     font-size: 1em;
//     text-transform: uppercase;
//     letter-spacing: 0.1em;
//     font-weight: 500;
//     background-color:white ;
//     color: #192a56;
//     box-shadow: -10px 10px 10px rgba(0,0,0, 0.15);   
// }
`