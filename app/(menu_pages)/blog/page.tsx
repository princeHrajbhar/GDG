"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaSearch,
  FaLeaf,
  FaRobot,
  FaChartLine,
  FaTractor,
  FaWater,
  FaSeedling,
  FaUserFriends,
  FaCalendarAlt,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogCategory {
  name: string;
  icon: React.ReactNode;
  count: number;
}

const featuredPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI-Powered Crop Yield Prediction",
    excerpt: "How machine learning is revolutionizing harvest forecasting with 95% accuracy",
    category: "AI Solutions",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "https://www.rsipvision.com/wp-content/uploads/2018/12/Farmer-using-tablet-corn-planting.jpg"
  },
  {
    id: 2,
    title: "Smart Irrigation Systems 2024",
    excerpt: "The latest IoT devices that reduce water usage by 40% while increasing yields",
    category: "Smart Farming",
    date: "April 28, 2024",
    readTime: "6 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IfXa2gBTsEuqNjCmNAqH8LCIJ03ls9lmcA&s"
  },
  {
    id: 3,
    title: "Robotic Harvesting Breakthroughs",
    excerpt: "How computer vision is enabling 24/7 harvesting operations",
    category: "Farm Robotics",
    date: "April 10, 2024",
    readTime: "10 min read",
    image: "https://static.independent.co.uk/2021/03/27/14/Robotic%20faming%20and%20crops%202.jpg"
  }
];

const categories: BlogCategory[] = [
  { name: "AI Farming", icon: <FaRobot />, count: 28 },
  { name: "Precision Ag", icon: <FaChartLine />, count: 42 },
  { name: "Farm Robotics", icon: <FaTractor />, count: 19 },
  { name: "Water Tech", icon: <FaWater />, count: 31 },
  { name: "Organic Tech", icon: <FaLeaf />, count: 24 },
  { name: "Crop Science", icon: <FaSeedling />, count: 37 }
];

export default function BlogLanding() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            <FaLeaf />
          </motion.div>
        ))}
      </motion.div>

      {/* Header */}
      <header className="relative bg-green-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/grass.png"
            alt="Drone flying over farm"
            fill
            className="object-cover opacity-30"
            quality={100}
            priority
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The Future of <span className="text-yellow-300">Farming</span> with AI
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Cutting-edge agricultural insights, AI innovations, and smart farming techniques
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search for farming tech, AI solutions..."
              className="w-full px-6 py-4 pr-12 rounded-full bg-white bg-opacity-90 text-green-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-green-700 text-xl" />
          </motion.div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Featured Posts */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-900 mb-8 flex items-center"
          >
            <motion.span 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-3 text-green-600"
            >
              <FaLeaf />
            </motion.span>
            Featured Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{ transform: hoveredPost === post.id ? "scale(1.1)" : "scale(1)" }}
                  />
                  <div className="absolute bottom-0 left-0 bg-green-700 text-white px-3 py-1 text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" /> {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <motion.div
                    animate={{ 
                      x: hoveredPost === post.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a 
                      href="#" 
                      className="text-green-600 font-medium flex items-center hover:text-green-800"
                    >
                      Read more <FaArrowRight className="ml-2" />
                    </a>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-900 mb-8"
          >
            Explore Categories
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${activeCategory === category.name ? 'bg-green-600 text-white' : 'bg-white text-green-800 hover:bg-green-100'}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <motion.div
                  animate={{ 
                    scale: activeCategory === category.name ? 1.2 : 1,
                    rotate: activeCategory === category.name ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl mb-2"
                >
                  {category.icon}
                </motion.div>
                <h3 className="font-medium text-center">{category.name}</h3>
                <span className="text-sm mt-1">{category.count} articles</span>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-900 mb-8 flex items-center"
          >
            <motion.span 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-3 text-green-600"
            >
              <FaUserFriends />
            </motion.span>
            Most Popular Reads
          </motion.h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className={`p-6 flex flex-col md:flex-row items-center border-b border-gray-100 last:border-0 hover:bg-green-50 transition-colors ${item === 1 ? 'bg-green-50' : ''}`}
              >
                <div className="text-2xl font-bold text-green-600 mr-6 mb-4 md:mb-0 w-10 text-center">
                  {item}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-900 mb-2">How AI Detected Crop Disease 2 Weeks Before Farmers</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" /> May {item}, 2024
                    </span>
                    <span>•</span>
                    <span>8 min read</span>
                    <span>•</span>
                    <span className="text-green-600">AI Farming</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Case study shows how computer vision algorithms can identify plant stress before visible symptoms appear...
                  </p>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="text-green-600 font-medium flex items-center whitespace-nowrap">
                    Read <FaArrowRight className="ml-2" />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-green-700 text-white rounded-xl p-8 md:p-12 shadow-xl mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <FaLeaf className="text-4xl text-yellow-300" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Farming Revolution</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get weekly updates on AI agriculture, exclusive case studies, and smart farming tips
            </p>
            
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white bg-opacity-90 text-green-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg"
                type="button"
              >
                Subscribe Now
              </motion.button>
            </motion.form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaLeaf className="mr-2 text-yellow-300" /> AgriAI Blog
              </h3>
              <p className="text-green-200">
                Empowering farmers with artificial intelligence and cutting-edge agricultural technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Articles</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Categories</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.slice(0, 4).map(category => (
                  <li key={category.name}>
                    <a href="#" className="text-green-200 hover:text-white transition flex items-center">
                      {category.icon} <span className="ml-2">{category.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-green-200 hover:text-white text-xl transition">
                  <FaFacebook />
                </a>
                <a href="#" className="text-green-200 hover:text-white text-xl transition">
                  <FaTwitter />
                </a>
                <a href="#" className="text-green-200 hover:text-white text-xl transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-green-200 hover:text-white text-xl transition">
                  <FaLinkedin />
                </a>
              </div>
              <p className="text-green-200">contact@agriaiblog.com</p>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
            &copy; {new Date().getFullYear()} AgriAI Blog. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}