"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, Users, FileCheck, TrendingUp } from "lucide-react";

export default function Vault360KeyFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Data Protection",
      description: "Safeguard sensitive patient information with enterprise-grade security solutions tailored for healthcare.",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Meet HIPAA, HITECH, and other healthcare regulatory requirements with confidence and ease.",
    },
    {
      icon: CheckCircle2,
      title: "Risk Reduction",
      description: "Minimize data breach risks and operational vulnerabilities through proactive security measures.",
    },
    {
      icon: Users,
      title: "Strategic Partnership",
      description: "Work with a dedicated partner who understands the unique challenges of healthcare data security.",
    },
    {
      icon: FileCheck,
      title: "Trusted Technology",
      description: "Access industry-leading data security solutions integrated seamlessly with your existing systems.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your data protection capabilities as your organization evolves and expands.",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Our approach is grounded in partnership, transparency, and accountability. We believe 
            strong collaboration between healthcare organizations, technology providers, and security 
            partners is essential to protecting patient data and supporting better care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0097B2] group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#0097B2] to-[#004753] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
