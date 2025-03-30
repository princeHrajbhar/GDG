"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaUsers, FaLightbulb, FaSeedling } from "react-icons/fa";
import dynamic from 'next/dynamic';

// Removed unused import: Outro

// Dynamically import Teamcard with no SSR
const Teamcard = dynamic(() => import('@/components/team/Teamcard'), {
  ssr: false,
  loading: () => <p className="text-white">Loading team members...</p>
});

export default function TeamIntro() {
  const [displayedText, setDisplayedText] = useState("");
  const [showTeam, setShowTeam] = useState(false);
  const teamRef = useRef(null);
  const fullText =
    "We are a team of passionate innovators, revolutionizing agriculture with technology, sustainability, and strategic solutions. Our mission is to create a self-sufficient farming ecosystem that empowers farmers and transforms the industry.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowTeam(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 md:px-16 pt-12 md:pt-20"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/sunny-meadow-landscape_1112-134.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content - Fixed Navbar Overlap */}
      <div className="relative z-10 max-w-4xl p-6 bg-black bg-opacity-40 rounded-lg shadow-xl">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          &ldquo;Innovate, Empower, Transform&rdquo;
        </motion.h1>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex space-x-6 md:space-x-8 text-4xl md:text-5xl mb-6 justify-center"
        >
          <FaUsers className="text-green-400" />
          <FaLightbulb className="text-yellow-400" />
          <FaSeedling className="text-green-300" />
        </motion.div>

        {/* Typing Effect for Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg leading-relaxed min-h-[120px]"
        >
          {displayedText}
        </motion.p>

        {/* Join Button */}
        <motion.a
          href="#join"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block px-6 py-3 bg-green-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition-all"
        >
          Join Our Team
        </motion.a>
      </div>

      {/* Team Members Section - Placeholder */}
      <div 
        ref={teamRef} 
        className="relative z-10 w-full mt-12 min-h-[300px] flex items-center justify-center"
      >
        {showTeam && <Teamcard />}
      </div>
    
    </div>
  );
}
