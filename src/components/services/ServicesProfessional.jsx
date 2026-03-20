"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: "/servicesIcon.png",
    title: "licensed tissue bank",
    description:
      "Strategic insights and solutions to enhance healthcare operational efficiency.",
  },
  {
    icon: "/servicesIcon2.png",
    title: "wound care solutions",
    description:
      "Offering a diverse range of high-quality medical products globally.",
  },
  {
    icon: "/servicesIcon3.png",
    title: "molecular lab diagnostics",
    description:
      "Precise, timely molecular diagnostics to inform healthcare decisions.",
  },
  {
    icon: "/servicesIcon3.png",
    title: "medical products",
    description:
      "Offering a diverse range of high-quality medical products globally.",
  },
  {
    icon: "/servicesIcon2.png",
    title: "licensed tissue bank",
    description:
      "Adheres to high standards, supporting medical and research advancements.",
  },
  {
    icon: "/servicesIcon.png",
    title: "data analytics",
    description:
      "Adheres to high standards, supporting medical and research advancements.",
  },
];

const ServicesProfessional = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        Professional services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto tm-symbol">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: (index % 3) * 0.18, // 👈 SAME WAVE EFFECT
              },
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative bg-[linear-gradient(135deg,_#121212,__#000000)] 
                       border border-gray-800 hover:border-cyan-400 
                       transition-all duration-300 rounded-xl p-10 
                       flex flex-col gap-4 
                       hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
          >
            {/* Top icons */}
            <div className="flex justify-between items-start tm-symbol">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="text-cyan-400"
              />
              <Image
                src="/blueArrow.png"
                alt="arrow"
                width={12}
                height={12}
                className="text-cyan-400"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold tm-symbol">{service.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesProfessional;
