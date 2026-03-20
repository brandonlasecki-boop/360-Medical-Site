//src/components/layout/ServicesDropdown.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const serviceData = {
  "xsonx-wound-hygiene": { label: "Xsonx Wound Hygiene", image: "/card2pic.png" },
  "membrane-wrap": { label: "Membrane Wrap\u2122", image: "/ghoseimg.png" },
  simplimax: { label: "Simplimax", image: "/productData3img.png" },
  "tri-membrane-wrap": { label: "Tri-Membrane Wrap", image: "/Tissue.png" },
  "xcell-amnio-matrix": { label: "XCELL Amnio Matrix", image: "/AmchoPlast.png" },
  activate: { label: "Activate", image: "/dr.image.avif" },
  "amnio-amp-mp": { label: "Amnio AMP-MP", image: "/card2pic.png" },
  amchoplast: { label: "AmchoPlast\u2122", image: "/AmchoPlast.png" },
  dermacyte: { label: "Dermacyte\u00AE Matrix", image: "/dermacyte.PNG" },
  ultramist: { label: "UltraMIST\u00AE", image: "/ultramist.PNG" },
  "esano-aca": { label: "Esano ACA", image: "/ghoseimg.png" },
  "membrane-wrap-lite": { label: "Membrane Wrap-Lite\u2122", image: "/productData3img.png" },
  // "membrane-wrap-hydro": { label: "Membrane Wrap Hydro", image: "/productData3img.png" },
  "xceed-tl-matrix": { label: "XCEED TL Matrix", image: "/Tissue.png" },
  endolumik: { label: "Endolumik™", image: "/endolumik.png" },
  "skeletal-dynamics": { label: "Skeletal Dynamics™", image: "/skeletal-dynamics.png" },
  "platform-innovations": { label: "Platform Innovations ACSIS", image: "/woundDefault.png" },
  biotissue: { label: "BioTissue™", image: "/biotissue.png" },
  telabio: { label: "TelaBio™", image: "/woundDefault.png" },
  "acera-surgical": { label: "Acera Surgical", image: "/acera.png" },
  "blazer-c-vertebral-augmentation-system": { label: "Blazer®", image: "/tela.png" },
  "endura-kt-local-anesthetic": { label: "Endura-KT™", image: "/biotissue.jpg" },
  "mugard-oral-mucoadhesive": { label: "MuGard™", image: "/woundDefault.png" },
};

const services = [
  {
    title: "Outpatient Products",
    items: ["amchoplast", "dermacyte", "ultramist","blazer-c-vertebral-augmentation-system", "endura-kt-local-anesthetic", "mugard-oral-mucoadhesive"],
    subSections: [
      {
        title: "BioLab",
        items: ["membrane-wrap", "membrane-wrap-lite", 
          // "membrane-wrap-hydro"
        ],
      },
    ],
  },
  {
    title: "Surgical / Hospital Products",
    items: ["endolumik", "skeletal-dynamics",  "biotissue", "telabio"],
    subSections: [
      {
        title: "Platform Innovations™",
        items: ["platform-innovations"],
      },
    ],
  },
];

export default function ServicesDropdown({ pathname, href }) {
  const [showServices, setShowServices] = useState(false);
  const [, setHoveredImage] = useState("/woundDefault.png");
  const [openSections, setOpenSections] = useState({});
  const [openSubSections, setOpenSubSections] = useState({});

  const isActive = pathname === href;

  const handleServiceHover = (serviceId) => {
    const service = serviceData[serviceId];
    setHoveredImage(service?.image || "/woundDefault.png");
  };

  const handleServiceLeave = () => {
    setHoveredImage("/woundDefault.png");
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleSubSection = (key) => {
    setOpenSubSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowServices(true)}
      onMouseLeave={() => {
        setShowServices(false);
        setHoveredImage("/woundDefault.png");
      }}
    >
      <Link
        href={href}
        className={`text-sm transition rounded-full px-4 py-2 ${
          isActive
            ? "text-white border border-gray-800 bg-[#101010]"
            : "text-white hover:text-white"
        }`}
      >
        360 Portfolio
      </Link>

      <div
        className={`absolute left-1/2 -translate-x-1/2 mt-1.5 w-[340px] bg-[#f5fdfe] text-black rounded-3xl shadow-lg p-3 transition-all duration-300 ease-in-out
        ${
          showServices
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="space-y-2">
          {services.map((section, i) => (
            <div key={section.title} className="space-y-1">
              <div
                className="flex items-center justify-start cursor-pointer hover:bg-[#e0f7fa] rounded-lg px-4 py-3 transition-all duration-200"
                onClick={() => toggleSection(i)}
              >
                <h3 className="font-semibold text-sm text-gray-900">{section.title}</h3>
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform duration-300 ${
                    openSections[i] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {openSections[i] && (
                <div className="text-xs text-gray-900 space-y-2 pl-4">
                  {section.subSections?.map((subSection) => (
                    <div key={subSection.title}>
                      <div
                        className="flex items-center justify-between cursor-pointer hover:bg-[#e0f7fa] rounded-lg px-4 py-2 transition-all duration-200"
                        onClick={() => toggleSubSection(`${section.title}-${subSection.title}`)}
                      >
                        <p className="text-[11px] font-bold text-gray-700 tm-symbol">
                          {subSection.title}
                        </p>
                        <ChevronDown
                          size={14}
                          className={`ml-2 transition-transform duration-300 ${
                            openSubSections[`${section.title}-${subSection.title}`]
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </div>
                      {openSubSections[`${section.title}-${subSection.title}`] && (
                        <ul className="space-y-0.5 pl-2">
                          {subSection.items.map((serviceId) => {
                            const service = serviceData[serviceId];
                            const serviceName = service?.label || serviceId;

                            return (
                              <li key={serviceId}>
                                <Link
                                  href={`/services/${serviceId}`}
                                  className="cursor-pointer hover:text-[#001e24] hover:bg-[#e0f7fa] rounded-lg transition-all duration-200 block px-4 py-2 tm-symbol"
                                  onMouseEnter={() => handleServiceHover(serviceId)}
                                  onMouseLeave={handleServiceLeave}
                                >
                                  {serviceName}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ))}

                  <ul className="space-y-0.5">
                    {section.items.map((serviceId) => {
                      const service = serviceData[serviceId];
                      const serviceName = service?.label || serviceId;

                      return (
                        <li key={serviceId}>
                          <Link
                            href={`/services/${serviceId}`}
                            className="cursor-pointer hover:text-[#001e24] hover:bg-[#e0f7fa] rounded-lg transition-all duration-200 block px-4 py-2 tm-symbol"
                            onMouseEnter={() => handleServiceHover(serviceId)}
                            onMouseLeave={handleServiceLeave}
                          >
                            {serviceName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#f5fdfe]" />
      </div>
    </div>
  );
}
