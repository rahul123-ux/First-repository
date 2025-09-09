"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = [
  "/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg",
  "/gallery5.jpg", "/gallery6.jpg", "/gallery7.png", "/gallery9.JPG",
  "/gallery10.JPG", "/gallery11.JPG", "/gallery12.JPG", "/gallery13.JPG",
  "/gallery14.JPG", "/gallery15.JPG", "/gallery16.JPG", "/gallery17.JPG",
  "/gallery18.JPG", "/gallery19.jpg", "/gallery20.jpg", "/gallery21.jpg",
  "/gallery22.jpg", "/gallery24.jpg",
];

const videos = [
  "/video1.MP4", "/video2.MP4", "/video3.MP4", "/video4.MP4", "/video5.MP4",
  "/video6.MP4", "/gallery8.MOV", "/gallery27.MOV", "/gallery28.MOV",
  "/gallery29.MOV", "/gallery23.MP4", "/gallery25.MP4", "/gallery26.MP4",
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
          <button
            onClick={() => setActiveTab("pictures")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "pictures"
                ? "bg-yellow-700 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Pictures
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "videos"
                ? "bg-yellow-700 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Videos
          </button>
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
                  alt={`Work ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}

          {activeTab === "videos" &&
            videos.map((src, i) => (
              <motion.div
                key={i}
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md cursor-pointer bg-black flex items-center justify-center"
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
                  preload="metadata"
                  poster="/video-thumbnail.jpg" // fallback preview image
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg">
                  ▶ Play Video
                </div>
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
              {selectedMedia.endsWith(".mp4") || selectedMedia.endsWith(".MOV") ? (
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
