"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const icons = {
  unmatched: (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <circle cx="4.5" cy="9.5" r="2" />
      <circle cx="19.5" cy="9.5" r="2" />
      <circle cx="6.5" cy="17" r="2" />
      <circle cx="17.5" cy="17" r="2" />
    </svg>
  ),
  reimbursement: (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9 10h6M9 14h6" />
    </svg>
  ),
  education: (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <line x1="16" y1="16" x2="21" y2="21" />
    </svg>
  ),
};

const ProductCTA = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* ICONS ROW */}        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 tm-symbol"
        >

          {/* ICON WRAPPER */}
          {[
            { icon: icons.unmatched, label: "UNMATCHED\nSELECTION" },
            { icon: icons.reimbursement, label: "REIMBURSEMENT\nSUPPORT" },
            { icon: icons.education, label: "EDUCATIONAL\nRESOURCES" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center text-center tm-symbol"
            >
              {/* CIRCLE */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-44 h-44 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#0097B2] to-[#004753] border-4 border-white shadow-lg"
              >
                <div className="absolute w-[92%] h-[92%] rounded-full border-2 border-white/70"></div>
                {item.icon}
                <p className="text-lg font-semibold mt-4 text-white whitespace-pre-line tm-symbol">
                  {item.label}
                </p>
              </motion.div>
            </motion.div>
          ))}

        </motion.div>

        {/* DESCRIPTION TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mt-12 text-gray-700 text-xl leading-relaxed tm-symbol"
        >
          Contact 360 Medical today to learn more about our advanced clinical and surgical solutions and how we can support your needs.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-[#0097B2] to-[#004753] text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductCTA;
