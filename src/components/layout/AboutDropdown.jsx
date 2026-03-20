//src/components/layout/AboutDropdown.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutDropdown() {
  const pathname = usePathname();
  const [showAbout, setShowAbout] = useState(false);

  const isActive = pathname === "/about" || pathname === "/teams";

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowAbout(true)}
      onMouseLeave={() => setShowAbout(false)}
    >
      {/* Trigger Link */}
      <Link
        href="/about"
        className={`text-sm transition rounded-full px-4 py-2 ${
          isActive
            ? "text-white border border-gray-800 bg-[#101010]"
            : "text-white hover:text-white"
        }`}
      >
        About
      </Link>

      {/* Dropdown */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#f5fdfe] text-black rounded-2xl shadow-lg p-2
        transition-all duration-300 ease-in-out
        ${
          showAbout
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="space-y-2">
          <Link 
            href="/about"
            className="block px-4 py-3 text-sm text-gray-900 hover:text-[#001e24] hover:bg-[#e0f7fa] rounded-lg transition-all duration-200"
            onMouseEnter={() => setShowAbout(true)}
          >
            Our Mission & Values
          </Link>
          <Link 
            href="/teams"
            className="block px-4 py-3 text-sm text-gray-900 hover:text-[#001e24] hover:bg-[#e0f7fa] rounded-lg transition-all duration-200"
            onMouseEnter={() => setShowAbout(true)}
          >
            Meet Our Team
          </Link>
        </div>

        {/* Dropdown Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#f8f8f8]" />
      </div>
    </div>
  );
}