"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Vault360Leadership() {
  const leaders = [
    {
      name: "Rick Masso",
      title: "Chief Executive Officer",
      image: "/Rick Masso.jpg",
      quote:
        "Throughout my career, I've focused on advancing the four pillars of the healthcare Quadruple Aim. The data protection and cyber resiliency solutions we're delivering to our customers directly support those goals, which makes me especially excited to be part of launching Vault360 Technologies. ",
    },
    {
      name: "Raul Nava",
      title: "Chief Operations Officer",
      image: "/Raul Nava.jpg",
      quote:
        "I've spent my career leading healthcare organizations and improving outcomes through efficiency and compliance. As healthcare becomes increasingly data-driven, protecting that data is essential. Launching Vault360 Technologies allows us to deliver trusted data protection and cyber resiliency solutions that safeguard what matters most in patient care.",
    },
    {
      name: "Brandon Schafer",
      title: "Chief Commercial Officer",
      image: "/Brandon Schafer.PNG",
      quote:
        "With several years of experience across both the data and healthcare sectors, I've developed a strong understanding of their critical needs and value drivers. I'm excited to bring advanced data protection solutions to healthcare—driving efficiency, strengthening compliance, and improving patient care.",
    },
    {
      name: "Saul Nava",
      title: "Chief Financial Officer",
      image: "/Saul Nava.jpg",
      quote:
        "Healthcare organizations face growing financial and operational risks as data becomes central to every decision. At Vault360 Technologies, we're providing the tools to protect critical data, strengthen compliance, ensure business continuity for long-term stability and growth, all while keeping patient outcomes top of mind.",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Rectangle.png')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto text-lg">
            Experienced professionals dedicated to transforming healthcare data
            protection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row h-full md:min-h-[450px] md:max-h-[500px]">
                {/* Image Section */}
                <div className="md:w-[40%] w-full relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-between relative">
                  {/* Vault360 Logo */}
                  <div className="flex justify-end mb-4">
                    <div className="flex flex-col items-center">
                      <div className="font-bold text-xl tracking-tight leading-none">
                        <span className="text-[#2C3E50]">VAULT</span>
                        <span className="text-[#0097B2]">360</span>
                      </div>
                      <div className="text-[8px] text-[#0097B2] tracking-[0.2em] mt-0.5 font-semibold">
                        —TECHNOLOGIES—
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <p className="text-gray-700 italic leading-relaxed text-sm">
                      {leader.quote}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0097B2] transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-[#0097B2] font-semibold text-sm">
                      {leader.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
