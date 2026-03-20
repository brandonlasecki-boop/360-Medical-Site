"use client";

import { motion } from "framer-motion";

export default function Vault360Overview() {
  return (
    <section 
      className="relative py-20 bg-cover bg-black bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/Rectangle.png')",
      }}
    >
      <div className="container mx-auto px-4 mt-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start text-left md:mb-12 mb-9">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
             Vault360 Technologies is a healthcare data
            </h2>
            
            <div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
               protection partner focused on helping hospitals and healthcare systems safeguard sensitive patient information with confidence.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
               We work alongside leading data security and software providers to deliver simple, secure, and compliant data protection solutions tailored to the complex needs of healthcare organizations. By combining trusted technologies with healthcare-focused expertise, we help our clients reduce risk, meet regulatory requirements, and strengthen trust across their data environments.
              </p>
            </div>
          </div>
          <div className="justify-center flex">
          <img src="/VaultOverviews.png" alt="Healthcare Data Protection" className="w-3xl  h-auto object-cover mb-12 rounded-2xl shadow-2xl" />
          </div>
          <div className="text-left">

          <p className="text-gray-300  mb-8">
           We work alongside leading data security and software providers to deliver simple, secure, and compliant data protection solutions tailored to the complex needs of healthcare organizations. By combining trusted technologies with healthcare-focused expertise, we help our clients reduce risk, meet regulatory requirements, and strengthen trust across their data environments
          </p>
           
            <p className="text-gray-300 text-base leading-relaxed">
             Our approach is grounded in partnership, transparency, and accountability. We believe strong collaboration between healthcare organizations, technology providers, and security partners is essential to protecting patient data and supporting better care.
            </p>
          </div>

         
        </motion.div>
      </div>
    </section>
  );
}
