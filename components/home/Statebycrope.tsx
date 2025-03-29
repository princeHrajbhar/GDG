"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState } from "react";

const data = [
  { state: "Punjab", production: 520 },
  { state: "Uttar Pradesh", production: 680 },
  { state: "Madhya Pradesh", production: 450 },
  { state: "Rajasthan", production: 380 },
  { state: "Karnataka", production: 470 },
  { state: "Maharashtra", production: 600 },
  { state: "Tamil Nadu", production: 510 },
  { state: "Gujarat", production: 490 },
  { state: "West Bengal", production: 520 },
  { state: "Bihar", production: 560 }
];

export default function CropAnalytics() {
  const [chartData, setChartData] = useState(data);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-8 px-4 md:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-green-700"
      >
        Crop Production Analytics by State
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-base text-gray-700 max-w-2xl mx-auto mb-6"
      >
        Explore insights into India&apos;s agricultural landscape with interactive crop production data.
        Sort and visualize the data dynamically to uncover state-wise trends.
      </motion.p>

      <div className="flex justify-center mb-4 gap-4">
        <button
          onClick={() => setChartData([...data].sort((a, b) => b.production - a.production))}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Sort by Production
        </button>
        <button
          onClick={() => setChartData([...data].reverse())}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Reverse Order
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto border border-gray-200"
      >
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" tick={{ fill: "#15803d" }} />
            <YAxis tick={{ fill: "#15803d" }} />
            <Tooltip cursor={{ fill: "#e0e7ff" }} />
            <Bar dataKey="production" fill="#15803d" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}