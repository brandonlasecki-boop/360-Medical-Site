//src/components/layout/header.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ServicesDropdown from "./ServicesDropdown";
import AboutDropdown from "./AboutDropdown"; // Import the new component
import Platform360Dropdown from "./Platform360Dropdown"; // Import the new component
import { useMenu } from "@/context/MenuContext";

export default function Header({ onMenuToggle, isSidebarOpen }) {
  const pathname = usePathname();
  const { toggleMenu, closeMenu } = useMenu();

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "platform", label: "360 platform", href: "#" },
    { id: "careers", label: "Careers", href: "/careers" },
    
  ];

  return (
    <header className="bg-[#101010] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4   py-2 flex items-center justify-between">
       { /* Logo */}
          <Link href="/" onClick={() => {
            if (isSidebarOpen) {
              onMenuToggle?.();
              closeMenu();
            }
          }} className="flex items-center gap-2">
            <img src="/logo.png" alt="360 Medical Logo" className="h-10 w-10 lg:h-12 lg:w-12" />
            <span className="text-[#0097B2] text-base lg:text-2xl font-bold tracking-wide">
              360 <span className="font-bold text-white">MEDICAL</span>
            </span>
          </Link>

          {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 border rounded-full px-4 py-2 border-gray-800 bg-black backdrop-blur-sm">
          {/* Home */}
          {/* <Link
            href="/"
            className={`text-sm transition rounded-full px-4 py-2 ${
              pathname === "/" ? "text-white border border-gray-800 bg-[#1a1a1a]" : "text-white"
            }`}
          >
            Home
          </Link> */}

          {/* About Dropdown */}
          <AboutDropdown />

          {/* Services Dropdown */}
          <ServicesDropdown pathname={pathname} href="/services" />

          {/* 360 Platform */}
          {/* <Link
            href="#"
            className={`text-sm transition rounded-full px-4 py-2 ${
              pathname === "#" ? "text-white border border-gray-800 bg-[#1a1a1a]" : "text-white"
            }`}
          >
            360 platform
          </Link> */}
          <Platform360Dropdown />

          {/* Sim 360 */}
          <Link
            href="/sim-360"
            // href="#"
            className={`text-sm transition rounded-full px-4 py-2 ${
              pathname === "/sim-360" ? "text-white border border-gray-800 bg-[#1a1a1a]" : "text-white"
            }`}
          >
            SIM360
          </Link>

          {/* Vault 360 */}
          <Link
            href="/vault-360"
            // href="#"
            className={`text-sm transition rounded-full px-4 py-2 ${
              pathname === "/vault-360" ? "text-white border border-gray-800 bg-[#1a1a1a]" : "text-white"
            }`}
          >
            Vault360
          </Link>
          {/* careers page */}
          <Link
            href="/careers"
            // href="#"
            className={`text-sm transition rounded-full px-4 py-2 ${
              pathname === "/careers" ? "text-white border border-gray-800 bg-[#1a1a1a]" : "text-white"
            }`}
          >
           Careers
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button
            onClick={() => {
              onMenuToggle?.();
              toggleMenu();
            }}
            className="text-white hover:text-cyan-400 transition md:hidden"
          >
            <img src="/menu.png" alt="menu" className="h-5 w-5 lg:h-5 lg:w-5" />
          </button>
          <Link
            href="/contact"
            className="bg-white text-black px-4 lg:px-6 py-2 lg:py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}