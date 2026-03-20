//src/app/services/[product]/components/ProductKeyFeatures.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductKeyFeatures = ({ product }) => {
  const productFeatures = {
    "xsonx-wound-hygiene": ["Advanced Technology", "Optimal Moisture Control", "Antimicrobial Properties", "Easy Application", "Sterile Packaging"],
    "membrane-wrap": ["Readily Available", "5-Year Shelf Life", "Easy Application", "FDA Compliant"],
    "membrane-wrap-lite": ["Readily Available", "5-Year Shelf Life", "Easy Application", "FDA Compliant"],
    "simplimax": ["Easy to Use", "Dual-Layer Protection", "Cost-Effective", "Proven Results", "Sterile"],
    "tri-membrane-wrap": ["Triple-Layer", "Enhanced Barrier", "Superior Protection", "Extended Wear", "Flexible"],
    "xcell-amnio-matrix": ["Lyophilized", "Extended Shelf Life", "Preserved Bioactivity", "Easy Storage", "Sterile"],
    "activate": ["Full Thickness", "Placental Tissue", "Enhanced Healing", "Versatile", "Protective"],
    "amnio-amp-mp": ["Accelerated Healing", "Dual-Layer", "Optimized Matrix", "Clinical Efficacy", "Sterile"],
    "amchoplast": ["Dual-Layer Design ", "Protective Covering", "Ready-to-Use", "Ambient Temperature Storage", "Fully Sterile"],
    "esano-aca": ["Triple-Layer", "Placental Tissue", "Superior Protection", "Enhanced Barrier", "Flexible"],
    "membrane-wrap-hydro": ["Pre-Hydrated", "Ready to Use", "Immediate Application", "Optimal Hydration", "Sterile"],
    "xceed-tl-matrix": ["Tri-Layer", "Amnion-Chorion-Amnion", "Dehydrated", "Natural Barrier", "FDA Compliant"],
    "dermacyte": ["Single-Layer Membrane", "Conformable Covering", "Ready-to-Use", "Ambient Storage", "Preserved Matrix"],
    "ultramist": ["Noncontact Ultrasound ", "Supports Healing", "Gentle Application", "Rapid Treatment", "Clinically Compatible"],
    "blazer-c-vertebral-augmentation-system": ["Mechanical Channel Creation", "Predictable Cement Deposition", "MIS Unilateral Approach", "Complete Vertebral Coverage", "Directional Control"],
    "endura-kt-local-anesthetic": ["Long-Acting Pain Relief (36-72 hrs)", "Non-Opioid Analgesic", "Single Injection", "Tetracaine Lidocaine Epinephrine", "High Sensory-Low Motor"],
    "mugard-oral-mucoadhesive": ["Proven Efficacy", "Proactive Management", "Protective Coating", "Ready-to-Use", "Soothes Oral Mucosa"]

  };
 
  const featureToSvgMap = {
    "Amino": "/amino.svg",
    "Dehydrated": "/dehydrated.svg",
    "Flexible": "/flexble.svg",
    "Sterile": "/sterilized.svg",
    "Terminally Sterilized": "/sterilized.svg",
    "Ambient Temperature Storage": "/temprature.svg",
    "Room Temperature Stable": "/temprature.svg",
    "Easy Storage": "/temprature.svg",
    "Mobile": "/mobile.svg",
    "Easy to Use": "/mobile.svg",
    "Easy Application": "/mobile.svg",
    "Protective": "/sheild.svg",
    "Protective Covering": "/sterilized.svg",
    "Enhanced Barrier": "/sheild.svg",
    "Superior Protection": "/sheild.svg",
    "Natural Barrier": "/sheild.svg",
    "OL": "/slought.svg",
    "Lyophilized": "/lyophilized.svg",
    "009": "/doller.svg",
    "Advanced Technology": "/amino.svg",
    "Optimal Moisture Control": "/temprature.svg",
    "Antimicrobial Properties": "/sterilized.svg",
    "Sterile Packaging": "/sterilized.svg",
    "Dual-Layer Protection": "/sheild.svg",
    "Cost-Effective": "/mobile.svg",
    "Proven Results": "/doller.svg",
    "Triple-Layer": "/slought.svg",
    "Extended Wear": "/flexble.svg",
    "Extended Shelf Life": "/temprature.svg",
    "Preserved Bioactivity": "/amino.svg",
    "Full Thickness": "/sheild.svg",
    "Placental Tissue": "/amino.svg",
    "Enhanced Healing": "/doller.svg",
    "Versatile": "/flexble.svg",
    "Accelerated Healing": "/doller.svg",
    "Optimized Matrix": "/amino.svg",
    "Clinical Efficacy": "/doller.svg",
    "Pre-Hydrated": "/dehydrated.svg",
    "Ready to Use": "/mobile.svg",
    "Immediate Application": "/mobile.svg",
    "Optimal Hydration": "/temprature.svg",
    "Tri-Layer": "/slought.svg",
    "Amnion-Chorion-Amnion": "/amino.svg",
    "FDA Compliant": "/sterilized.svg",
    "Precision Visibility": "/mobile.svg",
    "Injection-Free Fluorescence": "/sterilized.svg",
    "Zero Setup & Wireless": "/mobile.svg",
    "Single-Use Design": "/sterilized.svg"
  };

  const features = product.keyFeatures || productFeatures[product.id] || productFeatures["tri-membrane-wrap"];
  const availableIcons = [
    "/amino.svg",
    "/dehydrated.svg",
    "/flexble.svg",
    "/mobile.svg",
    "/sheild.svg",
    "/sterilized.svg",
    "/temprature.svg",
    "/lyophilized.svg",
    "/slought.svg",
    "/doller.svg"
  ];

  const normalizeFeature = (value = "") => value.trim().toLowerCase().replace(/-/g, " ");
  const normalizedFeatureToSvgMap = Object.entries(featureToSvgMap).reduce((acc, [key, iconPath]) => {
    acc[normalizeFeature(key)] = iconPath;
    return acc;
  }, {});

  const getFallbackIcon = (feature, index) => {
    const hash = `${feature}-${index}`
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return availableIcons[hash % availableIcons.length];
  };

  const getFeatureIcon = (feature, index) => {
    const normalizedFeature = normalizeFeature(feature);
    const mappedIcon = normalizedFeatureToSvgMap[normalizedFeature];
    return mappedIcon || getFallbackIcon(normalizedFeature, index);
  };

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0097B2] text-center mb-12">
          Key Features
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const title = typeof feature === "string" ? feature : feature.title;
            const description = typeof feature === "string" ? "" : feature.description;
            const svgPath = getFeatureIcon(title, index);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 md:p-8 bg-white border-2 border-[#0097B2] rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 min-h-[240px] md:min-h-[280px]"
              >
                <div className="w-12 h-12 md:h-16 md:w-16 bg-[#0097B2] rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 md:h-8 md:w-8 relative">
                    <Image
                      src={svgPath}
                      alt={title}
                      width={32}
                      height={32}
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                  {title}
                </h3>
                {description ? (
                  <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">
                    {description}
                  </p>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductKeyFeatures;
