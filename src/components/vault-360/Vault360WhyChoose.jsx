"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, Users } from "lucide-react";

export default function Vault360WhyChoose() {
  const features = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Enterprise-grade security solutions tailored for healthcare organizations.",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Meet HIPAA, HITECH, and healthcare regulatory requirements with confidence.",
    },
    {
      icon: CheckCircle2,
      title: "Risk Reduction",
      description: "Minimize data breach risks through proactive security measures.",
    },
    {
      icon: Users,
      title: "Strategic Partnership",
      description: "Dedicated partner understanding healthcare data security challenges.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Vault360
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Partnership, transparency, and accountability in protecting patient data
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#0097B2] to-[#004753] rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
