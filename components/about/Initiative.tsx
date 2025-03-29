"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const initiatives = [
  {
    title: "Smart Farming",
    icon: "🌱",
    desc: "Implementing AI, IoT, and data-driven techniques to improve crop yield and sustainability.",
    image: "https://wi-sun.org/wp-content/uploads/smart-farming.jpg",
  },
  {
    title: "Financial Aid",
    icon: "💰",
    desc: "Connecting farmers with government subsidies, micro-loans, and insurance for better financial stability.",
    image: "https://www.agriculture.com/thmb/lVhHuSRIOpe_MZwrhz3S6Wx93EI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iStock-452638585-2000-5136ed2aa3f84212b5a12976114d2848.jpg",
  },
  {
    title: "Agri-Education",
    icon: "📚",
    desc: "Providing workshops, training programs, and knowledge sharing to modernize farming practices.",
    image: "https://www.invertisuniversity.ac.in/Uploads/image/4308imguf_DSC_8292.jpg",
  },
  {
    title: "Community Farming",
    icon: "🤝",
    desc: "Encouraging collective farming efforts to share knowledge, resources, and boost productivity.",
    image: "https://unity.edu/wp-content/uploads/2023/03/Community-Urban-Agriculture-scaled.jpg",
  },
  {
    title: "Sustainable Agriculture",
    icon: "🌎",
    desc: "Promoting eco-friendly methods such as organic farming, water conservation, and soil management.",
    image: "https://www.undp.org/sites/g/files/zskgke326/files/migration/sgtechcentre/Sustainable-Digital-Agri-thumbnail.JPG",
  },
  {
    title: "Market Access",
    icon: "📈",
    desc: "Helping farmers connect directly with markets, reducing middlemen, and improving profit margins.",
    image: "https://static.vecteezy.com/system/resources/previews/036/190/923/non_2x/ai-generated-a-female-shopper-examining-fresh-fruits-and-vegetables-at-a-lively-farmer-s-market-photo.jpeg",
  },
];

export default function Initiatives() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 md:px-16">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-green-700"
      >
        Our Initiatives for Agriculture & Farmers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-4"
      >
        We are dedicated to enhancing the lives of farmers by leveraging technology, education, and community-driven solutions.
      </motion.p>

      {/* Initiative Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
        {initiatives.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all"
          >
            {/* Image Tile */}
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <div className="text-5xl">{item.icon}</div>
              <h2 className="text-2xl font-bold text-green-700 mt-4">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
