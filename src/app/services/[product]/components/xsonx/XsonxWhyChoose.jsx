//src/app/services/[product]/components/xsonx/XsonxWhyChoose.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const XsonxWhyChoose = () => {
  return (
    <div className="bg-gradient-to-br from-[#0097B2] to-[#004753] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Why Choose XSONX<sup className="text-2xl">®</sup>
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 flex flex-col"
          >
            <div className="bg-gray-100 rounded-2xl mb-6 flex items-center justify-center w-full h-[260px]">
              <Image
                src="/deviceimage.webp"
                alt="XSONX device with attachments"
                width={500}
                height={260}
                className="object-contain w-auto h-full"
              />
            </div>

            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-[#004753] mb-4">
              Comprehensive Wound Care
            </h3>

            <p className="text-gray-800 text-lg leading-relaxed">
              XSONX® is versatile, perfect for wound bed preparation prior to tissue grafting or in operating rooms.
              It's ideal as a step-up therapy for infected wounds and for routine maintenance to prevent stalled
              healing.
            </p>
          </motion.div>

          {/* RIGHT COLUMN (Two Cards) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="flex flex-col gap-8"
          >
            {/* Reusable & Reimbursable */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white rounded-3xl p-6 flex gap-6"
            >
              <div className="bg-gray-100 rounded-2xl flex items-center justify-center w-40 h-40 flex-shrink-0">
                <Image
                  src="/deviceTwo.webp"
                  alt="Reusable handpiece and accessories"
                  width={150}
                  height={150}
                  className="object-contain w-auto h-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-[#004753] mb-3">
                  Reusable and Reimbursable
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  The reusable handpiece and cost-effective single-use woundheads make XSONX® an economically smart
                  choice for healthcare facilities.
                </p>
              </div>
            </motion.div>

            {/* Expert-Endorsed */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white rounded-3xl p-6 flex gap-6"
            >
              <div className="bg-gray-100 rounded-2xl flex items-center justify-center w-40 h-40 flex-shrink-0">
                <Image
                  src="/devicethree.png"
                  alt="Expert using XSONX device"
                  width={150}
                  height={150}
                  className="object-contain w-auto h-full"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0097B2] to-[#004753] mb-3">
                  Expert-Endorsed
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  Noted medical professionals, including Drs. John Lantis and Callie Horn, have recognized the tool's
                  effectiveness in enhancing early tissue engraftment and reducing patient pain compared to traditional
                  methods.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default XsonxWhyChoose;
