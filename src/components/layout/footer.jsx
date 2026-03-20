import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

//src/components/layout/footer.jsx
export default function Footer() {
  // Service data mapping to match ServicesDropdown
  const serviceData = {
    "Xsonx® Wound Hygiene": {
      id: "xsonx-wound-hygiene",
      image: "/card2pic.png",
    },
    "Membrane Wrap": { id: "membrane-wrap", image: "/ghoseimg.png" },
    Simplimax: { id: "simplimax", image: "/productData3img.png" },
    "Tri-Membrane Wrap": { id: "tri-membrane-wrap", image: "/Tissue.png" },
    "XCELL Amnio Matrix": {
      id: "xcell-amnio-matrix",
      image: "/AmchoPlast.png",
    },
    Activate: { id: "activate", image: "/dr.image.avif" },
    "Amnio AMP-MP": { id: "amnio-amp-mp", image: "/card2pic.png" },
    "AmchoPlast™": { id: "amchoplast", image: "/AmchoPlast.png" },
    "Esano ACA": { id: "esano-aca", image: "/ghoseimg.png" },
    "Membrane Wrap Hydro": {
      id: "membrane-wrap-hydro",
      image: "/productData3img.png",
    },
    "XCEED TL Matrix™": { id: "xceed-tl-matrix", image: "/Tissue.png" },
    BioTissue: { id: "biotissue", image: "/card2pic.png" },
    TelaBio: { id: "telabio", image: "/AmchoPlast.png" },
    "Acera Surgical": { id: "acera-surgical", image: "/ghoseimg.png" },
  };

  const services = [
    {
      title: "Outpatient Products",
      items: [
        { name: "AmchoPlast™", sku: "amchoplast" },
        { name: "Dermacyte® Matrix", sku: "dermacyte" },
        { name: "UltraMIST®", sku: "ultramist" },
        { name: "Blazer-C Vertebral Augmentation System", sku: "blazer-c-vertebral-augmentation-system" },
        { name: "Endura-KT Local Anesthetic", sku: "endura-kt-local-anesthetic" },
        { name: "MuGard Oral Mucoadhesive", sku: "mugard-oral-mucoadhesive" },
        // { name: "Membrane Wrap Hydro", sku: "membrane-wrap-hydro" },
        // { name: "Amnio Amp", sku: "amnio-amp-mp" },
        // { name: "Microlyte®", sku: "microlyte" },
      ],
    },
    {
      title: "Surgical / Hospital Products",
      items: [
        { name: "Endolumik™", sku: "endolumik" },
        { name: "Skeletal Dynamics™", sku: "skeletal-dynamics" },
        { name: "BioTissue™", sku: "biotissue" },
        { name: "TelaBio™", sku: "telabio" },
        // { name: "Acera Surgical", sku: "acera-surgical" },
      ],
    },
  ];

  const bioLabsItems = [
    { name: "Membrane Wrap", sku: "membrane-wrap" },
    { name: "Membrane Wrap-Lite™", sku: "membrane-wrap-lite" },
    // { name: "Tri-Membrane Wrap", sku: "tri-membrane-wrap" },
    // { name: "Membrane Wrap Hydro", sku: "membrane-wrap-hydro" },
  ];

  const platformInnovationsItems = [
    { name: "Platform Innovations ACSIS", sku: "platform-innovations" },
  ];

  // Helper function to get service link
  const getServiceLink = (serviceItem) => {
    if (serviceItem?.sku) {
      // Encode SKU to avoid unsafe URL segments (defense-in-depth).
      return `/services/${encodeURIComponent(serviceItem.sku)}`;
    }
    const serviceName =
      typeof serviceItem === "string" ? serviceItem : serviceItem?.name;
    const service = serviceData[serviceName];
    if (service?.id) {
      return `/services/${service.id}`;
    }
    // Generate ID from service name if not in serviceData
    return `/services/${serviceName.toLowerCase().replace(/\s+/g, "-").replace(/®/g, "")}`;
  };
  return (
    <footer
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Rectangle 16.png')",
      }}
    >
      {/* Main footer content */}
      <div className="relative container mx-auto px-6 md:px-36">
        <div className="border-t-4 border-gray-400 border-double pt-8 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-2 mt-7">
            {/* Brand section */}
            <div className="md:col-span-1">
              <Link href="/">
                <div className="flex items-center gap-2 mb-4 cursor-pointer">
                  <img
                    src="/logo.png"
                    alt="360 Medical Logo"
                    className="h-12 w-12"
                  />
                  <span className="text-[#0097B2] text-2xl font-bold tracking-wide">
                    360 <span className="font-bold text-white">MEDICAL</span>
                  </span>
                </div>
              </Link>

              <h4 className="text-lg font-semibold mb-4 text-white">
                About Us
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                360 Medical is a leader in providing a broad range of innovative
                medical solutions, focusing on cutting-edge technology across
                various fields of healthcare.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick links
              </h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#0097B2] transition"
                  >
                    Our Mission & Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="hover:text-[#0097B2] transition"
                  >
                    Meet Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#0097B2] transition"
                  >
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#0097B2] transition"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://invoice.360medical.net/"
                    className="hover:text-[#0097B2] transition"
                  >
                    Payor Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://buy.stripe.com/fZeg0b2UR8bl3o4288"
                    className="hover:text-[#0097B2] transition"
                  >
                    Payment Link
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Outpatient Products
              </h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li className="text-gray-300 font-bold">Biolab</li>
                {bioLabsItems.map((serviceItem) => (
                  <li key={serviceItem.sku || serviceItem.name} className="pl-2">
                    <Link
                      href={getServiceLink(serviceItem)}
                      className="hover:text-[#0097B2] transition tm-symbol"
                    >
                      {serviceItem.name}
                    </Link>
                  </li>
                ))}
                {services[0].items.map((serviceItem) => (
                  <li key={serviceItem.sku || serviceItem.name}>
                    <Link
                      href={getServiceLink(serviceItem)}
                      className="hover:text-[#0097B2] transition tm-symbol"
                    >
                      {serviceItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Surgical / Hospital Products
              </h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li className="text-gray-300 font-bold">Platform Innovations™</li>
                {platformInnovationsItems.map((serviceItem) => (
                  <li key={serviceItem.sku || serviceItem.name} className="pl-2">
                    <Link
                      href={getServiceLink(serviceItem)}
                      className="hover:text-[#0097B2] transition tm-symbol"
                    >
                      {serviceItem.name}
                    </Link>
                  </li>
                ))}
                {services[1].items.map((serviceItem) => (
                  <li key={serviceItem.sku || serviceItem.name}>
                    <Link
                      href={getServiceLink(serviceItem)}
                      className="hover:text-[#0097B2] transition tm-symbol"
                    >
                      {serviceItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact us */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h4>
              <div className="space-y-4 text-sm font-light text-white">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span className="h-6 w-px bg-white/70" />
                  <p className="flex-1 hover:text-[#0097B2] transition cursor-pointer">
                    3900 N. 10ᵗʰ St. Suite 1050 McAllen, TX 78501
                  </p>
                </div>

                {/* Phone */}
                {/* <div className="flex items-center gap-3">
      <Phone className="w-4 h-4" />
      <span className="h-6 w-px bg-white/70" />
      <p className="flex-1 hover:text-[#0097B2] transition cursor-pointer">
        +8 (800) 123-4567
      </p>
    </div> */}

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span className="h-6 w-px bg-white/70" />
                  <p className="flex-1 hover:text-[#0097B2] transition cursor-pointer">
                    <Link
                      href="mailto:info@360medical.net"
                      className="hover:text-[#0097B2] transition"
                    >
                      info@360medical.net
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex gap-4 text-gray-200 text-sm mb-4 md:mb-0">
                <Link href="#" className="hover:text-white transition">
                  Help & FAQs
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </div>
              <p className="text-gray-200 text-sm">
                © 2026. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
