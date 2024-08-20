import Link from "next/link";
import "./globals.css";
import { buttons, homeCards } from "../../constants";
import AnimationCard from "@/components/animation-card";
import "../styles/card-animations.css";
import Button from "@/components/button";
import "../styles/button-animations.css";
import "aos/dist/aos.css";

export default function Home() {
  function getRandomElements(array: any[], count: number) {
    // Step 1: Shuffle the array
    const shuffledArray = array.sort(() => 0.5 - Math.random());

    // Step 2: Slice the first 'count' elements
    return shuffledArray.slice(0, count);
  }

  return (
    <main className="container pb-10">
      <div className="text-center md:mt-24 mt-10 mb-10">
        <h2 data-aos="fade-down" className="text-3xl font-bold">
          Your Go-To CSS <span>Animation</span> Guide
        </h2>
        <p data-aos="fade-up" className="mt-4 text-secondary">
          Welcome to CSS animations Hub! Discover a wide range of CSS animations
          and transitions.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="flex items-center justify-between col-span-4 mb-5">
          <h2 data-aos="fade-right" className="text-2xl font-bold ">
            Card Animations
          </h2>
          <Link data-aos="fade-left" href="/card-animations">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12V6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-6m-3.889-7H12m0 0v3.889M12 12l-7 7"
              ></path>
            </svg>
          </Link>
        </div>
        {homeCards.map((card, index) => (
          <AnimationCard key={index} animation={card} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="flex items-center justify-between col-span-4 mb-5">
          <h2 data-aos="fade-right" className="text-2xl font-bold">
            Button Animations
          </h2>
          <Link data-aos="fade-left" href="/button-animations">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12V6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-6m-3.889-7H12m0 0v3.889M12 12l-7 7"
              ></path>
            </svg>
          </Link>
        </div>
        {getRandomElements(Array.from(Array(buttons.length).keys()), 8).map(
          (num) => {
            const button = buttons[num];
            return <Button key={num} index={num} button={button} />;
          }
        )}
      </div>
    </main>
  );
}
