import React from "react";
import "../../styles/clip-path-animations.css";
import { clipPaths } from "@/constants/constants";
import ClipPath from "@/components/clip-path";
import Tringles from "@/components/clip-path animations/tringles";
import Circle from "@/components/clip-path animations/circle";
import Split from "@/components/clip-path animations/split";
import CircleImage from "@/components/clip-path animations/circle-image";
import Arrow from "@/components/clip-path animations/arrow";
import Text from "@/components/clip-path animations/Text";
const page = () => {
  return (
    <div className="container py-10">
      <h2
        data-aos="fade-right"
        className="md:text-2xl text-xl font-bold col-span-4 mb-5"
      >
        Clip Path Animations
      </h2>
      <div className="grid grid-cols-12">
        {clipPaths.map((cp, index) => (
          <ClipPath className={cp.className} key={index} code={cp.code} />
        ))}
      </div>

      <Tringles />
      <Circle />
      <Text />
      <Split />
      <CircleImage />
      <Arrow />
    </div>
  );
};

export default page;
