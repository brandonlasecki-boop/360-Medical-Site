"use client";

import { motion } from "framer-motion";

export default function ProductVideoSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-[#004753] to-gray-900 overflow-hidden">
    <div className="container mx-auto px-4 md:px-20 relative z-10">
       
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
                <source src="/endolumikVideo.mp4" type="video/mp4" />
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

         
        </motion.div>
      </div>
    </section>
  );
}
