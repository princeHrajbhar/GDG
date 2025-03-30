"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Prince Rajbhar",
    role: "Founder & Visionary",
    bio: "Leading the mission to empower farmers through technology and innovation.",
    image: "/images/team1.jpg",
  },
  {
    name: "Arpita Kaushik",
    role: "Marketing & Communication",
    bio: "Bridging the gap between farmers and modern solutions through strategic outreach.",
    image: "/images/team2.jpg",
  },
  {
    name: "Aniket Jain",
    role: "Operations & Logistics",
    bio: "Ensuring seamless execution of projects and real-time farmer support.",
    image: "/images/team3.jpg",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 md:px-16">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-green-700"
      >
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4"
      >
        We are a passionate team working towards revolutionizing agriculture with innovation and sustainability.
      </motion.p>

      {/* Team Members Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all"
          >
            {/* Image Section */}
            <div className="relative w-full h-60">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-green-700">{member.name}</h2>
              <h3 className="text-lg text-gray-500">{member.role}</h3>
              <p className="text-gray-600 mt-3">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
