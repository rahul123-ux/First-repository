"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Mail, Instagram, MessageCircle, Facebook } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 shadow-sm bg-white sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-700">
          Royal Caterers<span className="text-gray-800">& Planners</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-yellow-700">Home</Link>
          <Link href="/about" className="hover:text-yellow-700">About</Link>
          <Link href="/contact" className="hover:text-yellow-700">Contact</Link>
          <Link href="/gallery" className="hover:text-yellow-700">Gallery</Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="bg-yellow-700 text-white px-4 py-2 rounded-full shadow hover:bg-yellow-800"
          >
            Book Now
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-yellow-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-yellow-700" />
            ) : (
              <Menu className="h-6 w-6 text-yellow-700" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-md p-6 flex flex-col gap-4 text-gray-700 font-medium"
        >
          <Link href="/" className="hover:text-yellow-700">Home</Link>
          <Link href="/about" className="hover:text-yellow-700">About</Link>
          <Link href="/contact" className="hover:text-yellow-700">Contact</Link>
          <Link href="/gallery" className="hover:text-yellow-700">Gallery</Link>
          <Link href="/book" className="hover:text-yellow-700">Book Now</Link>
        </motion.nav>
      )}

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 px-6 md:px-12 py-16 items-center flex-grow">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <span className="inline-block border px-4 py-1 rounded-full text-sm border-gray-400">
            WELCOME TO ROYAL CATERERS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Book <span className="text-yellow-700">ROYAL CATERERS</span> For <br />
            Your Dream Event
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Link
              href="/book"
              className="bg-yellow-700 text-white px-6 py-3 rounded-full hover:bg-yellow-800 shadow"
            >
              Book Now
            </Link>
            <Link
              href="/about"
              className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full hover:bg-yellow-200 shadow"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* Right Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-center items-center"
        >
          {["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg"].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative aspect-square w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group mx-auto"
            >
              <Image
                src={src}
                alt={`Catering Image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                priority={i === 0} // preload first image
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-700 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Royal Caterers & Planners</h2>
            <p className="text-sm opacity-90">
              Excellence in catering & event planning for your special occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/book" className="hover:underline">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
            <p className="flex items-center justify-center md:justify-start gap-2"><Phone size={18}/> +91 9781394701</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><Mail size={18}/> beantsinghpawar77@gmail.com</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><Instagram size={18}/> @royalcaterers</p>
            <p className="flex items-center justify-center md:justify-start gap-2"><Facebook size={18}/> @royalcaterers</p>
          </div>
        </div>

        <div className="text-center text-sm opacity-80 mt-10">
          © {new Date().getFullYear()} Royal Caterers & Planners. All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9781394701"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}
