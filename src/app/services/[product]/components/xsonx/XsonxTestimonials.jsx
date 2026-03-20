//src/app/services/[product]/components/xsonx/XsonxTestimonials.jsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "A reliable, efficient, and cost-effective solution that fits perfectly in our clinical workflows.",
    name: "Dr. Michael Brown",
    title: "Chief Surgeon",
  },
  {
    quote: "Sonic vibrations loosen slough and biofilms with less pain and greater effectiveness than gauze alone.",
    name: "James McGuire",
    title: "DPM, LPT, CPed",
  },
  {
    quote: "Finally, a new helpful tool to painlessly and easily remove slough from any wound.",
    name: "Erik Maus",
    title: "MD, Medical Director of Wound Care",
  },
  {
    quote: "XSONX® has completely changed how we manage chronic wounds. Patients experience less discomfort.",
    name: "Dr. Anna Lee",
    title: "Wound Care Specialist",
  },
];

const XsonxTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-swap every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#0097B2] to-[#004753] bg-clip-text text-transparent">
          Testimonials
        </h2>

        <div className="relative flex items-center justify-center gap-20">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-[#0097B2] hover:text-[#004753] transition-colors"
          >
            <ChevronLeft className="w-12 h-12" strokeWidth={2} />
          </button>

          {/* Testimonial Content */}
          <div className="flex-1 max-w-3xl relative h-56">
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-0 left-0 w-full text-center"
              >
                <p className="text-2xl italic text-gray-800 mb-8 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <p className="text-xl font-bold text-[#0097B2] mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-base text-gray-600">
                  {testimonials[currentIndex].title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-[#0097B2] hover:text-[#004753] transition-colors"
          >
            <ChevronRight className="w-12 h-12" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default XsonxTestimonials;
