//src/app/services/[product]/components/xsonx/XsonxFutureWoundCare.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const XsonxFutureWoundCare = () => {
  return (
    <section className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* MAIN WRAPPER ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative rounded-3xl bg-gradient-to-r from-[#0097B2] to-[#004753] p-12 md:p-16 text-center"
        >

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Join the Future of Wound Care
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Explore how XSONX® can transform your wound care practices contacting us directly. 
            For more information or to schedule a free in-service, reach out to Care@NeoTissuebio.com.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mt-10"
          >
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-[#0097B2] to-[#018da6] text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default XsonxFutureWoundCare;
