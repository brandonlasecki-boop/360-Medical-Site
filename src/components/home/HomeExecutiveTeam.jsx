"use client";

import React from "react";

const teamMembers = [
  {
    fullTitle: "Advisory Board Member - Chuck Stark",
    image: "/Advisory Board Member- Chuck Stark.jpg",
    linkedin: "https://www.linkedin.com/in/chuckstark",
    description: "Lorem ipsum dolor sit amet...",
  },
  // {
  //   fullTitle: "Chief Executive Officer - Raul Nava",
  //   image: "/Chief Executive Officer- Raul Nava.jpg",
  //   linkedin: "https://www.linkedin.com/in/raulnava",
  //   description: "Lorem ipsum dolor sit amet...",
  // },
  // {
  //   fullTitle: "Chief Financial Officer - Saul Nava",
  //   image: "/Chief Financial Officer- Saul Nava.jpg",
  //   linkedin: "https://www.linkedin.com/in/saulnava",
  //   description: "Lorem ipsum dolor sit amet...",
  // },
  {
    fullTitle: "Clinical Operations Director - Preston Henrichson",
    image: "/Clinical Operations Director- Preston Henrichson.jpg",
    linkedin: "https://www.linkedin.com/in/prestonhenrichson",
    description: "Lorem ipsum dolor sit amet...",
  },
  // {
  //   fullTitle: "Chief Commercial Officer - Rick Masso",
  //   image: "/Chief Commercial Officer- Rick Masso.jpg",
  //   linkedin: "https://www.linkedin.com/in/rickmasso",
  //   description: "Lorem ipsum dolor sit amet...",
  // },
];

const HomeExecutiveTeam = () => {
  const cardWidth = "w-full sm:w-64";

  return (
    <section
      className="bg-black py-20 px-6"
      style={{
        backgroundImage: "url('/Rectangle 16.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ONLY THIS LINE CHANGED */}
      <div className="w-full max-w-[1600px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-12 tracking-tight">
          EXECUTIVE TEAM
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => {
            const [role, ...nameParts] = member.fullTitle.split(" - ");
            const name = nameParts.join(" - ");

            return (
              <div
                key={index}
                className={`${cardWidth} group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col`}
              >
                <div className="overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={name}
                    className="w-full h-74 object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 text-left flex-grow">
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

export default HomeExecutiveTeam;
