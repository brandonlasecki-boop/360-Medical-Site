//src/app/services/[product]/components/ProductHero.jsx
"use client";
import { useState, useEffect } from "react";

const outpatientHeaderProducts = new Set([
  "membrane-wrap",
  "membrane-wrap-lite",
  "amchoplast",
  "dermacyte",
  "ultramist",
  "blazer-c-vertebral-augmentation-system",
  "endura-kt-local-anesthetic",
  "mugard-oral-mucoadhesive",
]);

export default function ProductHero({ product }) {
  const fullText = `${product.title}`;
  const [displayedText, setDisplayedText] = useState("");
  const heroImage = outpatientHeaderProducts.has(product.id)
    ? "/OutpatientHeaderImg.jpg"
    : "/vaultheroimage.jpg";

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
  }, [fullText]);

  return (
     <section
      className="relative min-h-[600px] md:min-h-[100vh] bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('${heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 w-full">
        <div className="max-w-2xl">
          {/* Heading with hover scale */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tm-symbol leading-tight font-syne transition-transform duration-300 hover:scale-105">
            {displayedText.split(" ").map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </h1>

          
        </div>
      </div>
    </section>
  );
}
