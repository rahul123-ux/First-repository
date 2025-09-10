"use client";
import Image from "next/image";
import Link from "next/link";
import { Users, Award, Heart } from "lucide-react";

// Example blur placeholder (1x1 px base64). 
// Replace with proper low-res images for each image if available.
const blurPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAgMBAQAYjR4AAAAASUVORK5CYII=";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-900">
      {/* Hero Section */}
      <section className="bg-yellow-700 text-white py-20 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-yellow-100">
          We bring people together through food, creating unforgettable catering experiences for every event.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 py-16 items-center">
        {/* Left Image */}
        <div className="relative w-full h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/image.webp"
            alt="About Catering"
            width={600}
            height={400}
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurPlaceholder}
            priority
          />
        </div>

        {/* Right Text */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Royal Caterers was founded with one simple mission: to make every occasion
            special through delicious food and exceptional service. Over the years,
            we’ve served weddings, corporate events, private parties, and more —
            always with passion and dedication.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team of experienced chefs and event planners work closely with you
            to craft menus that delight your guests, while ensuring seamless service
            from start to finish.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose <span className="text-yellow-700">Us</span>
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          We believe in creating memorable experiences through food. Here’s what makes us stand out.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-[#fdfbf7] rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <Users className="h-12 w-12 mx-auto text-yellow-700" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Experienced Team</h3>
            <p className="mt-2 text-gray-600">
              Our chefs and planners bring years of experience to make your event seamless.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fdfbf7] rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <Award className="h-12 w-12 mx-auto text-yellow-700" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Quality Service</h3>
            <p className="mt-2 text-gray-600">
              We pride ourselves on delivering premium catering with attention to detail.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fdfbf7] rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <Heart className="h-12 w-12 mx-auto text-yellow-700" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Customer Focused</h3>
            <p className="mt-2 text-gray-600">
              Your satisfaction is our priority. We tailor every detail to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Navigation Example */}
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