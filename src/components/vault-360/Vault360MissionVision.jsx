"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Vault360MissionVision() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Mission statement",
      description:
        "Our mission is to safeguard patient data and build trust in healthcare by delivering simple, secure, and compliant data protection solutions.",
      icon: <img src="/featureCardIcon1.png" alt="Mission Icon" />,
    },
    {
      id: 2,
      title: "Vision statement",
      description:
        "We believe in a healthcare ecosystem where patient data is protected and trust is built through strong, secure partnerships.",
      icon: <img src="/featureCardIcon1.png" alt="Vision Icon" />,
    },
  ];

  return (
    <section
      className="bg-white py-32 px-6 relative overflow-hidden "
      style={{
        backgroundImage: "url('/Rectangle 18.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={mounted ? { opacity: 0, y: 60, scale: 0.95 } : false}
              animate={mounted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
              whileInView={
                mounted
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.18,
                      },
                    }
                  : undefined
              }
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl px-7 py-5 cursor-pointer transition-all hover:scale-105 bg-[#F5F5F5] text-gray-900 border border-gray-200 duration-500 hover:bg-gradient-to-r from-[#0097B2] to-[#004753] hover:text-white"
            >
              <div className="mb-2 mt-2 flex">
                <img
                  {...card.icon.props}
                  className="w-10 h-10 md:w-12 md:h-12 mb-6 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-md">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
