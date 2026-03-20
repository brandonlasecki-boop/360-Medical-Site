//src/components/home/hero-section.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroSection() {
  const fullText = "Partnering For Better Patient Outcomes";
  const [displayedText, setDisplayedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section className="relative min-h-[600px] md:min-h-[100vh] flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/homeHeroVideos1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 w-full">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-syne text-white">
            {displayedText}
          </h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white  text-lg  lg:text-xl font-medium mb-8 max-w-2xl leading-relaxed font-urbanist"
          >
            Our mission is a 360-degree approach to healthcare by improving patient outcomes, supporting clinicians, enhancing operational efficiency, and expanding access to high-quality care- through integrated medical products, healthcare technology, and immersive education.
          </motion.p>

          {/* CTA Button */}
          {/* <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-transform font-urbanist"
          >
            360 Medical Quadruple Aim
          </motion.button> */}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/HomePopupImg.png"
              alt="360 Medical Quadruple Aim"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}