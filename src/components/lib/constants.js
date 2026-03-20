// src/lib/constants.js
export const NAV_LINKS = [
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Mission & Values", href: "/about" },
      { name: "Meet Our Team", href: "/teams" },
    ],
  },
  {
    name: "360 Portfolio",
    href: "/services",
    sections: [
      {
        title: "Outpatient Products",
        items: [
          { name: "AmchoPlast™", href: "/services/amchoplast" },
          { name: "Dermacyte® Matrix", href: "/services/dermacyte" },
          { name: "UltraMIST®", href: "/services/ultramist" },
          { name: "Blazer®", href: "/services/blazer-c-vertebral-augmentation-system" },
          { name: "Endura-KT™", href: "/services/endura-kt-local-anesthetic" },
          { name: "MuGard™", href: "/services/mugard-oral-mucoadhesive" },
        ],
        subSections: [
          {
            title: "BioLab",
            items: [
              { name: "Membrane Wrap™", href: "/services/membrane-wrap" },
              { name: "Membrane Wrap-lite™", href: "/services/membrane-wrap-lite" },
              // { name: "Membrane Wrap Hydro", href: "/services/membrane-wrap-hydro" },
              // { name: "Tri-Membrane Wrap", href: "/services/tri-membrane-wrap" },
              // { name: "Membrane Wrap Hydro", href: "/services/membrane-wrap-hydro" },
            ],
          },
        ],
      },
      {
        title: "Surgical / Hospital Products",
        items: [
          { name: "Endolumik™", href: "/services/endolumik" },
          { name: "Skeletal Dynamics™", href: "/services/skeletal-dynamics" },
          { name: "Platform Innovations™", href: "/services/platform-innovations" },
          { name: "BioTissue™", href: "/services/biotissue" },
          { name: "TelaBio™", href: "/services/telabio" },
        ],
        subSections: [
          {
            title: "Platform Innovations™",
            items: [
              { name: "Platform Innovations ACSIS", href: "/services/platform-innovations" },
            ],
          },
        ],
      },
    ],
  },
  // { name: "360 Partners", href: "#" },
  { name: "360 Portal", href: "https://app.360medical.net/" },
  { name: "SIM360", href: "/sim-360" },
  // { name: "Sim 360", href: "#" },
  { name: "Vault360", href: "/vault-360" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
];
