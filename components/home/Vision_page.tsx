"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const visionData = [
    {
        title: "AI-Powered Crop Monitoring 🌱",
        description: "Using AI-driven analytics, we help farmers monitor crop health in real-time, detect diseases early, and optimize yield.",
        image: "https://www.medianama.com/wp-content/uploads/2024/01/AI-agriculture.jpg", // AI drone monitoring crops
      },
      {
        title: "Smart Irrigation Systems 💧",
        description: "Our intelligent irrigation solutions ensure that water is used efficiently, reducing waste and improving sustainability.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPc5YnuE6_B8AuNhBmAf7j5iJlberwnBbUsg&s", // Smart irrigation system in field
      },
      {
        title: "Precision Farming with IoT �",
        description: "IoT sensors collect real-time data on soil conditions, weather patterns, and crop growth, ensuring optimal farming decisions.",
        image: "https://media.licdn.com/dms/image/v2/D4E12AQF8SOi2dR4Cyw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720317062697?e=2147483647&v=beta&t=OUy-m7XCSrNMvJfIdWZ_T9S3RTucnClJ2h014uFNoWc", // Farmer using IoT device in field
      },
      {
        title: "AI-Based Market Insights 📊",
        description: "We provide AI-driven market insights to help farmers get the best prices for their produce and reduce losses.",
        image: "https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2023/07/BP-AI-in-Agriculture-The-Future-of-Farming_body-im-3.jpg", // Data analytics dashboard for farming
      },
];

export default function VisionPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 md:px-16 py-12">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-700 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Vision: AI-Driven Farming 🚜
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We empower farmers with cutting-edge AI tools, IoT solutions, and smart farming techniques to enhance productivity and sustainability.
      </motion.p>

      {/* Vision Items with Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {visionData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated Image Section */}
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-green-500 shadow-md"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Animated Content Section */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-green-700">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
