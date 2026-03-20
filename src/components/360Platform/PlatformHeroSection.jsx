"use client";
import { useState, useEffect } from "react";

export default function PlatformHeroSection() {
  const fullText = "Advanced Wound Care Products";
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
      className="relative min-h-[500px] bg-cover bg-center flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: "url('/image%207.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
           {/* Layered image with vignette mask */}
<img
  src="/edited2.png"
  alt=""
  aria-hidden="true"
  className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
  style={{
    // filter:
    //   "saturate(2) contrast(2) brightness(0.7) hue-rotate(-30deg)",
    maskImage: `
      radial-gradient(
        circle at 100% 150%,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0.4) 45%,
        rgba(0,0,0,0.9) 65%,
        rgba(0,0,0,1) 100%
      )
    `,
    WebkitMaskImage: `
      radial-gradient(
        ellipse at 150% 50%,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0.4) 45%,
        rgba(0,0,0,0.8) 65%,
        rgba(0,0,0,1) 100%
      )
    `,
  }}
/>
      {/* blue left gradient overlay */}
     
   
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      linear-gradient(
        to left,
        rgba(0, 123, 255, 0.2),
        rgba(0, 123, 255, 0),
        rgba(0, 123, 255, 0)
      )
    `,
  }}
/>

      {/* Black gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 w-full">
        <div className="max-w-2xl">
          {/* Heading with hover scale */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-syne transition-transform duration-300 hover:scale-105">
            {displayedText.split(" ").map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </h1>

          {/* Paragraph with subtle hover scale */}
          <p className="text-white  text-lg  lg:text-xl font-medium mb-8 max-w-lg leading-relaxed font-urbanist transition-transform duration-300 hover:scale-102">
            Our revolutionary biologic products and services tailored for
enhanced wound care and superior patient outcomes.
          </p>

          
        </div>
      </div>
    </section>
  );
}
