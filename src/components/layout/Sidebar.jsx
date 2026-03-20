"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../lib/constants";
import { useMenu } from "@/context/MenuContext";

export default function Sidebar({ isOpen, onClose }) {
  const [openMenus, setOpenMenus] = useState({});
  const [openSubSections, setOpenSubSections] = useState({});
  const { closeMenu } = useMenu();

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSubSection = (key) => {
    setOpenSubSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClose = () => {
    closeMenu();
    onClose();
  };
  return (
    <div
      className={`fixed inset-0 z-40  backdrop-blur-sm transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:hidden`}
      onClick={handleClose}
    >
      <div className="bg-[#101010] w-64 h-full p-6" onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="text-gray-400 mb-6 hover:text-white">
          ✕
        </button>
        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const hasChildren = Array.isArray(link.children) && link.children.length > 0;
            const hasSections = Array.isArray(link.sections) && link.sections.length > 0;
            const isOpen = openMenus[link.name];

            if (!hasChildren && !hasSections) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="text-gray-300 hover:text-cyan-400 text-lg transition"
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <div key={link.name} className="text-gray-300">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={handleClose}
                    className="hover:text-cyan-400 text-lg transition"
                  >
                    {link.name}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls={`${link.name}-submenu`}
                    className="text-gray-400 hover:text-cyan-400 transition px-2"
                    onClick={() => toggleMenu(link.name)}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>

                {isOpen && hasChildren && (
                  <div id={`${link.name}-submenu`} className="mt-2 pl-3 space-y-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={handleClose}
                        className="block text-sm text-gray-400 hover:text-cyan-300 transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}

                {isOpen && hasSections && (
                  <div id={`${link.name}-submenu`} className="mt-2 pl-3 space-y-4">
                    {link.sections.map((section) => (
                      <div key={section.title}>
                        <p className="text-sm font-semibold text-gray-200">
                          {section.title}
                        </p>
                        {section.subSections?.map((subSection) => {
                          const subKey = `${section.title}-${subSection.title}`;
                          const subOpen = openSubSections[subKey];
                          return (
                            <div key={subSection.title} className="mt-3">
                              <button
                                type="button"
                                aria-expanded={subOpen ? "true" : "false"}
                                aria-controls={`${subKey}-submenu`}
                                className="w-full flex items-center justify-between text-xs font-bold text-gray-300 hover:text-cyan-300 transition"
                                onClick={() => toggleSubSection(subKey)}
                              >
                                <span className="tm-symbol">{subSection.title}</span>

                                <span className="text-gray-400">{subOpen ? "−" : "+"}</span>
                              </button>
                              {subOpen && (
                                <div id={`${subKey}-submenu`} className="mt-2 space-y-2 pl-2">
                                  {subSection.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={handleClose}
                                      className="block text-sm text-gray-400 hover:text-cyan-300 transition tm-symbol"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                        <div className="mt-2 space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={handleClose}
                              className="block text-sm text-gray-400 hover:text-cyan-300 transition tm-symbol"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
