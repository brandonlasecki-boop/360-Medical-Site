"use client";
import React from "react";

export default function ServicesPartnersBanner() {
  const partners = [
    { image: "/biolab.png" },
    { image: "/biotissue.png" },
    { image: "/merakris.png" },
    { image: "/endolumikBanner.png" },
    { image: "/seletal.png" },
    { image: "/platform.png" },
    { image: "/stability.png" },
    { image: "/izimedical.png" },
    { image: "/Ultra.png" },
    // { image: "/acera.png" },
    // { image: "/grvite.png" },
    // { image: "/support.png" },
    // { image: "/quality.png" },
    // { image: "/cellGen.png" },
  ];

  // Duplicate logos for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="bg-[#c4c8c8] py-5 overflow-hidden  relative z-10">
      <div className="relative w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center w-24 md:w-32 h-12 mx-18 flex-shrink-0" // Increased gap here
            >
              <img
                src={partner.image}
                alt={`Partner logo ${index + 1}`}
                className={`object-contain w-full h-full ${
                  partner.image === "/seletal.png" ||
                  partner.image === "/stability.png" ||
                  partner.image === "/Ultra.png"
                    ? "scale-120 md:scale-180"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite; /* Infinite loop */
        }
      `}</style>
    </section>
  );
}
