
"use client";

import { motion } from "framer-motion";

export default function  AboutWhoWeAre () {
  return (
    <section
      className="relative py-25 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Rectangle 18.jpg')",
      }}
    >
      <div className="container mx-auto px-4 md:px-40">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-black text-balance"
        >
          we offer different services to <br />
          <span>improve your healthcare</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl p-4 md:p-18 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-[#0097B2] to-[#004753] relative overflow-hidden"
          // style={{
          //   backgroundImage: "url('/edited2.png')",
          // }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

          {/* Left content */}
          <div className="flex-1 relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-5"
            >
              who we are
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 mb-4 text-sm leading-relaxed"
            >
              At 360 Medical, we leverage advanced technology and deep industry
              knowledge to deliver exceptional medical products and services.
              Our team is committed to enhancing patient outcomes through
              innovative solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              viewport={{ once: true }}
              className="text-gray-200 mb-6 text-sm leading-relaxed"
            >
              At 360 Medical, we leverage advanced technology and deep industry
              knowledge to deliver exceptional medical products and services.
              Our team is committed to enhancing patient outcomes through
              innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <button className="bg-white text-blue-900 rounded-full p-3 hover:bg-gray-100 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Learn more
              </button>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 relative z-10 flex justify-center"
          >
            <img
              src="/whowho.jpg"
              alt="Medical team performing surgery"
              className="w-[80%] rounded-xl object-contain h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

