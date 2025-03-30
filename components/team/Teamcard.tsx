"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image

const teamMembers = [
  {
    name: "Prince Rajbhar",
    role: "Team Leader",
    image: "https://cdn.pixabay.com/photo/2024/08/16/05/27/ai-generated-8972767_1280.jpg",
    description: "Leads the team with strategy and execution to drive innovation and success.",
  },
  {
    name: "Ishan",
    role: "Technical Expert",
    image: "https://wp.scoopwhoop.com/wp-content/uploads/2023/05/343278765_597938558729068_9183821363708813012_n.jpg?w=819",
    description: "Specializes in technical problem-solving and project development.",
  },
  {
    name: "Priyanshu Dahiya",
    role: "Finance & Sponsorship Lead",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKxMKyRDL3w-PtMI7JOyb1HVO72u6cYKw8w&s",
    description: "Manages finances and sponsorships to ensure smooth team operations.",
  },
  {
    name: "Ayushi Pandey",
    role: "Marketing & Outreach",
    image: "https://www.funtalk.ai/funtalk/category/anime/female/avatar/bessie.jpg",
    description: "Handles marketing strategies and outreach to build strong partnerships.",
  },
];

export default function TeamSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12"
      >
        Meet Our Team
      </motion.h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={128} // Set fixed width
              height={128} // Set fixed height
              className="w-32 h-32 object-cover rounded-full border-4 border-green-500"
            />
            <h2 className="mt-4 text-2xl font-bold">{member.name}</h2>
            <p className="text-green-300">{member.role}</p>
            <p className="text-gray-300 mt-2">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
