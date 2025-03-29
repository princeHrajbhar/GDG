"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6 md:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-green-700"
      >
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8"
      >
        We are dedicated to transforming agriculture by empowering farmers, integrating technology, and fostering sustainable farming practices.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-green-700">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to revolutionize agriculture with sustainable and technology-driven solutions, ensuring prosperity for every farmer in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64"
        >
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E12AQGN2apEkIKD_w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708716242256?e=2147483647&v=beta&t=sBgvGLviPUt46umB69stjSRKZUMglBrMp1betKa4MOc"
            alt="Agriculture Vision"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 order-2 md:order-1"
        >
          <Image
            src="https://img.freepik.com/premium-photo/robots-working-harmony-with-humans-farm-using-ai-smart-agriculture-food-production_1354798-6833.jpg"
            alt="Sustainable Farming"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-1 md:order-2"
        >
          <h2 className="text-3xl font-bold text-green-700">Our Mission</h2>
          <p className="text-gray-600">
            We aim to support farmers with modern technologies, innovative farming techniques, and comprehensive knowledge to enhance their productivity and income.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-green-100 p-8 rounded-xl shadow-lg max-w-5xl mx-auto mt-12"
      >
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">Our Initiatives</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
          From government collaborations to tech-driven farming solutions, we actively work on multiple initiatives that uplift the agricultural sector.
        </p>
      </motion.div>
    </div>
  );
}
