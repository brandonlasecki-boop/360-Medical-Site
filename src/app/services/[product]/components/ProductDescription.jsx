"use client";

import React from "react";
import { motion } from "framer-motion";

const ProductDescription = ({ product }) => {
  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-bold"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Section: Main Text */}
        <div className="tm-symbol">
          {product.descriptionContent.map((text, idx) => (
            <motion.p
              key={idx}
              className="text-lg md:text-3xl text-gray-800 mb-6"
              variants={textVariants}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Right Section: Image + Text */}
        <div className="flex flex-col gap-6 tm-symbol">
          <motion.div className="w-full tm-symbol" variants={containerVariants}>
            {product.images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={product.title}
                className="rounded-2xl shadow-lg w-full object-cover"
                variants={imageVariants}
              />
            ))}
          </motion.div>
          <motion.div variants={textVariants} className="space-y-4">
            {Array.isArray(product.imageDescription)
              ? product.imageDescription.map((text, idx) => (
                  <p key={idx} className="text-gray-900 text-md leading-relaxed tm-symbol">
                    {text}
                  </p>
                ))
              : String(product.imageDescription || "")
                  .split("\n")
                  .filter(Boolean)
                  .map((text, idx) => (
                    <p key={idx} className="text-gray-900 text-md leading-relaxed tm-symbol">
                      {text}
                    </p>
                  ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDescription;
