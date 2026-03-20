//src/components/layout/Platform360Dropdown.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Platform360Dropdown() {
  const pathname = usePathname();
  const [showAbout, setShowAbout] = useState(false);

  const isActive = pathname === "/360-platform";

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowAbout(true)}
      onMouseLeave={() => setShowAbout(false)}
    >
      {/* Trigger Link */}
      <Link
        href="https://app.360medical.net/"
        className={`text-sm transition rounded-full px-4 py-2 ${
          isActive
            ? "text-white border border-gray-800 bg-[#101010]"
            : "text-white hover:text-white"
        }`}
      >
        360 Portal
      </Link>

      {/* Dropdown */}
      {/* <div
        className={`absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#f5fdfe] text-black rounded-2xl shadow-lg p-2
        transition-all duration-300 ease-in-out
        ${
          showAbout
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="space-y-2">
          <Link 
            href="https://invoice.360medical.net/"
            className="block px-4 py-3 text-sm text-gray-900 hover:text-[#001e24] hover:bg-[#e0f7fa] rounded-lg transition-all duration-200"
            onMouseEnter={() => setShowAbout(true)}
          >
            Provider Portal
          </Link>
          <Link 
            href="https://buy.stripe.com/fZeg0b2UR8bl3o4288"
            className="block px-4 py-3 text-sm text-gray-900 hover:text-[#001e24] hover:bg-[#e0f7fa] rounded-lg transition-all duration-200"
            onMouseEnter={() => setShowAbout(true)}
          >
            Distributor Portal
          </Link>
        </div>

        
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#f8f8f8]" />
      </div> */}
    </div>
  );
}