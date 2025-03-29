"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const initiatives = [
  { 
    name: "Govt Schemes", 
    description: "Various government programs providing subsidies and support to farmers.", 
    image: "https://i.pinimg.com/736x/93/16/c4/9316c47d689f2b6fb9850adf1ebf98a6.jpg" 
  },
  { 
    name: "NGO Support", 
    description: "Non-profits working to educate and empower farmers with modern techniques.", 
    image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67363257f3ab95001dd5daba.png" 
  },
  { 
    name: "Tech Startups", 
    description: "Agri-tech companies offering smart solutions for better yield and sustainability.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy2Fyw4CLO0WfhJQ-lnw7mYM7fX_EHMsgmQ&s" 
  },
];

export default function FarmerSupport() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-8 px-4 md:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-green-700"
      >
        Initiatives Improving Farmers&apos; Lives
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-base text-gray-700 max-w-2xl mx-auto mb-6"
      >
        Explore key efforts by organizations, government, and startups dedicated to enhancing the
        agricultural landscape and farmers&apos; well-being.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {initiatives.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-40 rounded-lg mb-4 overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-bold text-green-700 mb-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}