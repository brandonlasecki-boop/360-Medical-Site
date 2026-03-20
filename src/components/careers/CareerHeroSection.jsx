"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareerHeroSection() {
  const fullText = "Careers at 360 Medical";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index += 1;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[600px] md:min-h-[100vh] bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.25)), url('/teamheroimage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-syne">
            {displayedText.split(" ").map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-lg lg:text-xl font-medium mb-8 max-w-2xl leading-relaxed font-urbanist"
          >
            360 Medical is committed to advancing healthcare through innovative solutions, clinical expertise, and strong partnerships with physicians and healthcare systems.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            {/* <a
              href="#open-roles"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors font-urbanist"
            >
              View Open Roles
            </a> */}
            {/* <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors font-urbanist"
            >
              Contact Recruiting
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
