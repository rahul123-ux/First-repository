"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-900 px-6 md:px-12 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-12"
      >
        Book Now
      </motion.h1>

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg space-y-8 text-center"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          We would love to make your special event truly memorable.  
          Reach out to us through the details below:
        </p>

        <address className="not-italic space-y-6">
          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <Phone className="h-6 w-6 text-yellow-700 shrink-0" />
            <a
              href="tel:+919781394701"
              className="text-lg font-medium text-gray-800 hover:underline"
            >
              +91 9781394701
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <Mail className="h-6 w-6 text-yellow-700 shrink-0" />
            <a
              href="mailto:beantsinghpawar77@gmail.com"
              className="text-lg font-medium text-gray-800 hover:underline break-all"
            >
              beantsinghpawar77@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-3">
            <MapPin className="h-6 w-6 text-yellow-700 shrink-0" />
            <span className="text-lg font-medium text-gray-800">
              Morinda, Kurali, Distt-Ropar
            </span>
          </div>
        </address>

        {/* CTA */}
        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+919781394701"
            className="inline-block bg-yellow-700 text-white px-8 py-3 rounded-full shadow hover:bg-yellow-800 transition"
          >
            Call Us Now
          </a>
          <a
            href="mailto:beantsinghpawar77@gmail.com"
            className="inline-block bg-yellow-100 text-yellow-800 px-8 py-3 rounded-full shadow hover:bg-yellow-200 transition"
          >
            Email Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
