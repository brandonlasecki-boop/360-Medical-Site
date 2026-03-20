"use client";

import { motion } from "framer-motion";

export default function CareerCommitmentSection() {
  return (
    <section className="bg-white py-10 md:py-12 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-syne mb-4">
          Committed to advancing healthcare
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-urbanist mb-6">
          360 Medical is committed to advancing healthcare through innovative
          solutions, clinical expertise, and strong partnerships with physicians
          and healthcare systems.
        </p>
        <p className="text-gray-700 text-sm md:text-base font-urbanist">
          If you are interested in joining our team, please send your resume and
          a brief introduction to{" "}
          <a
            href="mailto:info@360medical.net"
            className="text-[#0097B2] font-semibold hover:underline"
          >
            info@360medical.net
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
}
