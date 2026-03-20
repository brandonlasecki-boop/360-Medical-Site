"use client";

import { motion } from "framer-motion";

export default function CareerCultureSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-syne">
            Culture built on impact
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-urbanist">
            We move fast, stay curious, and care deeply about the people we
            serve. Our teams blend clinical insight with operational precision
            to deliver solutions that truly improve care.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-semibold text-gray-900 mb-1">Mission-first</p>
              <p>Every decision ties back to better patient outcomes.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-semibold text-gray-900 mb-1">Team-oriented</p>
              <p>We solve hard problems together, not in silos.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-semibold text-gray-900 mb-1">Growth mindset</p>
              <p>Continuous learning is built into how we work.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-semibold text-gray-900 mb-1">Patient empathy</p>
              <p>We design for the people behind every case.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <img
            src="/girlDr.png"
            alt="Team collaboration"
            className="w-full h-80 md:h-[420px] object-cover rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
