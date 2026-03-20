"use client";

import { motion } from "framer-motion";

export default function AboutTestimonialSection() {
  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-6  relative overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        
        {/* Outer gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl p-[4px] md:p-[6px] bg-gradient-to-b from-[#858585] to-black"
        >
          {/* Inner box */}
          <div className="rounded-3xl p-6 md:p-16 bg-black">
            <div className="flex flex-col justify-start">

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-snug md:leading-tight text-center"
              >
                Pioneering the future of healthcare
                <br />
                innovation
              </motion.h2>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-shrink-0 mb-8 md:mb-12"
              >
                <img
                  src="/aboutTesti2.png"
                  alt="Surgery"
                  className="w-full h-60 sm:h-72 md:h-95 object-cover object-top rounded-2xl"
                />
              </motion.div>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-10 md:mb-12 text-center md:text-left"
              >
                At 360 Medical, our purpose is simple: better patient outcomes. We partner with providers to remove barriers, strengthen clinical operations, and support every step of the care journey. When teams are supported and systems are aligned, more patients get the care they need and deserve. That's the future we're committed to creating.
              </motion.p>

              {/* Two Columns */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  },
                  hidden: { opacity: 0 }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed"
              >
                {/* Left List */}
                {/* <motion.ul
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.7 }}
                  className="list-disc list-inside space-y-2"
                >
                  <li>Patient-First Outcomes – Every decision starts with the patient and ends in measurable improvement.</li>
                  <li>Partner in Care – We stand shoulder-to-shoulder with providers, not across the table.</li>
                  <li>Evidence Over Hype – We recommend what the data and clinical experience support—nothing less.</li>
                  <li>Innovation with Purpose – Ingenuity and intelligent tech that solve real problems in the OR and clinic.</li>
                  <li>Education & Mastery (SIM360) – Training that turns good teams into great ones and great ones into experts.</li>
                </motion.ul> */}

                {/* Right List */}
                {/* <motion.ul
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.7 }}
                  className="list-disc list-inside space-y-2"
                >
                  <li>Speed & Reliability – Right product, right place, right time every time.</li>
                  <li>Integrity & Compliance – Ethical, transparent, and aligned with regulatory and contracting standards.</li>
                  <li>Value Stewardship – Better outcomes and better economics for hospitals, providers, and patients.</li>
                  <li>Accountability – We own results, celebrate wins, and fix gaps fast.</li>
                  <li>Respect & Inclusion – Every patient, provider, and teammate is treated with dignity and empathy.</li>
                </motion.ul> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
  
