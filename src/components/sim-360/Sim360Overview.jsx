"use client";

import { motion } from "framer-motion";

export default function Sim360Overview() {
  return (
    <section 
     className="relative py-20 bg-cover bg-black bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/Rectangle.png')",
      }}
    >
      <div className="container mx-auto px-4 mt-12 md:px-20">
        {/* Top Section - Left Text + Right Image */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
          {/* Left Side - Title and First Two Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-8 leading-tight">
              SIM360 Is A Healthcare Simulation Hosting
            </h2>
            
            <p className="text-gray-100 text-base leading-relaxed mb-6">
              and enablement partner designed to support high-quality clinical education and patient safety initiatives.
            </p>
            
            <p className="text-gray-100 text-base leading-relaxed">
              SIM360 provides the environment, infrastructure, and operational support needed for healthcare organizations, educators, and simulation partners to deliver accredited, compliant, and immersive simulation experiences. We serve as the bridge between simulation content providers and healthcare organizations seeking reliable, real-world training delivery.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <div className="relative flex justify-center items-start"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
              <img 
                src="/simOverviewLeft.png" 
                alt="Healthcare Simulation Training" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-white"
        >
          <p className="text-gray-100 text-base leading-relaxed mb-6">
            Our platform and services support a wide range of simulation activities—from clinical skills training to interdisciplinary, team-based scenarios—while aligning with regulatory, accreditation, and safety expectations. By reducing logistical and operational complexity, SIM360 allows training partners and healthcare teams to focus on effective education and safer patient care.
          </p>
          
          <p className="text-gray-100 text-base leading-relaxed">
            At SIM360, we believe collaboration is essential to advancing healthcare education. Through strong partnerships and flexible hosting models, we help extend the reach and impact of simulation-based learning across healthcare systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
