"use client";
import { useState, useEffect } from "react";

export default function AboutHeroSection() {
  const fullText = "About Us";
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
      className="relative min-h-[600px] md:min-h-[100vh] bg-cover bg-center flex items-center justify-start "
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('/aboutheroimage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 w-full">
        <div className="max-w-2xl">
          {/* Heading with hover scale */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-syne transition-transform duration-300 hover:scale-105">
            {displayedText.split(" ").map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </h1>

          {/* Paragraph with subtle hover scale */}
          <p className="text-white  text-lg  lg:text-xl font-medium mb-8 max-w-lg leading-relaxed font-urbanist transition-transform duration-300 hover:scale-102">
            360 Medical partners with clinicians to elevate patient outcomes. We deliver best-in-class biologics and surgical technologies
          </p>

          
        </div>
      </div>
    </section>
  );
}
