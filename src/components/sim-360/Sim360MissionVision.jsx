"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Sim360MissionVision() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Mission Statement",
      description:
        "Our mission is to support healthcare education and patient safety through immersive, compliant, and hands-on simulation training delivered in partnership with trusted organizations.",
      icon: <img src="/featureCardIcon1.png" alt="Mission Icon" />,
    },
    {
      id: 2,
      title: "Vision Statement",
      description:
        "We envision a collaborative healthcare education ecosystem where simulation partners, educators, and healthcare organizations come together to deliver effective training that strengthens clinical confidence and improves patient outcomes.",
      icon: <img src="/featureCardIcon1.png" alt="Vision Icon" />,
    },
  ];

  return (
    <section
      className="bg-white py-32  px-6 relative overflow-hidden "
      style={{
        backgroundImage: "url('/Rectangle 18.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
        </div> */}

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
