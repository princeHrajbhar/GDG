"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn as FaLinkedin, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt 
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-green-900 py-12 px-6 md:px-16 border-t border-green-300 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image src="/next.svg" alt="Logo" width={120} height={120} className="mb-4" />
          </motion.div>
          <p className="text-gray-600 text-sm md:text-base max-w-xs">
            Empowering farmers with AI-driven solutions for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-green-700">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li><Link href="/about" className="hover:text-green-600 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-green-600 transition">Services</Link></li>
            <li><Link href="/projects" className="hover:text-green-600 transition">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-green-600 transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-green-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-green-700">Contact Us</h3>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-green-600" />
              <span>info@aifarming.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-green-600" />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span>123 Green Field, Agrotech City</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4 text-green-700">Follow Us</h3>
          <div className="flex space-x-4">
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-green-600 hover:text-blue-500 transition">
              <FaFacebook size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-green-600 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-green-600 hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-green-600 hover:text-blue-700 transition">
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-green-600 hover:text-red-500 transition">
              <FaYoutube size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.2 }}
        className="text-center text-gray-500 mt-8 border-t border-green-300 pt-4 text-sm"
      >
        &copy; {new Date().getFullYear()} AI Farming Solutions. All rights reserved.
      </motion.div>
    </footer>
  );
}