"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FeatureCards() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const features = [
    { 
      id: 1,
      title: "360 Medical",
      description:
        "360 Medical is a trusted healthcare partner delivering innovative surgical and wound care solutions that improve patient outcomes and reduce overall cost of care. As a licensed tissue bank, we uphold the highest standards of safety, compliance, and biological integrity while supporting physicians, hospitals, and surgery centers with reliable products and clinical expertise.",
      icon: <img src="/featureCardIcon1.png" alt="Biologic Lab Integration Icon " />,
    },
    {
      id: 2,
      title: "SIM 360",
      description:
        "SIM360 advances healthcare education and patient safety by delivering immersive, compliant, hands-on simulation training.",
      icon: <img src="/featureCardIcon1.png" alt="Consignment Program Icon" />,
    },
    {
      id: 3,
      title: "Vault 360",
      description:
        "Vault360 Technologies safeguards patient data and builds trust in healthcare by delivering simple, secure, and compliant data protection solutions.",
      icon: <img src="/featureCardIcon1.png" alt="Online Physician Portal Icon" />,
    },
  ];

  return (
    <section
      className="bg-white py-20 pt-29 px-6 relative overflow-hidden "
      style={{
        backgroundImage: "url('/Rectangle 18.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center md:mb-16 mb-9">
          <h2 className="text-2xl md:text-5xl font-syne font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Solution Seamlessly 
            <br />
            Connected with our ecosystem
          </h2>
        </div>

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
                        delay: (index % 3) * 0.18, // 👈 SAME WAVE EFFECT
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
