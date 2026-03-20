"use client";

import { motion } from "framer-motion";

const roles = [
  {
    title: "Clinical Account Manager",
    team: "Clinical Operations",
    location: "Dallas, TX",
    type: "Full-time",
  },
  {
    title: "Supply Chain Specialist",
    team: "Operations",
    location: "Austin, TX",
    type: "Full-time",
  },
  {
    title: "Inside Sales Associate",
    team: "Growth",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareerOpenRolesSection() {
  return (
    <section id="open-roles" className="bg-black py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-syne">
            Open roles
          </h2>
          <p className="text-gray-300 mt-3 text-base md:text-lg font-urbanist">
            Explore positions where you can make an immediate impact.
          </p>
        </div>

        <div className="grid gap-5">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-800 bg-[#111] p-6 md:p-7"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {role.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-1">
                    {role.team} · {role.location}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-[#1E1E1E] text-gray-200 border border-gray-700">
                    {role.type}
                  </span>
                  <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Don’t see the right role? Reach out and we’ll keep you in mind.
        </p>
      </div>
    </section>
  );
}
