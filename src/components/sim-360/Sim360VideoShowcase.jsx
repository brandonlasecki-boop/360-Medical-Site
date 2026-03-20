"use client";

import { motion } from "framer-motion";

export default function Sim360VideoShowcase() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-[#004753] to-gray-900 overflow-hidden">
    <div className="container mx-auto px-4 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Immersive Simulation Environment
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience our state-of-the-art virtual simulation spaces designed for comprehensive healthcare training
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0097B2]/30 hover:border-[#0097B2]/60 transition-all duration-500">
            {/* Video Container */}
            <div className="relative aspect-video bg-gray-950">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/sim360video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#0097B2] opacity-60"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#0097B2] opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#0097B2] opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#0097B2] opacity-60"></div>
          </div>

          {/* Info caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Our virtual simulation environments provide a realistic, controlled setting for healthcare professionals 
              to practice and refine their skills in a safe, immersive space.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
