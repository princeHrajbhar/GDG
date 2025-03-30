"use client";

import { motion } from "framer-motion";

export default function TeamOutro() {
  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-white text-center px-6 pt-24 md:pt-32">
      {/* Background Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/sunny-meadow-landscape_1112-134.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.6)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl p-8 bg-black bg-opacity-50 rounded-xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-green-300"
        >
          Together, We Innovate. 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-300 mt-6"
        >
          Our team is **dedicated to revolutionizing farming with AI-driven solutions.** 
          Join us in building a **sustainable, tech-powered future for agriculture!**  
          The future of smart farming **starts with us.**
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="#join"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block px-8 py-4 bg-green-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition-all"
        >
          Join the Movement 🌱
        </motion.a>
      </div>
    </div>
  );
}
