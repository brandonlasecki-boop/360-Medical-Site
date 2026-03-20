"use client";
import { useState, useEffect } from "react";

export default function Vault360HeroSection() {
  const fullText = "Vault360";
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
      className="relative min-h-[600px] md:min-h-[100vh] bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('/simheroimage.jpg')",
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
          <p className="text-white  text-lg  lg:text-xl font-medium mb-8 max-w-xl leading-relaxed font-urbanist transition-transform duration-300 hover:scale-102">
            Vault360 Technologies is a healthcare data protection partner focused on helping hospitals and healthcare systems safeguard sensitive patient information with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
