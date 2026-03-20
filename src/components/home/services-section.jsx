"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "licensed tissue bank",
      description:
        "Complete integration between 360 medical and biologic ",
      icon: <img src="/servicesIcon3.png" alt="Licensed Tissue Bank Icon" />,
    },
    // {
    //   id: 4,
    //   title: "molecular healthcare",
    //   description: "Providing innovative model for healthcare decisions",
    //   icon: <img src="/servicesIcon.png" alt="Molecular Healthcare Icon" />,
    // },
    {
      id: 2,
      title: "medical products",
      description:
        "Offering a diverse range of high-quality medical products globally",
      icon: <img src="/servicesIcon2.png" alt="Medical Products Icon" />,
    },
    {
      id: 3,
      title: "wound care solutions",
      description:
        "Offering a diverse range of high-quality medical products globally",
      icon: <img src="/servicesIcon3.png" alt="Wound Care Solutions Icon" />,
    },
    {
      id: 5,
      title: "medical products",
      description:
        "Offering a diverse range of high-quality medical products globally",
      icon: <img src="/servicesIcon2.png" alt="Medical Products Icon" />,
    },
  ];

  return (
    <section
      className="relative min-h-[670px] bg-cover bg-center flex items-center justify-start overflow-hidden"
      style={{ backgroundImage: "url('homeser.jpg')" }}
    >
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.7))"
        }}
      />

      <div className="max-w-8xl mx-auto relative z-10 w-full px-4 md:px-8">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug">
            Delivering Excellence in
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Medical Solutions</span>
          </h2>
        </motion.div>

        {/* Swiper Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="relative max-w-[90%] mx-auto"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="mb-12 px-4 sm:px-0"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 1.13, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.12,
                    },
                  }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-xs rounded-xl p-6 sm:p-9 pb-10 hover:border-cyan-400/60 transition group cursor-pointer max-w-sm mx-auto"
                >
                  <div className="flex items-start justify-between mb-6 sm:mb-10">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      {service.icon}
                    </span>
                    <span className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center">
                      <img
                        src="/blueArrow.png"
                        alt=""
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                      />
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-base sm:text-lg capitalize">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrow Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            viewport={{ once: true }}
            className="custom-prev absolute -left-4 sm:-left-10 lg:-left-16 top-1/2 -translate-y-1/2 
              z-20 cursor-pointer bg-white/20 hover:bg-cyan-400/80 
              text-white rounded-full p-2 sm:p-2.5 flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="custom-next absolute -right-4 sm:-right-10 lg:-right-16 top-1/2 -translate-y-1/2 
              z-20 cursor-pointer bg-white/20 hover:bg-cyan-400/80 
              text-white rounded-full p-2 sm:p-2.5 flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* CTA Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 rounded-full bg-gradient-to-r from-gray-900 to-black px-15 sm:px-6 py-2.5 sm:py-2">
            <span className="text-white text-sx sm:text-md font-medium">
              Leading the Solution
            </span>
            <button className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2 font-medium text-sm sm:text-base">
              View All Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
