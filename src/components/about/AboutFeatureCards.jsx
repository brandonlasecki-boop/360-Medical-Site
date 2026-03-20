"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutFeatureCards() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const features = [
    { 
      id: 1,
      title: "Our Mission",
      description:
        "Our mission is to deliver exceptional medical products and services that empower healthcare professionals and institutions to offer the best possible care to their patients.",
      icon: <img src="/featureCardIcon1.png" alt="Biologic Lab Integration Icon " />,
    },
    {
      id: 2,
      title: "Our Value",
      description:
        "Our commitment to integrity, collaboration, and innovation ensures excellence in every aspect of our operations, fostering trust and advancing healthcare outcomes.",
      icon: <img src="/featureCardIcon1.png" alt="Consignment Program Icon" />,
    },
    {
      id: 3,
      title: "Our Vision",
      description:
        "We are dedicated to innovation, quality, and reliability, ensuring that our clients have access to the latest and most effective medical solutions.",
      icon: <img src="/featureCardIcon1.png" alt="Online Physician Portal Icon" />,
    },
    // { 
    //   id: 4,
    //   title: "Integrity",
    //   description:
    //     "Do the right thing always",
    //   icon: <img src="/featureCardIcon1.png" alt="Integrity Icon " />,
    // },
    // {
    //   id: 5,
    //   title: "Compliance",
    //   description:
    //     "Prioritize safety, transparency and standards over money.",
    //   icon: <img src="/featureCardIcon1.png" alt="Compliance Icon" />,
    // },
    // {
    //   id: 6,
    //   title: "Compassion",
    //   description:
    //     "Serve with heart. Heal with care.",
    //   icon: <img src="/featureCardIcon1.png" alt="Compassion Icon" />,
    // },
    // { 
    //   id: 7,
    //   title: "Dynamic",
    //   description:
    //     "Constantly improve, evolve, and adapt.",
    //   icon: <img src="/featureCardIcon1.png" alt="Dynamic Icon " />,
    // },
    // {
    //   id: 8,
    //   title: "Supportive",
    //   description:
    //     "Always provide the necessary support and a consistent quality.",
    //   icon: <img src="/featureCardIcon1.png" alt="Supportive Icon" />,
    // },
    // {
    //   id: 9,
    //   title: "Passionate",
    //   description:
    //     "We love what we do and we're excited to get work everyday.",
    //   icon: <img src="/featureCardIcon1.png" alt="Passionate Icon" />,
    // },
  ];

  return (
    <section
      className="bg-white py-20 pt-29 px-6 relative overflow-hidden rounded-t-4xl"
      style={{
        backgroundImage: "url('/Rectangle 18.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
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
                        delay: (index % 3) * 0.18, // 👈 same wave effect
                      },
                    }
                  : undefined
              }
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl px-7 py-10 cursor-pointer transition-all hover:scale-105 bg-[#F5F5F5] text-gray-900 border border-gray-200 duration-500 hover:bg-gradient-to-r from-[#0097B2] to-[#004753] hover:text-white"
            >
              <div className="md:mb-6 mb-4 flex">
                <img
                  {...feature.icon.props}
                  className="w-10 h-10 md:w-12 md:h-12  object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
