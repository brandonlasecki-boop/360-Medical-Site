//src/app/services/[product]/components/xsonx/XsonxKeyBenefits.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const XsonxKeyBenefits = () => {
  const benefits = [
    {
      icon: "/mobile.svg",
      title: "Advanced Vibrational Technology",
      description: "Cordless system with micro-vibrational tech performing over 500 scrubs/sec.",
    },
    {
      icon: "/flexble.svg",
      title: "Pain Reduction",
      description: "Reduces pain with vibrational analgesia, gentler than traditional methods.",
    },
    {
      icon: "/sterilized.svg",
      title: "Effective Slough Removal",
      description: "Efficiently removes slough and biofilms for better healing trajectory.",
    },
    {
      icon: "/sheild.svg",
      title: "Cost-Effective & Easy",
      description: "Reusable handpiece with single-use sleeves makes care simple & economical.",
    },
  ];

  return (
    <div className="w-full bg-[#e8e8e8] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-[#004753]"
        >
          Key Benefits of XSONX<sup className="text-3xl">®</sup>
        </motion.h2>

        {/* Grid with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white rounded-lg p-8 flex flex-col items-center text-center relative overflow-hidden"
              style={{
                border: "3px solid transparent",
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(135deg, #0097B2 0%, #004753 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#0097B2] rounded-full flex items-center justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={50}
                    height={50}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-[#004753] leading-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default XsonxKeyBenefits;
