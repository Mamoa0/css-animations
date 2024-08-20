import React from "react";
import { buttons } from "../../../constants";
import Button from "@/components/button";
import "../../styles/button-animations.css";
const page = () => {
  return (
    <div className="container py-10">
      <h2 data-aos="fade-right" className="text-2xl font-bold mb-5">Buttons Animations</h2>
      <div className="grid grid-cols-3 gap-5 ">
        {buttons.map((button, index) => (
          <Button key={index} button={button} index={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
