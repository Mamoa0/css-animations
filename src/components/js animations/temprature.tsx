"use client";
import React, { useEffect, useRef, useState } from "react";
const Temprature = () => {
  const [temperature, setTemperature] = useState(0);
  const [progress, setProgress] = useState(100);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<any>(null);
  const random = (min = 0, max = 100) => {
    return Math.random() * (max - min) + min;
  };

  const update = (offsetY = 0) => {
    if (!sliderRef.current) return;

    const sliderHeight = sliderRef.current.offsetHeight;
    const pos = Math.max(0, Math.min(sliderHeight - 20, offsetY));
    sliderRef.current.style.setProperty("--pos", `${pos}px`);

    const newProgress = Math.max(
      0,
      Math.min(100, 100 - (offsetY / sliderHeight) * 100)
    );
    setProgress(newProgress);
    setTemperature(Math.round(newProgress * 0.42));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (sliderRef.current) {
        const offsetY = random(0, sliderRef.current.offsetHeight - 20);
        update(offsetY);
      }
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePointerDown = () => {
    clearInterval(intervalRef.current);
  };

  const handlePointerMove = (e: any) => {
    if (e.buttons === 1) {
      // Check if the primary mouse button is pressed
      update(e.nativeEvent.offsetY);
    }
  };

  const handlePointerLeave = () => {
    clearInterval(intervalRef.current);
  };

  const [tooltip, setTooltip] = useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "").then(() => {
      setTooltip("Copied");
      setTimeout(() => setTooltip(""), 2000); // Reset tooltip after 2 seconds
    });
  };

  return (
    <div className="relative">
      <div className="absolute top-2 left-full z-50 ">
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
      <div className="device" style={{ "--progress": `${progress}%` } as any}>
        {" "}
        <div className="thermostat">
          <div className="glass-container">
            <div className="liquid">
              <div className="bg"></div>
              <div className="bubbles"></div>
            </div>
            <div className="glass"></div>
            <div className="glass-reflection"></div>
          </div>
          <div className="number">{temperature}</div>
          <div
            ref={sliderRef}
            className="slider"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Temprature;

const code = `"use client";
  import React, { useEffect, useRef, useState } from "react";
  
  const temprature = () => {
    const [temperature, setTemperature] = useState(0);
    const [progress, setProgress] = useState(100);
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<any>(null);
    const random = (min = 0, max = 100) => {
      return Math.random() * (max - min) + min;
    };
  
    const update = (offsetY = 0) => {
      if (!sliderRef.current) return;
  
      const sliderHeight = sliderRef.current.offsetHeight;
      const pos = Math.max(0, Math.min(sliderHeight - 20, offsetY));
      sliderRef.current.style.setProperty("--pos", \`${"pos"}px\`);
  
      const newProgress = Math.max(
        0,
        Math.min(100, 100 - (offsetY / sliderHeight) * 100)
      );
      setProgress(newProgress);
      setTemperature(Math.round(newProgress * 0.42));
    };
  
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        if (sliderRef.current) {
          const offsetY = random(0, sliderRef.current.offsetHeight - 20);
          update(offsetY);
        }
      }, 2000);
  
      return () => clearInterval(intervalRef.current);
    }, []);
  
    const handlePointerDown = () => {
      clearInterval(intervalRef.current);
    };
  
    const handlePointerMove = (e: any) => {
      if (e.buttons === 1) {
        // Check if the primary mouse button is pressed
        update(e.nativeEvent.offsetY);
      }
    };
  
    const handlePointerLeave = () => {
      clearInterval(intervalRef.current);
    };
    return (
      <div className="device" style={{ "--progress": \`${"progress"}%\` } as any}>
        {" "}
        <div className="thermostat">
          <div className="glass-container">
            <div className="liquid">
              <div className="bg"></div>
              <div className="bubbles"></div>
            </div>
            <div className="glass"></div>
            <div className="glass-reflection"></div>
          </div>
          <div className="number">{temperature}</div>
          <div
            ref={sliderRef}
            className="slider"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          ></div>
        </div>
      </div>
    );
  };
  
  export default temprature;
  
  ///////////////////////////////// css code /////////////////////////////////
  //   @supports (background: paint(houdini)) {
  //     @property --progress {
  //       syntax: "<percentage>";
  //       inherits: true;
  //       initial-value: 0%;
  //     }
    
  //     @property --x {
  //       syntax: "<percentage>";
  //       inherits: true;
  //       initial-value: 0%;
  //     }
    
  //     @property --y {
  //       syntax: "<percentage>";
  //       inherits: true;
  //       initial-value: 0%;
  //     }
  //   }
    
  //   :root {
  //     --c1: #00adff;
  //     --c2: #39d469;
  //     --c3: #ffeb00;
  //     --c4: #ff8100;
  //     --c5: #b50f0f;
    
  //     --surface: #fffeff;
  //     --on-surface: #636571;
  //     --outline: #000001;
  //     --background: #112;
  //     --v: 1;
  //   }
    
  //   .thermostat {
  //     height: 24vmin;
  //     width: 100%;
  //     display: grid;
  //     grid-template-columns: 1fr 1fr 1fr;
  //     gap: 1vmin;
  //     position: relative;
  //     place-items: center;
  //   }
    
  //   .liquid {
  //     position: absolute;
  //     inset: 0;
  //     border-radius: 10vmin;
  //     overflow: hidden;
  //     isolation: isolate;
  //   }
    
  //   .liquid .bg {
  //     position: absolute;
  //     inset: 0;
  //   }
    
  //   .liquid .bg:before,
  //   .liquid .bg:after {
  //     content: "";
  //     position: absolute;
  //     inset: 0;
  //     --gp: calc(100% - var(--progress));
  //     background: linear-gradient(
  //       to bottom,
  //       var(--c5) calc(5% - var(--gp)),
  //       var(--c4) calc(25% - var(--gp)),
  //       var(--c3) calc(50% - var(--gp)),
  //       var(--c2) calc(75% - var(--gp)),
  //       var(--c1) calc(100% - var(--gp))
  //     );
  //     transform: translateY(calc(100% - var(--progress)));
  //     animation: wave 1s linear infinite;
  //     transition: all 0.3s linear;
  //     filter: saturate(0.65);
  //   }
    
  //   .liquid .bg:after {
  //     transform: scaleX(-1) translateY(calc(100% - var(--progress)));
  //     opacity: 0;
  //     --o: 0.6;
  //     animation-delay: 0.55s;
  //   }
    
  //   @keyframes wave {
  //     from {
  //       opacity: var(--o, 1);
  //       clip-path: polygon(
  //         100% 100%,
  //         0% 100%,
  //         0% 27.83%,
  //         7.14% 28.61%,
  //         14.29% 28.98%,
  //         21.43% 28.9%,
  //         28.57% 28.4%,
  //         35.71% 27.49%,
  //         42.86% 26.22%,
  //         50% 24.65%,
  //         57.14% 22.86%,
  //         64.29% 20.95%,
  //         71.43% 19%,
  //         78.57% 17.12%,
  //         85.71% 15.4%,
  //         92.86% 13.92%,
  //         100% 12.77%
  //       );
  //     }
    
  //     25% {
  //       clip-path: polygon(
  //         100% 100%,
  //         0% 100%,
  //         0% 17.77%,
  //         7.14% 16.02%,
  //         14.29% 14%,
  //         21.43% 11.82%,
  //         28.57% 9.58%,
  //         35.71% 7.4%,
  //         42.86% 5.38%,
  //         50% 3.63%,
  //         57.14% 2.23%,
  //         64.29% 1.26%,
  //         71.43% 0.76%,
  //         78.57% 0.76%,
  //         85.71% 1.26%,
  //         92.86% 2.23%,
  //         100% 3.63%
  //       );
  //     }
    
  //     50% {
  //       clip-path: polygon(
  //         100% 100%,
  //         0% 100%,
  //         0% 2.21%,
  //         7.14% 1.34%,
  //         14.29% 0.93%,
  //         21.43% 1.01%,
  //         28.57% 1.58%,
  //         35.71% 2.6%,
  //         42.86% 4.03%,
  //         50% 5.8%,
  //         57.14% 7.81%,
  //         64.29% 9.97%,
  //         71.43% 12.16%,
  //         78.57% 14.28%,
  //         85.71% 16.22%,
  //         92.86% 17.88%,
  //         100% 19.19%
  //       );
  //     }
    
  //     to {
  //       opacity: var(--o, 1);
  //       clip-path: polygon(
  //         100% 100%,
  //         0% 100%,
  //         0% 31.33%,
  //         7.14% 32.11%,
  //         14.29% 32.48%,
  //         21.43% 32.4%,
  //         28.57% 31.9%,
  //         35.71% 30.99%,
  //         42.86% 29.72%,
  //         50% 28.15%,
  //         57.14% 26.36%,
  //         64.29% 24.45%,
  //         71.43% 22.5%,
  //         78.57% 20.62%,
  //         85.71% 18.9%,
  //         92.86% 17.42%,
  //         100% 16.27%
  //       );
  //     }
  //   }
    
  //   @keyframes b1 {
  //     from {
  //       --x: 50%;
  //       --y: 60%;
  //       opacity: 0;
  //     }
    
  //     50% {
  //       --x: 60%;
  //       --y: 45%;
  //       opacity: 1;
  //       transform: scale(1.1);
  //     }
    
  //     to {
  //       --x: 50%;
  //       --y: 30%;
  //       opacity: 0;
  //     }
  //   }
    
  //   @keyframes b2 {
  //     from {
  //       --x: 50%;
  //       --y: 80%;
  //       opacity: 0;
  //     }
    
  //     50% {
  //       --x: 10%;
  //       --y: 55%;
  //       opacity: 1;
  //       transform: scale(1.1);
  //     }
    
  //     to {
  //       --x: 60%;
  //       --y: 30%;
  //       opacity: 0;
  //     }
  //   }
    
  //   @supports (background: paint(houdini)) {
  //     .bubbles {
  //       position: absolute;
  //       inset: 0;
  //     }
    
  //     .bubbles:before {
  //       content: "";
  //       position: absolute;
  //       inset: 0;
  //       --x: 50%;
  //       --y: 80%;
  //       background: radial-gradient(
  //             0.02vmin at var(--x) var(--y),
  //             hsla(0, 0%, 100%, 0.8) 0.2vmin,
  //             transparent 0.4vmin,
  //             transparent
  //           )
  //           center center no-repeat,
  //         radial-gradient(
  //             0.03vmin at calc(var(--x) * 1.9) calc(var(--y) * 1.9),
  //             hsla(0, 0%, 100%, 0.8) 0.2vmin,
  //             transparent 0.4vmin,
  //             transparent
  //           )
  //           center center no-repeat;
  //       mix-blend-mode: soft-light;
  //       animation: b2 linear 3.5s infinite;
  //     }
    
  //     .bubbles:after {
  //       content: "";
  //       position: absolute;
  //       inset: 0;
  //       --x: 30%;
  //       --y: 60%;
  //       background: radial-gradient(
  //             0.02vmin at var(--x) var(--y),
  //             hsla(0, 0%, 100%, 0.1) 0.1vmin,
  //             transparent 0.4vmin,
  //             transparent
  //           )
  //           center center no-repeat,
  //         radial-gradient(
  //             0.03vmin at calc(var(--x) * 1.2) calc(var(--y) * 1.5),
  //             hsla(0, 0%, 100%, 0.1) 0.1vmin,
  //             transparent 0.4vmin,
  //             transparent
  //           )
  //           center center no-repeat;
  //       mix-blend-mode: soft-light;
  //       animation: b1 linear 6s infinite;
  //     }
  //   }
    
  //   .glass {
  //     position: absolute;
  //     inset: 0;
  //     background: rgba(0, 0, 0, 0.1);
  //     border-radius: 10vmin;
  //   }
    
  //   .glass-container {
  //     height: 24vmin;
  //     width: 6vmin;
  //     border-radius: 10vmin;
  //     position: relative;
  //     border: 0.1vmin solid hsla(0, 0%, 100%, 0.2);
  //     box-shadow: -1px 0.1vmin 0 1px hsla(0, 0%, 100%, 0.5),
  //       1px 0.1vmin 0 1px hsla(0, 0%, 100%, 0.2);
  //   }
    
    
  //   .glass-reflection {
  //     pointer-events: none;
  //     mix-blend-mode: overlay;
  //     position: absolute;
  //     border-radius: 10vmin;
  //     overflow: hidden;
  //     inset: 0;
  //   }
    
  //   .glass-reflection:before {
  //     content: "";
  //     position: absolute;
  //     inset: 0;
  //     background: linear-gradient(
  //           to right,
  //           hsla(0, 0%, 100%, 0.5),
  //           hsla(0, 0%, 100%, 0.5)
  //         )
  //         no-repeat,
  //       linear-gradient(to right, hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0.1))
  //         no-repeat;
  //     background-size: 0.5vmin 19vmin, 1.8vmin 21vmin;
  //     background-position: 1vmin 3vmin, 3vmin 2vmin;
  //     filter: blur(0.4vmin);
  //   }
    
  //   .glass-reflection:after {
  //     content: "";
  //     position: absolute;
  //     inset: 0;
  //     background: radial-gradient(
  //         4vmin 14vmin at 1vmin 20%,
  //         hsla(0, 0%, 100%, 0.3) 10%,
  //         transparent 50%,
  //         transparent
  //       ),
  //       radial-gradient(
  //         2vmin 2vmin at 2vmin 5%,
  //         hsla(0, 0%, 100%, 0.9),
  //         transparent,
  //         transparent
  //       ),
  //       radial-gradient(
  //         7vmin 7vmin at 2vmin 5%,
  //         hsla(0, 0%, 100%, 0.9),
  //         transparent,
  //         transparent
  //       );
  //   }
    
  //   .number {
  //     font-size: 7vmin;
  //     font-weight: bold;
  //     color: #e8eaec;
  //     position: relative;
  //     font-variant-numeric: tabular-nums;
  //   }
    
  //   .number:after {
  //     content: "°";
  //     position: absolute;
  //   }
    
  //   .slider {
  //     place-self: center;
  //     --gp: calc(100% - var(--progress));
  //     --pos: 0px;
  //     background:white;
  //     box-shadow: -0.1vmin 0 0 0.1vmin hsla(0, 0%, 0%, 0.08);
  //     width: 0.1vmin;
  //     border-radius: 1vmin;
  //     height: 20vmin;
  //     position: relative;
  //   }
    
  //   .slider:before {
  //     content: "";
  //     position: absolute;
  //     inset: -1vmin -2vmin;
  //   }
    
  //   .slider:after {
  //     content: "";
  //     position: absolute;
  //     top: calc(10vmin * var(--gp) / 100);
  //     width: 3vmin;
  //     height: 3vmin;
  //     background: radial-gradient(30% 30% at 50% 50%, white, transparent),
  //       radial-gradient(70% 70% at 50% 50%, #f6f0f0, #bfc1cd), white;
  //     border-radius: 50%;
  //     transform: translate(-50%, var(--pos, 0));
  //     border-left: 0.1vmin solid white;
  //   }
    
  //   .device {
  //     background: transparent;
  //     width: 25svmin;
  //     aspect-ratio: 3 / 5.5;
  //     border-radius: 4vmin;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     justify-content: center;
  //     gap: 2.5vmin;
  //     --progress: 100%;
  //     transform: scale(1.5);
  //   }
    
    `;
