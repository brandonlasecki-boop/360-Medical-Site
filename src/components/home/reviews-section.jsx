"use client";
import React from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      quote:
        "Since working with codeless por technology but our website traffic has more than doubled and it's all organic. We now rank",
      author: "Angelina Jolie",
      role: "Digital Marketer",
      rating: 5.0,
    },
    {
      quote:
        "Technological infrastructure and expert staff. We offer a wide transportation thanks to our advanced technological",
      author: "Stuart Law",
      role: "Manager",
      rating: 5.0,
    },
    {
      quote:
        "Automation, the works marketing agency delivered everything ahead of schedule and we're seeing results across the board",
      author: "Abdur Rashid",
      role: "President Of sales",
      rating: 5.0,
    },
    {
      quote:
        "Since working with codeless por technology but our website traffic has more than doubled and it's all organic. We now rank",
      author: "Angelina Jolie",
      role: "Digital Marketer",
      rating: 5.0,
    },
    {
      quote:
        "Technological infrastructure and expert staff. We offer a wide transportation thanks to our advanced technological",
      author: "Stuart Law",
      role: "Manager",
      rating: 5.0,
    },
    {
      quote:
        "Automation, the works marketing agency delivered everything ahead of schedule and we're seeing results across the board",
      author: "Abdur Rashid",
      role: "President Of sales",
      rating: 5.0,
    },
  ];

  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/Rectangle 16.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 text-balance">
        Where Clinical Excellence
          <br /> Meets Operational Strength
        </h2>
        {/* <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          The goal is usually to reach the right audience, attract their attention, and get them to take
        </p> */}

        {/* Sliding container */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-slide">
            {/* Duplicate reviews to make the loop seamless */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#202020] to-[#101010] rounded-lg p-6 border border-gray-800 max-w-[240px] min-w-[240px] md:max-w-[330px] md:min-w-[330px] flex-shrink-0"
              >
                <div className="flex justify-between gap-2 mb-4">
                  <div className="text-white text-2xl font-bold">
                    <img src="/twoTriangle.png" alt="" className="h-6 w-14" />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange-400">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-400 ml-2 text-sm">{review.rating}.0</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">"{review.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{review.author}</p>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-slide {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: slide 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
