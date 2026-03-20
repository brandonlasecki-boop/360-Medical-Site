//src/components/services/ServiceCardsPlatform.jsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ServiceCardsPlatform = () => {
  const [activeTab, setActiveTab] = useState("outpatient");

  const outpatientProducts = [
    { 
      id: "membrane-wrap",
      title: "Membrane Wrap™", 
      subtitle: "Membrane Wrap™ – dual-layer amniotic allograft membrane" 
    },
    { 
      id: "membrane-wrap-lite",
      title: "Membrane Wrap-Lite™", 
      subtitle: "Membrane Wrap™ – dual-layer amniotic allograft membrane" 
    },
    { 
      id: "amchoplast",
      title: "AmchoPlast™", 
      subtitle: "Dual-Layer Amnion–Chorion Membrane Allograft " 
    },
    { 
      id: "dermacyte",
      title: "Dermacyte® Matrix", 
      subtitle: "Single-Layer Amniotic Membrane Allograft" 
    },
    { 
      id: "ultramist",
      title: "UltraMIST®", 
      subtitle: "Noncontact Low-Frequency Ultrasound Therapy " 
    },
    { 
      id: "blazer-c-vertebral-augmentation-system",
      title: "Blazer®", 
      subtitle: "Blazer® C Vertebral Augmentation System – Mechanical Channel Creation for Vertebral Compression Fractures" 
    },
    { 
      id: "endura-kt-local-anesthetic",
      title: "Endura-KT™", 
      subtitle: "Endura-KT™ Local Anesthetic – Long-Acting Non-Opioid Analgesic for Pain Management" 
    },
    { 
      id: "mugard-oral-mucoadhesive",
      title: "MuGard™", 
      subtitle: "MuGard™ Oral Mucoadhesive – Proactive Management of Oral Mucositis and Wounds" 
    },
  ];

  const hospitalProducts = [
    { 
      id: "platform-innovations",
      title: "Platform Innovations ACSIS", 
      subtitle: "Platform Innovations ACSIS – Advanced surgical solutions for clinical performance" 
    },
    { 
      id: "endolumik",
      title: "Endolumik™", 
      subtitle: "Endolumik™ – Precision illumination for minimally invasive procedures" 
    },
    { 
      id: "skeletal-dynamics",
      title: "Skeletal Dynamics™", 
      subtitle: "Skeletal Dynamics™ – Orthopedic innovation for procedural efficiency" 
    },
    { 
      id: "biotissue",
      title: "BioTissue™", 
      subtitle: "BioTissue™ – Regenerative solutions for advanced wound care" 
    },
    { 
      id: "telabio",
      title: "TelaBio™", 
      subtitle: "TelaBio™ – Biologic technologies supporting healing and recovery" 
    },
  ];

  const cards = activeTab === "outpatient" ? outpatientProducts : hospitalProducts;

  return (
    <div
      className="w-full max-w-[1550px] mx-auto p-6 lg:p-12 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: 'url("/Rectangle 18.jpg")' }}
    >
     {/* Tab Buttons */}
<div className="flex justify-center mb-8 lg:mb-12">
  <div className="inline-flex p-1 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg border border-gray-200">
    <button
      onClick={() => setActiveTab("outpatient")}
      className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg lg:rounded-xl transition-all duration-300 whitespace-nowrap ${
        activeTab === "outpatient"
          ? "bg-gradient-to-r from-[#016c7f] to-[#0097B2] text-white shadow-md"
          : "text-gray-600 hover:text-[#0097B2]"
      }`}
    >
      Outpatient Products
    </button>
    <button
      onClick={() => setActiveTab("hospital")}
      className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg lg:rounded-xl transition-all duration-300 whitespace-nowrap ${
        activeTab === "hospital"
          ? "bg-gradient-to-r from-[#016c7f] to-[#0097B2] text-white shadow-md"
          : "text-gray-600 hover:text-[#0097B2]"
      }`}
    >
      Hospital Products
    </button>
  </div>
</div>

      {/* Cards Grid - EXACT same as original */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  delay: (index % 3) * 0.18,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative tm-symbol bg-white rounded-3xl shadow-lg hover:bg-gradient-to-br hover:from-[#2c3a3a] hover:to-[#000000] transition-all duration-500 overflow-hidden border border-purple-100"
            >
              <div className="absolute inset-0 border-2 border-[#000000] rounded-3xl group-hover:border-[#0097B2] transition-colors duration-900 pointer-events-none" />

              <div className="p-8 lg:p-10 text-center relative z-10">
                <h3 className="text-2xl tm-symbol font-bold text-[#0097B2] mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 tm-symbol group-hover:text-white text-sm leading-relaxed mb-8 bg-purple-50 group-hover:bg-gray-500 px-4 py-3 rounded-xl transition-all duration-300">
                  {card.subtitle}
                </p>

                <Link 
                  href={`/services/${card.id}`}
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#016c7f] to-[#0097B2] text-white font-semibold rounded-xl hover:from-[#005e6e] hover:to-[#0097B2] transform hover:scale-105 transition-all duration-200 shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceCardsPlatform;