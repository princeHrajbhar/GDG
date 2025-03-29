"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { category: "Small Farmers", percentage: 45 },
  { category: "Medium Farmers", percentage: 35 },
  { category: "Large Farmers", percentage: 20 },
  { category: "Irrigated Land", percentage: 60 },
  { category: "Rainfed Land", percentage: 40 },
  { category: "Organic Farming", percentage: 15 },
  { category: "Chemical Farming", percentage: 85 },
];

const COLORS = ["#15803d", "#34d399", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#065f46"];

export default function FarmerAnalytics() {
  // Removed unused setChartData since we're not modifying the data
  const [chartData] = useState(data);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-8 px-4 md:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-green-700"
      >
        Indian Farmer & Agricultural Analytics
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-base text-gray-700 max-w-2xl mx-auto mb-6"
      >
        Explore key statistics about India&apos;s farming community and agricultural conditions. 
        Analyze the distribution of farmer types, land irrigation, and farming techniques.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto border border-gray-200"
      >
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#15803d"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}