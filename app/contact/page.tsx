"use client";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] px-6 md:px-12 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Get in <span className="text-yellow-700">Touch</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We&apos;d love to hear from you. Please reach out with any questions or inquiries.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <address className="not-italic space-y-8">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-yellow-700 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
              <p className="text-gray-600">Morinda, Kurali, Distt-Ropar</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-yellow-700 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
              <p>
                <a href="tel:+919781394701" className="text-gray-600 hover:underline">
                  +91 9781394701
                </a>
              </p>
              <p>
                <a href="tel:+918968182177" className="text-gray-600 hover:underline">
                  +91 8968182177
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-yellow-700 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
              <p>
                <a
                  href="mailto:beantsinghpawar77@gmail.com"
                  className="text-gray-600 hover:underline"
                >
                  beantsinghpawar77@gmail.com
                </a>
              </p>
            </div>
          </div>
        </address>

        {/* Contact Image */}
        <div className="relative w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/image.webp"
            alt="Royal Caterers Contact Office"
            fill
            priority={false}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
      <section className="flex justify-center py-12 px-4">
        <Link href="/">
          <button className="bg-yellow-700 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg shadow-md hover:bg-yellow-800 transition w-full sm:w-auto cursor-pointer">
            Back to Home
          </button>
        </Link>
      </section>

    </div>
  );
}
