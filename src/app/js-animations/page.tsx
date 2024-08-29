"use client";
import React from "react";
import "../../styles/js-animations.css";
import AnimatedText from "@/components/js animations/animated-text";
import CircularMenu from "@/components/js animations/circular-menu";
import DotsMenu from "@/components/js animations/dots-menu";
import Temprature from "@/components/js animations/temprature";
import PopupCard from "@/components/js animations/popup-card";
import Arrows from "@/components/js animations/arrows";
const page = () => {
  return (
    <div className="container py-10">
      <h2 data-aos="fade-right" className="text-4xl font-bold mb-10">
        JS Animations
      </h2>
      <PopupCard />
      <Arrows />
      <div className="flex justify-center my-10">
        <AnimatedText text="Animated Text" />
      </div>
      <div className="flex justify-between md:flex-row flex-col items-center flex-wrap">
        <CircularMenu />
        <DotsMenu />
      </div>
      <div className="flex justify-center">
        <Temprature />
      </div>
    </div>
  );
};

export default page;
