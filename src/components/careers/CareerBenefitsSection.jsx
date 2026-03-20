"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Purpose-driven work",
    description:
      "Build solutions that remove barriers to care and elevate outcomes.",
    icon: "/quality.png",
  },
  {
    title: "Growth & mentorship",
    description:
      "Learn from experienced healthcare leaders and grow your craft.",
    icon: "/support.png",
  },
  {
    title: "Operational excellence",
    description:
      "Be part of a team that values precision, compliance, and trust.",
    icon: "/stability.png",
  },
];

export default function CareerBenefitsSection() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-syne">
            Why join 360 Medical
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg font-urbanist">
            A team that balances innovation with accountability and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <img
                  src={benefit.icon}
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
