"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMenu } from "@/context/MenuContext";

const items = [
  { icon: "/icon4.png", position: "lg:top-1 lg:left-15 top-2 left-12" },
  { icon: "/icon3.png", position: "lg:top-1 lg:right-15 top-2 right-12" },
  { icon: "/icon2.png", position: "lg:bottom-1 lg:right-15 bottom-2 right-12" },
  { icon: "/icon1.png", position: "lg:bottom-1 lg:left-15 bottom-2 left-12" },
];

const contentData = {
  patient: {
    title: "Improved Patient Outcomes",
    text: [
      "Enhancing the quality of care goes beyond clinical outcomes; it’s about fostering a supportive, seamless journey for every individual. By prioritizing clear communication, personalized treatment plans, and digital accessibility, healthcare systems can ensure patients feel heard and valued.",
      "This holistic approach reduces anxiety, builds lasting trust between patients and clinicians, and creates an environment where healing is the primary focus.",
    ],
  },
  population: {
    title: "Improved Population Health",
    text: [
      "Addressing health at a community level requires a proactive shift from reactive treatment to comprehensive preventative wellness strategies. By leveraging data analytics and social determinants of health, providers can identify at-risk groups and intervene before chronic conditions escalate.",
      "This broader perspective ensures that healthcare resources are distributed equitably, ultimately raising the standard of living and longevity for the entire public.",
    ],
  },
  worklife: {
    title: "Better Work-Life for Providers",
    text: [
      "The backbone of any effective medical system is the well-being of its clinicians, nurses, and administrative staff members. Reducing burnout through streamlined workflows, intuitive technology, and mental health support allows providers to reconnect with their passion for healing others.",
      "When the healthcare workforce is energized and supported, the risk of medical errors drops significantly, and the overall quality of care remains consistently high.",
    ],
  },
  cost: {
    title: "Lower Cost of Care",
    text: [
      "Sustainable healthcare relies on optimizing value and eliminating systemic inefficiencies that drive up expenses for both facilities and patients. By transitioning toward value-based care models and reducing unnecessary diagnostic testing, organizations can provide high-quality interventions at a fraction of the traditional cost.",
      "This financial stewardship ensures that life-saving treatments remain affordable and accessible to all members of society.",
    ],
  },
};

export default function ImageSectionHome() {
  const [activeTab, setActiveTab] = useState("patient");
  const { isMobileMenuOpen } = useMenu();
  const currentContent = contentData[activeTab];

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4 md:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* --- LEFT SECTION: DESCRIPTION --- */}
        <div className="order-2 lg:order-1 flex-1 text-left max-w-lg min-h-[450px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                {currentContent.title}
              </h2>
              <div className="text-gray-600 text-base md:text-lg space-y-4 leading-relaxed">
                {currentContent.text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <Link href="/contact" >
          
          <button className="mt-8 w-fit px-8 py-2 bg-black text-white rounded-full font-medium text-sm hover:opacity-80 transition-opacity">
            Contact Us
          </button>
          </Link>
        </div>

        {/* --- RIGHT SECTION --- */}
        <div className="order-1 lg:order-2 flex-1 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-urbanist text-[#0092AD]">
            360 Medical
          </h2>
          <p className="text-xl md:text-2xl font-semibold italic text-gray-800 mt-2">
            Quadruple AIM
          </p>

          <div className="relative mt-6 md:mt-8 w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
            {/* Outer Circle Decor */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-800 pointer-events-none z-10" />

            {/* Quadrants Grid - z-20 to ensure it's on top of background but below floating icons */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 m-2 md:m-3 gap-1 rounded-full overflow-hidden z-20">
              
              {/* Top Left */}
              <div 
                className="flex items-center justify-center text-center px-3 md:px-6 cursor-pointer transition-all duration-300"
                style={{ backgroundColor: activeTab === "patient" ? "#0092AD" : "#F1F3F4" }}
                onMouseEnter={() => setActiveTab("patient")}
                onClick={() => setActiveTab("patient")}
              >
                <p className={`text-sm md:text-sm lg:text-lg font-semibold italic leading-snug max-w-[80px] mt-4 md:mt-6 transition-colors ${activeTab === "patient" ? "text-white" : "text-gray-800"}`}>
                  Improved Patient Outcomes
                </p>
              </div>

              {/* Top Right */}
              <div 
                className="flex items-center justify-center text-center px-3 md:px-6 cursor-pointer transition-all duration-300"
                style={{ backgroundColor: activeTab === "population" ? "#0092AD" : "#F1F3F4" }}
                onMouseEnter={() => setActiveTab("population")}
                onClick={() => setActiveTab("population")}
              >
                <p className={`text-sm md:text-sm lg:text-lg font-semibold italic leading-snug max-w-[80px] mt-4 md:mt-6 transition-colors ${activeTab === "population" ? "text-white" : "text-gray-800"}`}>
                  Improved Population Health
                </p>
              </div>

              {/* Bottom Left */}
              <div 
                className="flex items-center justify-center text-center px-3 md:px-6 cursor-pointer transition-all duration-300"
                style={{ backgroundColor: activeTab === "worklife" ? "#0092AD" : "#F1F3F4" }}
                onMouseEnter={() => setActiveTab("worklife")}
                onClick={() => setActiveTab("worklife")}
              >
                <p className={`text-sm md:text-sm lg:text-lg font-semibold italic leading-snug max-w-[80px] mb-4 md:mb-6 transition-colors ${activeTab === "worklife" ? "text-white" : "text-gray-800"}`}>
                  Better worklife for providers
                </p>
              </div>

              {/* Bottom Right */}
              <div 
                className="flex items-center justify-center text-center px-3 md:px-6 cursor-pointer transition-all duration-300"
                style={{ backgroundColor: activeTab === "cost" ? "#0092AD" : "#F1F3F4" }}
                onMouseEnter={() => setActiveTab("cost")}
                onClick={() => setActiveTab("cost")}
              >
                <p className={`text-sm md:text-sm lg:text-lg font-semibold italic leading-snug max-w-[80px] mb-4 md:mb-6 transition-colors ${activeTab === "cost" ? "text-white" : "text-gray-800"}`}>
                  Lower Cost
                </p>
              </div>
            </div>

            {/* Center Logo - pointer-events-none is KEY here */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full bg-white flex items-center justify-center shadow-lg"
              >
                <Image src="/centerIcon.png" alt="centerIcon" width={74} height={74} className="w-10 h-10 md:w-14 md:h-14 lg:w-[74px] lg:h-[74px]" />
              </motion.div>
            </div>

            {/* Floating Icons - Conditional z-index based on menu state */}
            <div className="block">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.position} cursor-pointer pointer-events-auto ${
                    isMobileMenuOpen ? 'z-0' : 'z-40'
                  } transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-11 h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-100">
                    <Image src={item.icon} alt="" width={32} height={32} className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="mt-6 md:mt-8 font-medium text-lg text-gray-900 px-4">
            Hover tiles to learn how <strong>360 Medical</strong> helps <br/> strengthen the <em>Quadruple Aim</em>
          </p>
        </div>
      </div>
    </section>
  );
}