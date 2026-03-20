"use client";
import { useState, useEffect } from "react";

export default function ServicesHeroSection() {
  const fullText = "The 360 Approach";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
     <section
      className="relative min-h-[600px] md:min-h-[100vh] bg-cover bg-center flex items-center tm-symbol justify-start"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('/herosectionservice.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 w-full">
        <div className="max-w-2xl">
          {/* Heading with hover scale */}
          <h1 className="tm-symbol text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-syne transition-transform duration-300 hover:scale-105">
            {displayedText.split(" ").map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </h1>

          {/* Paragraph with subtle hover scale */}
          <p className="tm-symbol text-white  text-lg  lg:text-xl font-medium mb-8 max-w-lg leading-relaxed font-urbanist transition-transform duration-300 hover:scale-102">
            At 360 Medical, our services are built around a single objective:
            enhancing patient outcomes. Through innovative device solutions,
            streamlined workflows, and data-driven insights, we empower healthcare
            providers to elevate clinical performance, reduce complications, and
            strengthen overall care delivery. Our 360° approach creates measurable
            value at every touchpoint.
          </p>
        </div>
      </div>
    </section>
  );
}
