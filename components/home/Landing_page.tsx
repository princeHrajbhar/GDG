"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const content = [
  {
    title: "Empowering Farmers with Innovation 🌱",
    vision: "Bringing technology to the heart of agriculture",
    description: "We help farmers adopt smart farming techniques to improve productivity and sustainability.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILVRVa_5hG0SVILqaWJ2Rv0HqZ2thFhVmaw&s",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    title: "Sustainable Farming for a Better Future 🌾",
    vision: "Innovative solutions for modern agriculture",
    description: "From AI-driven analytics to precision farming, we equip farmers with the latest technologies.",
    image: "https://images.forbesindia.com/blog/wp-content/uploads/2023/01/Agriculture-is-a-potential-solution-to-meet-food-and-climategoals.jpg",
    buttonText: "Join Us",
    buttonLink: "/join",
  },
  {
    title: "The Future of Agriculture 🚜",
    vision: "Merging traditional wisdom with modern science",
    description: "We provide insights, data, and solutions to revolutionize the agricultural industry.",
    image: "https://i.pinimg.com/736x/44/af/cc/44afcc4da4ed6700e84134ccb7fe3b09.jpg",
    buttonText: "Get Started",
    buttonLink: "/start",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 bg-gray-50 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl items-start gap-10"> {/* Changed items-center to items-start */}
        {/* Left Side - Completely removed top spacing */}
        <div className="relative flex flex-col justify-start items-center md:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">{content[index].title}</h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-2">{content[index].vision}</h2>
              <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">{content[index].description}</p>

              <Link href={content[index].buttonLink}>
                <motion.button
                  className="mt-6 bg-green-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition hover:bg-green-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content[index].buttonText}
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 sm:border-8 border-green-500 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={content[index].image}
                alt="Agriculture"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}