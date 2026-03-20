"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CareerCTASection() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-200"
      >
        <div
          className="p-8 md:p-12 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,151,178,0.95), rgba(0,71,83,0.95))",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Ready to build the future of care?
          </h2>
          <p className="text-white/90 text-base md:text-lg font-urbanist mb-6">
            Share your experience and we’ll match you with the right team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors"
          >
            Start the conversation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
