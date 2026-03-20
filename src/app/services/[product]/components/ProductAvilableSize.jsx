"use client";
import React from "react";
import { motion } from "framer-motion";

const ProductAvailableSize = ({ product }) => {
  // Size data for each product
  const productSizes = {
    "xsonx-wound-hygiene": [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    "membrane-wrap-hydro": [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    simplimax: [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    "tri-membrane-wrap": [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    "xcell-amnio-matrix": [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    activate: [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    "amnio-amp-mp": [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    amchoplast: [
      {
        size: "14 mm disc",
        units: "(1.54 sqcm)",
        unitsname: "Total Surface Area",
      },
      { size: "2x2 cm", units: "(4 sqcm)", unitsname: "Total Surface Area" },
      { size: "2x3 cm", units: "(6 sqcm)", unitsname: "Total Surface Area" },
      { size: "3x3 cm", units: "(9 sqcm)", unitsname: "Total Surface Area" },
      { size: "4x4 cm", units: "(16 sqcm)", unitsname: "Total Surface Area" },
      { size: "4x6 cm", units: "(24 sqcm)", unitsname: "Total Surface Area" },
      { size: "4x8 cm", units: "(32 sqcm)", unitsname: "Total Surface Area" },
      { size: "6x8 cm", units: "(48 sqcm)", unitsname: "Total Surface Area" },
      {
        size: "10x10 cm",
        units: "(100 sqcm)",
        unitsname: "Total Surface Area",
      },
    ],
    "esano-aca": [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    "xceed-tl-matrix": [
      { size: "2x2 cm", units: "4", unitsname: "Units" },
      { size: "2x3 cm", units: "6", unitsname: "Units" },
      { size: "4x4 cm", units: "16", unitsname: "Units" },
      { size: "4x6 cm", units: "24", unitsname: "Units" },
      { size: "4x8 cm", units: "32", unitsname: "Units" },
    ],
    dermacyte: [
      { size: "2x2 cm", units: " (4 sqcm) ", unitsname: "Total Surface Area" },
      { size: "2x4 cm", units: " (8 sqcm) ", unitsname: "Total Surface Area" },
      { size: "4x4 cm", units: " (16 sqcm) ", unitsname: "Total Surface Area" },
      { size: "4x6 cm", units: " (24 sqcm) ", unitsname: "Total Surface Area" },
      { size: "4x8 cm", units: " (32 sqcm) ", unitsname: "Total Surface Area" },
    ],
    
  };

  const orderingInfo = {
    endolumik: [
      {
        partNumber: "EGCT40",
        description:
          "Endolumik Gastric Calibration Tube, 40 French (5 per box)",
      },
      {
        partNumber: "EGCT36",
        description:
          "Endolumik Gastric Calibration Tube, 36 French (5 per box)",
      },
      {
        partNumber: "EGCT40M",
        description:
          "Endolumik Gastric Calibration Tube, 40 French, M Series (5 per box)",
      },
      {
        partNumber: "EGCT36M",
        description:
          "Endolumik Gastric Calibration Tube, 36 French, M Series (5 per box)",
      },
    ],
    ultramist: [
      {
        partNumber: "CP-80040",
        description: "ultraMIST Applicator Heads (bx of 12)",
      },
      {
        partNumber: "CP-80037",
        description: "ultraMIST Cart Adapter",
      },
      {
        partNumber: "CP-80038",
        description: "ultraMIST Roll Stand",
      },
      {
        partNumber: "CP-80030",
        description: "ultraMIST System",
      },
    ],
   'blazer-c-vertebral-augmentation-system': [
      {
        partNumber: "ACC3120",
        description: "Blazer Bone Drill, 11G x 17cm",
      },
      {
        partNumber: "ACC3130",
        description: "Blazer Single Step Introducer, Diamond Trocar Tip, 9G x 16cm",
      },
      {
        partNumber: "ACC3140",
        description: "Blazer Single Step Introducer, Bevel Tip, 10GA x 16cm",
      },
      {
        partNumber: "BCN3120",
        description: "Blazer-C Vertebral Augmentation Kit",
      },
      {
        partNumber: "BZK3140",
        description: "Blazer-C Vertebral Augmentation Kit with Cement and Injection System",
      },
      {
        partNumber: "BZK3160",
        description: "Blazer-C Vertebral Augmentation Kit with MV Cement and Injection System",
      },
    ],
    "endura-kt-local-anesthetic": [
  {
    partNumber: "ENDKT-50ML-VIAL",
    description: "Endura-KT 50ml Vial - Tetracaine 0.2% / Lidocaine 0.4% Combination"
  },
  {
    partNumber: "ENDKT-EPI-SYR",
    description: "Endura-KT Epinephrine Syringe - 1ml Prefilled (0.2ml of 1:1000 / 200mcg)"
  },
  {
    partNumber: "ENDKT-BLUNT-NDL",
    description: "Endura-KT Blunt Needle for Epinephrine Addition"
  },
  {
    partNumber: "ENDKT-LABEL",
    description: "Endura-KT Green Reconstitution Label (for documenting Epinephrine addition)"
  },
  {
    partNumber: "ENDKT-COMPLETE",
    description: "Endura-KT Complete Kit - 50ml Vial, Epinephrine Syringe, Blunt Needle, and Green Label"
  }
],
"mugard-oral-mucoadhesive": [
  {
    partNumber: "MG-250ML",
    description: "MuGard Oral Mucoadhesive - 250ml Bottle"
  },
  {
    partNumber: "MG-500ML", 
    description: "MuGard Oral Mucoadhesive - 500ml Bottle"
  }
]
    
  };

  const orderingInfoThreeColum = {
  "platform-innovations": [
    {
      CatNumber: "4201",
      description: "Adjustable Curve Suction Irrigation Sleeve-Long (Robotic)*",
      dimensions: "7.75mm O.D x 440mm (L)",
    },
    {
      CatNumber: "4202",
      description: "Adjustable Curve Suction Irrigation Sleeve-Standard*",
      dimensions: "7.75mm O.D. x 320mm (L)",
    },
  ],
};

  const portfolioInfo = {
    "skeletal-dynamics": [
      "Wrist & Distal Radius Systems",
      "Elbow & Forearm Fixation",
      "Arthrodesis & Compression Screw Systems",
      "CMC Arthroplasty Solutions",
      "Intramedullary & Specialty Implants",
    ],
    // "platform-innovations": [
    //   "Colorectal Procedures",
    //   "Gynecologic Surgery",
    //   "Urologic Procedures",
    //   "Thoracic Surgery",
    //   "Robotic & Laparoscopic Cases",
    // ],
    "stability-biologics": [
      "Amniotic Membrane Grafts",
      "Structural Bone Allografts",
      "Cancellous & Cortical Bone Products",
      "Acellular Dermal Matrices",
      "Regenerative Biologic Solutions",
    ],
    // biotissue: [
    //   "Amniotic Membrane Grafts",
    //   "Structural Bone Allografts",
    //   "Cancellous & Cortical Bone Products",
    //   "Acellular Dermal Matrices",
    //   "Regenerative Biologic Solutions",
    // ],
    // telabio: [
    //   {
    //     name: "OviTex® Reinforced Tissue Matrix",
    //     description:
    //       "Biologic reinforcement matrices for hernia repair and abdominal wall reconstruction.",
    //   },
    //   {
    //     name: "OviTex PRS®",
    //     description:
    //       "Reinforced tissue matrix tailored for plastic and reconstructive surgery applications.",
    //   },
    //   {
    //     name: "OviTex LPR",
    //     description:
    //       "Configurations optimized for laparoscopic and robotic-assisted hernia repairs.",
    //   },
    //   {
    //     name: "LIQUIFIX™ Tissue Adhesive",
    //     description:
    //       "FDA-approved liquid fixation technology used to secure mesh during hernia procedures without penetrating tissue.",
    //   },
    //   {
    //     name: "NIVIS™ Fibrillar Collagen Pack",
    //     description:
    //       "Absorbable collagen matrix for surgical wound support and healing assistance.",
    //   },
    // ],
    telabio: [
      {
        name: "OviTex Core ",
        description:
          "OviTex Core is designed to reinforce primary hernia repairs where the device will not come into contact with viscera.",
      },
      {
        name: "OviTex 1S ",
        description:
          "OviTex 1S incorporates a smooth side that is designed to minimize tissue attachment and to reinforce primary hernia repairs where the device may come into contact with viscera (e.g. intraperitoneal).",
      },
      {
        name: "OviTex 2S",
        description:
          "OviTex 2S incorporates eight layers of tissue for added strength. The two smooth sides make it suitable for intraperitoneal placement.",
      },
      {
        name: "OviTex LPR",
        description:
          "OviTex LPR is designed specifically for use in minimally invasive procedures. The design also incorporates a smooth side making it suitable for intraperitoneal placement.",
      },
      {
        name: "OviTex IHR",
        description:
          "OviTex IHR is designed specifically for use in inguinal hernia repair procedures. The design also incorporates an anatomical and rectangular shape to suit surgeon preference.",
      },
    ],
  };

  const productSizesThreeColumn = {
    "membrane-wrap-lite": [
      { size: "6x8", sku: "ML0608", woundCoverage: "48cm²" },
    ],
    "membrane-wrap": [
      { size: "2x3", sku: "MW0203", woundCoverage: "6cm²" },
      { size: "4x4", sku: "MW0404", woundCoverage: "16cm²" },
      { size: "4x6", sku: "MW0406", woundCoverage: "24cm²" },
      { size: "4x8", sku: "MW0408", woundCoverage: "32cm²" },
      { size: "6x8", sku: "MW0608", woundCoverage: "48cm²" },
    ],
  };

  const biotissueCustomTable = {
  sections: [
    {
      header: "Neox RT - Hydrated, Room Temperature Ultra-Thick Amniotic Membrane Allograft",
      rows: [
        { col1: "NX-UR-2010", col2: "2.0 x 1.0 cm" },
        { col1: "NX-UR-2020", col2: "2.0 x 2.0 cm" },
        { col1: "NX-UR-3020", col2: "3.0 x 2.0 cm" },
        { col1: "NX-UR-3030", col2: "3.0 x 3.0 cm" },
        { col1: "NX-UR-4030", col2: "4.0 x 3.0 cm" },
        { col1: "NX-UR-6030", col2: "6.0 x 3.0 cm" },
        { col1: "NX-UR-8030", col2: "8.0 x 3.0 cm" },
      ]
    },
    {
      header: "Clarix Flo - Micronized Amniotic Membrane",
      rows: [
        { col1: "CR-FL-25MG", col2: "25 mg" },
        { col1: "CR-FL-50MG", col2: "50 mg" },
        { col1: "CR-FL-100MG", col2: "100 mg" },
      ]
    }
  ]
};

 const biotissueTable = product.id === "biotissue" ? biotissueCustomTable : null;


const sizes = productSizes[product.id] || productSizes["tri-membrane-wrap"];
const threeColumnSizes = productSizesThreeColumn[product.id] || null;
const ordering = orderingInfo[product.id] || null;
const threeColumnOrdering = orderingInfoThreeColum[product.id] || null;
const portfolio = portfolioInfo[product.id] || null;
const hasThreeColumns = threeColumnSizes && threeColumnSizes.length > 0;
const hasThreeColumnOrdering = threeColumnOrdering && threeColumnOrdering.length > 0;
const displayData = hasThreeColumns ? threeColumnSizes : (hasThreeColumnOrdering ? threeColumnOrdering : (ordering || sizes));
const unitsLabel = sizes?.[0]?.unitsname || "Units";

  const headingText = (ordering || threeColumnOrdering)
    ? "Ordering Information"
    : portfolio
      ? product.id === "platform-innovations"
        ? "Available Applications"
        : "Available Portfolio"
    : product.id === "biotissue"
      ? "Available Sizes" 
      : "Available Sizes";

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FBFC] to-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#0097B2] text-center mb-12"
        >
          {headingText}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          {portfolio ? (
            Array.isArray(portfolio) &&
            portfolio.length > 0 &&
            typeof portfolio[0] === "object" ? (
              <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
                <thead className="bg-[#0097B2]">
                  <tr>
                    <th className="py-4 px-10 text-left text-white font-semibold text-sm md:text-lg">
                      Portfolio Item
                    </th>
                    <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`border-b border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="py-4 px-6 text-gray-800 font-medium text-md md:text-lg">
                        {item.name}
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-md md:text-lg">
                        {item.description}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="bg-white border border-[#0097B2]/20 rounded-2xl shadow-lg p-6 md:p-10">
                <ul className="space-y-4 text-gray-800 text-md md:text-lg">
                  {portfolio.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0097B2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )

) : (
  <>
    {product.id === "biotissue" ? (
      <div className="space-y-0">
        {biotissueCustomTable.sections.map((section, idx) => (
          <table key={idx} className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
            <thead className="bg-[#0097B2]">
              <tr>
                <th colSpan="2" className="py-2 px-4 text-center text-white font-semibold text-sm md:text-lg">
                  {section.header}
                </th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, rowIdx) => (
                <motion.tr
                  key={rowIdx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: rowIdx * 0.05 }}
                  className={`border-b border-gray-200 ${
                    rowIdx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-2  text-gray-800 font-medium text-md md:text-lg text-center">{row.col1}</td>
                  <td className="py-1  text-gray-600 text-md md:text-lg text-center">{row.col2}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    ) : (
      <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
        <thead className="bg-[#0097B2]">
          <tr>
            {hasThreeColumnOrdering ? (
              <>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  CAT. NO.
                </th>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  Description
                </th>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  Dimensions
                </th>
              </>
            ) : ordering ? (
              <>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  Part Number
                </th>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  Description
                </th>
              </>
            ) : hasThreeColumns ? (
              <>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  Size
                </th>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  SKU
                </th>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  Wound Coverage
                </th>
              </>
            ) : (
              <>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  Product Size
                </th>
                <th className="py-4 px-6 text-left text-white font-semibold text-sm md:text-lg">
                  {unitsLabel}
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {(hasThreeColumns ? threeColumnSizes : (hasThreeColumnOrdering ? threeColumnOrdering : (ordering || sizes))).map(
            (item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                {hasThreeColumnOrdering ? (
                  <>
                    <td className="py-4 px-6 text-gray-800 font-medium text-md md:text-lg">
                      {item.CatNumber}
                    </td>
                    <td className="py-4 px-1 text-gray-600 text-md md:text-lg">
                      {item.description}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-md md:text-lg">
                      {item.dimensions}
                    </td>
                  </>
                ) : ordering ? (
                  <>
                    <td className="py-4 px-6 text-gray-800 font-medium text-md md:text-lg">
                      {item.partNumber}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-md md:text-lg">
                      {item.description}
                    </td>
                  </>
                ) : hasThreeColumns ? (
                  <>
                    <td className="py-4 px-6 text-gray-800 font-medium text-md md:text-lg">
                      {item.size}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-md md:text-lg">
                      {item.sku}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-md md:text-lg">
                      {item.woundCoverage}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-4 px-6 text-gray-800 font-medium text-md md:text-lg">
                      {item.size}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-md md:text-lg">
                      {item.units}
                    </td>
                  </>
                )}
              </motion.tr>
            ),
          )}
        </tbody>
      </table>
    )}
  </>
)}

        </motion.div>
      </div>
    </section>
  );
};

export default ProductAvailableSize;
