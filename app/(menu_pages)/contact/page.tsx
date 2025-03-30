"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaLeaf,
  FaTractor,
  FaSeedling,
  FaWater,
  FaChevronDown
} from "react-icons/fa";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null); // Specify type for activeAccordion

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Explicitly define the type
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { // Explicitly define the type
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleAccordion = (index: number) => { // Explicitly define the type
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const services = [
    {
      icon: <FaTractor />,
      title: "Farm Equipment",
      description: "Sales, rentals, and maintenance of agricultural machinery"
    },
    {
      icon: <FaSeedling />,
      title: "Crop Consulting",
      description: "Optimize your yields and soil health with expert advice"
    },
    {
      icon: <FaWater />,
      title: "Irrigation Systems",
      description: "Smart water management solutions for your farm"
    },
    {
      icon: <FaLeaf />,
      title: "Organic Solutions",
      description: "Sustainable farming practices and certifications"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div>

      {/* Hero Section */}
      <div className="relative bg-green-700 text-white py-32 overflow-hidden">
        {/* Floating leaves animation */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500 text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 1000],
                rotate: [0, 360],
                opacity: [0.3, 0]
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

        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/grass.png"
            alt="Farm field background"
            fill
            className="object-cover opacity-30"
            quality={90}
            priority
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our <span className="text-yellow-300">Agriculture</span> Experts
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Get in touch for farming solutions, equipment inquiries, or agricultural consultancy
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a 
              href="#contact-form" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            id="contact-form"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white p-8 rounded-lg shadow-xl border border-green-100 transform hover:-translate-y-2 transition duration-500"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-green-800 mb-6 flex items-center"
            >
              <motion.span 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block mr-3"
              >
                <FaLeaf className="text-green-600" />
              </motion.span>
              Send Us a Message
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                  required
                />
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 appearance-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Equipment Purchase">Equipment Purchase</option>
                  <option value="Crop Consultation">Crop Consultation</option>
                  <option value="Irrigation Systems">Irrigation Systems</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5} // Ensure this is a number
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <motion.span 
                  animate={{ x: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-3"
                >
                  <FaEnvelope />
                </motion.span>
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white p-8 rounded-lg shadow-xl border border-green-100 transform hover:-translate-y-2 transition duration-500"
            >
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-green-800 mb-6"
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <FaPhone />,
                    title: "Phone",
                    content: ["+1 (800) 123-4567", "+1 (800) 987-6543 (Emergency)"]
                  },
                  {
                    icon: <FaEnvelope />,
                    title: "Email",
                    content: ["info@agrosolutions.com", "support@agrosolutions.com"]
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Address",
                    content: ["123 Farm Valley Road", "Agricultural District, CA 90210"]
                  },
                  {
                    icon: <FaClock />,
                    title: "Business Hours",
                    content: [
                      "Monday-Friday: 8:00 AM - 6:00 PM",
                      "Saturday: 9:00 AM - 2:00 PM",
                      "Sunday: Emergency calls only"
                    ]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="bg-green-100 p-3 rounded-full mr-4"
                    >
                      <div className="text-green-600 text-xl">{item.icon}</div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      {item.content.map((text, i) => (
                        <p key={i} className="text-gray-600">{text}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Highlights - Accordion */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-green-800 text-white p-8 rounded-lg shadow-xl"
            >
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold mb-6"
              >
                Our Agricultural Services
              </motion.h2>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="border-b border-green-700 pb-4 last:border-0"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <div className="flex items-center">
                        <motion.div 
                          animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                          className="bg-green-700 p-2 rounded-full mr-4"
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="font-semibold">{service.title}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      >
                        <FaChevronDown className="text-green-300" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 pl-12 text-green-200">{service.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-white p-6 rounded-lg shadow-xl border border-green-100"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-green-800 mb-6"
          >
            Our Location
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-96 w-full bg-gray-200 rounded-md overflow-hidden relative"
          >
            {/* Replace with your actual map component or iframe */}
            <div className="h-full w-full flex items-center justify-center bg-green-100">
              <p className="text-gray-600">Map of our agricultural center location</p>
            </div>
            
            {/* Animated map marker */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-4xl"
            >
              <FaMapMarkerAlt />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Emergency Contact Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-red-600 text-white p-6 rounded-lg shadow-xl"
        >
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            <motion.div 
              className="flex items-center mb-4 md:mb-0"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
                className="mr-4"
              >
                <FaPhone className="text-2xl" />
              </motion.div>
              <div>
                <h3 className="font-bold text-xl">24/7 Emergency Agricultural Support</h3>
                <p>For urgent crop diseases, equipment failures, or irrigation emergencies</p>
              </div>
            </motion.div>
            
            <motion.a 
              href="tel:+18009876543" 
              className="bg-white text-red-600 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 flex items-center"
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="mr-2"
              >
                <FaPhone />
              </motion.span>
              Call Now: (800) 987-6543
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}