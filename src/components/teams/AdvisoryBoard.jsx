"use client";

import React from "react";

const teamMembers = [
  {
    fullTitle: "Advisory Board Member - Chuck Stark",
    image: "/Chuck Stark.webp",
    linkedin: "https://www.linkedin.com/in/cstark4duke/",
    // description: "Lorem ipsum dolor sit amet...",
  }
  
];

const AdvisoryBoard = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat px-6 "
      style={{
        backgroundImage: "url('/Rectangle 16.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-12 tracking-tight">
          ADVISORY BOARD
        </h2>

        {/* ⭐ AUTO-CENTER GRID — keeps original card width */}
        <div
          className="grid gap-8 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, auto))",
          }}
        >
          {teamMembers.map((member, index) => {
            const [role, ...nameParts] = member.fullTitle.split(" - ");
            const name = nameParts.join(" - ");

            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={name}
                    className="w-full h-85 object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <p className="text-gray-400 text-xs uppercase tracking-widest">
                    {role}
                  </p>

                  <h3 className="font-semibold text-white text-lg mt-1">
                    {name}
                  </h3>

                  {member.description && (
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {member.description}
                    </p>
                  )}

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-[#0A66C2] hover:text-white hover:bg-[#0A66C2] border border-[#0A66C2] px-3 py-1.5 rounded-full text-sm transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="mr-2"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.367-1.852 3.598 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.068 2.069-2.068 1.142 0 2.068.925 2.068 2.068 0 1.142-.926 2.068-2.068 2.068zm1.777 13.019H3.559V9h3.555v11.452z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
