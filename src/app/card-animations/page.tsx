import React from "react";
import animations from "../../../constants";
import AnimationCard from "@/components/animation-card";
import "../../styles/card-animations.css";
const page = () => {
  return (
    <div className="container py-10">
      {Object.keys(animations).map((key) => (
        <div className="grid gap-4 mt-8">
          <h2 data-aos="fade-right" className="text-2xl font-bold col-span-3 ">
            {animations[key].title}
          </h2>
          {animations[key].animations?.map((animation, i) => (
            <AnimationCard key={i} animation={animation} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default page;
