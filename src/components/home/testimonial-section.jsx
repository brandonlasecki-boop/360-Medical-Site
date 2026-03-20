"use client";

import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Animated Outer Card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.97 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" }
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl p-[6px] bg-gradient-to-b from-[#858585] to-black"
        >
          <div className="rounded-3xl p-12 md:p-16 bg-black">
            <div className="grid md:grid-cols-2 gap-x-28 items-center">

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
                }}
                viewport={{ once: true }}
                className="flex flex-col justify-between"
              >
                <h2 className="text-4xl md:text-4xl font-bold text-white mb-8 leading-tight transition-transform duration-300 hover:scale-105">
                  Pioneering the future of
                  <br />
                  healthcare innovation
                </h2>

                <div className="md:flex md:items-start gap-6 mb-8">
                  {/* Doctor Profile */}
                  <div className="flex-shrink-0">
                    <img
                      src="/girlDr.png"
                      alt="Doctor"
                      className="md:w-25 w-25 md:h-35 h-35 m-auto rounded-full object-cover border-2 border-cyan-400 transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed transition-transform duration-300 hover:scale-102">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nunc vulputate florma at vide mid cum, at
                      vinde ornare sed tribuere laoreet per conubia.
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <button className="bg-white rounded-full p-2.5 transition-transform duration-300 hover:scale-105">
                        <img src="/Arrow.png" alt="" className="w-3.5 h-3.5" />
                      </button>

                      <button className="ml-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-transform duration-300 hover:scale-105">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Image (Surgery Image) */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
                }}
                viewport={{ once: true }}
                className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/HomeTestimonial.png"
                  alt="Surgery"
                  className="w-105 h-70 object-cover rounded-2xl"
                />
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
