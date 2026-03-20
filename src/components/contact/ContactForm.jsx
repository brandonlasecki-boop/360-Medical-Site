"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16  relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:px-18 md:mb-2 mb-1">

        {/* LEFT SIDE — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            We’re here to help
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-50 mb-10 text-sm leading-relaxed max-w-md"
          >
            If you have any questions, please feel free to contact us.
          </motion.p>

          {/* CONTACT ITEMS — stagger animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            {/* Phone */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-6"
            >
              {/* <div className="inline-flex items-center gap-4 border-b border-gray-50 pb-4 w-64">
                <Phone className="text-white" size={20} />
                <p className="text-sm">024 5668 7675</p>
              </div> */}
            </motion.div>

            {/* Mail */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-4 border-b border-gray-50 pb-4 w-64">
                <Mail className="text-white" size={20} />
                <p className="text-sm">info@360medical.net</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-6"
            >

              <div className="inline-flex items-center gap-4 pb-2">
                <MapPin className="text-white" size={20} />
                <p className="text-sm">
                  3900 N 10th St Suite 1050 <br /> McAllen, TX 78501
                </p>
              </div>
            </motion.div>

             {/* times */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-6"
            >

              <div className="inline-flex items-center gap-4 pb-2">
                <Clock className="text-white" size={20} />
                <div>
                  <p className="text-sm">Mon - Fri 8am - 5pm</p>
                  <p className="text-sm">Weekend closed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.div
  initial={false}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="bg-[#f4f4f4] text-black overflow-hidden rounded-lg shadow-lg"
>
          {/* FORM HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center py-9 border-b border-gray-300 bg-white"
          >
            <p className="text-xs tracking-widest text-black font-semibold">
              SEND A MESSAGE
            </p>
            <h3 className="text-4xl font-bold mt-3">Contact Us</h3>
          </motion.div>

          {/* FORM FIELDS */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="p-6 flex flex-col gap-4 bg-white"
            onSubmit={handleSubmit}
          >
            {status === "success" && (
              <p className="text-sm text-green-600 bg-green-50 py-2 px-3 rounded">
                Thank you! Your message has been sent. We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 py-2 px-3 rounded">
                Something went wrong. Please try again or email us directly at info@360medical.net.
              </p>
            )}

            {/* Name + Phone */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 text-sm px-3 py-3 bg-[#f4f4f4]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 text-sm px-3 py-3 bg-[#f4f4f4]"
              />
            </motion.div>

            {/* Email + Subject */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 text-sm px-3 py-3 bg-[#f4f4f4]"
              />
              <input
                type="text"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 text-sm px-3 py-3 bg-[#f4f4f4]"
              />
            </motion.div>

            {/* Message */}
            <motion.textarea
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              name="message"
              placeholder="Your message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 text-sm px-3 py-2 bg-[#f4f4f4]"
            />

            {/* Button */}
            <motion.button
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              type="submit"
              disabled={status === "loading"}
              className="bg-black text-white text-sm font-medium py-3 mt-2 hover:bg-gray-900 transition mb-7 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send a Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
