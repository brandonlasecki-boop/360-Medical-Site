"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Vault360CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0097B2] to-[#004753] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
      
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Protect Your Patient Data with Confidence
            </h2>
            <p className="text-gray-100 text-lg mb-10 max-w-2xl mx-auto">
              Partner with Vault360 Technologies to deliver simple, secure, and compliant data 
              protection solutions that safeguard sensitive patient information and build trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group px-8 py-4 bg-white text-[#0097B2] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
