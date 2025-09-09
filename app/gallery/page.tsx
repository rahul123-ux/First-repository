"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = [
  "/gallery1.webp", "/gallery2.webp", "/gallery3.webp", "/gallery4.webp",
  "/gallery5.webp", "/gallery6.webp", "/gallery7.webp", "/gallery9.webp",
  "/gallery10.webp", "/gallery11.webp", "/gallery12.webp", "/gallery13.webp",
  "/gallery14.webp", "/gallery15.webp", "/gallery16.webp", "/gallery17.webp",
  "/gallery18.webp", "/gallery19.webp", "/gallery20.webp", "/gallery21.webp",
  "/gallery22.webp", "/gallery24.webp",
];

const videos = [
  { src: "/video1-fixed.mp4", poster: "/video1-fixed-thumb.jpg" },
  { src: "/video2-fixed.mp4", poster: "/video2-fixed-thumb.jpg" },
  { src: "/video3-fixed.mp4", poster: "/video3-fixed-thumb.jpg" },
  { src: "/video4-fixed.mp4", poster: "/video4-fixed-thumb.jpg" },
  { src: "/video5-fixed-fixed.mp4", poster: "/video5-fixed-fixed-thumb.jpg" },
  { src: "/video6-fixed-fixed.mp4", poster: "/video6-fixed-fixed-thumb.jpg" },
  { src: "/gallery8-fixed.mp4", poster: "/gallery8-fixed-thumb.jpg" },
  { src: "/gallery27-fixed.mp4", poster: "/gallery27-fixed-thumb.jpg" },
  { src: "/gallery29-fixed.mp4", poster: "/gallery29-fixed-thumb.jpg" },
  { src: "/gallery23-fixed.mp4", poster: "/gallery23-fixed-thumb.jpg" },
  { src: "/gallery25-fixed.mp4", poster: "/gallery25-fixed-thumb.jpg" },
  { src: "/gallery26-fixed.mp4", poster: "/gallery26-fixed-thumb.jpg" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"pictures" | "videos">("pictures");
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-900">
      {/* Header */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our <span className="text-yellow-700">Gallery</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A glimpse of our catering work — crafted with love, passion, and attention to detail.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-8">
          {["pictures", "videos"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "pictures" | "videos")}
              className={`px-6 py-2 rounded-full font-medium transition cursor-pointer ${
                activeTab === tab
                  ? "bg-yellow-700 text-white shadow"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-20">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {activeTab === "pictures" &&
            images.map((src, i) => (
              <motion.div
                key={i}
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                onClick={() => setSelectedMedia(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}

          {activeTab === "videos" &&
            videos.map(({ src, poster }, i) => (
              <motion.div
                key={i}
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md cursor-pointer bg-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                onClick={() => setSelectedMedia(src)}
              >
                <video
                  src={src}
                  className="w-full h-full object-cover"
                  muted
                  controls
                  preload="metadata"
                  poster={poster}
                  aria-label={`Video ${i + 1}`}
                />
              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {selectedMedia.endsWith(".mp4") || selectedMedia.endsWith(".mov") ? (
                <video
                  src={selectedMedia}
                  controls
                  autoPlay
                  className="w-full rounded-xl shadow-lg"
                />
              ) : (
                <Image
                  src={selectedMedia}
                  alt="Selected Media"
                  width={1200}
                  height={800}
                  priority
                  className="w-full rounded-xl shadow-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
