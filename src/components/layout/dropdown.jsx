"use client";

import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    desc: "Do the right thing always",
  },
  {
    title: "Compliance",
    desc: "Prioritize safety, transparency and standards over money.",
  },
  {
    title: "Compassion",
    desc: "Serve with heart. Heal with care",
  },
  {
    title: "Dynamic",
    desc: "Constantly improve, evolve, and adapt",
  },
  {
    title: "Supportive",
    desc: "Always provide the necessary support and a consistent quality",
  },
  {
    title: "Passionate",
    desc: "We love what we do and we're excited to get work everyday",
  },
];

export default function ValuesSection() {
  return (
    <section className="w-full bg-[#E9E9E9] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#3A3A3A] mb-6">
          Our values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="bg-black rounded-4xl px-4 py-6 text-left shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 194, 255, 0.2)",
              }}
            >
              <motion.h3 
                className="text-2xl font-bold text-[#00C2FF] mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {v.title}
              </motion.h3>
              <motion.p 
                className="text-gray-200 text-sm leading-relaxed"
                whileHover={{ color: "#ffffff" }}
              >
                {v.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}