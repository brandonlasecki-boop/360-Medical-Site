//src/app/services/[product]/components/xsonx/XsonxInfoBanner.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const XsonxInfoBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Delay to ensure stable mounting
    setShowBanner(true);
  }, []);

  return (
    <section className="w-full px-4 py-16">
      <AnimatePresence>
        {showBanner && (
          <motion.div
            className="max-w-6xl mx-auto bg-gradient-to-r from-[#0097B2] to-[#004753] rounded-3xl px-8 py-16 md:px-16 md:py-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-white text-center text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
              In response to the global wound care crisis, the XSONX® Wound Hygiene System offers a cutting-edge solution
              for effectively managing chronic and contaminated wounds. Combining advanced Vibrational Debridement
              Technology (VDT) with ease of use, this innovative tool significantly enhances the wound healing trajectory
              while ensuring patient comfort and cost-efficiency.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default XsonxInfoBanner;
