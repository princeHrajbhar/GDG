import { FaLeaf, FaSeedling, FaTint, FaCloudSunRain, FaChartLine, FaRobot, FaTruck, FaSatelliteDish, FaLanguage } from 'react-icons/fa';

interface AIService {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export default function AIServicesPage() {
  const services: AIService[] = [
    {
      title: "AI-Powered Crop Disease Detection",
      description: "Early detection of plant diseases using computer vision and machine learning to prevent crop losses.",
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      benefits: [
        "Real-time disease identification",
        "Reduces pesticide overuse",
        "Increases crop yield",
        "Mobile app integration"
      ]
    },
    {
      title: "Precision Agriculture & Soil Analysis",
      description: "Advanced soil health monitoring and nutrient management for optimized farming practices.",
      icon: <FaSeedling className="text-brown-600 text-4xl" />,
      benefits: [
        "Soil nutrient mapping",
        "Custom fertilizer recommendations",
        "Reduces input costs",
        "Improves soil health long-term"
      ]
    },
    {
      title: "AI-Based Weather and Yield Prediction",
      description: "Accurate hyperlocal weather forecasts and yield predictions using historical data and AI models.",
      icon: <FaCloudSunRain className="text-blue-500 text-4xl" />,
      benefits: [
        "7-day farm-specific forecasts",
        "Yield estimation with 90%+ accuracy",
        "Planting/harvesting timing advice",
        "Risk mitigation"
      ]
    },
    {
      title: "Market Price Prediction & Smart Advisory",
      description: "AI-driven market insights to help farmers get the best prices for their produce.",
      icon: <FaChartLine className="text-purple-600 text-4xl" />,
      benefits: [
        "Real-time price tracking",
        "Future price trends",
        "Best selling time recommendations",
        "Nearby market comparisons"
      ]
    },
    {
      title: "AI-Enabled Smart Irrigation System",
      description: "Automated irrigation that responds to soil moisture, weather forecasts, and crop needs.",
      icon: <FaTint className="text-blue-300 text-4xl" />,
      benefits: [
        "Up to 40% water savings",
        "Automated scheduling",
        "Soil moisture monitoring",
        "Crop-specific water optimization"
      ]
    },
    {
      title: "Chatbot for Farmer Queries (Multilingual)",
      description: "24/7 AI assistant that answers farming questions in local languages.",
      icon: <FaLanguage className="text-red-500 text-4xl" />,
      benefits: [
        "Supports 10+ regional languages",
        "Voice and text interface",
        "Instant expert advice",
        "Offline functionality"
      ]
    },
    {
      title: "AI-Based Seed Selection and Crop Recommendation",
      description: "Data-driven guidance on optimal crops and seeds for your specific land conditions.",
      icon: <FaSeedling className="text-green-700 text-4xl" />,
      benefits: [
        "Personalized crop suggestions",
        "Seed quality assessment",
        "Climate-resilient varieties",
        "Rotation planning"
      ]
    },
    {
      title: "AI-Based Supply Chain & Logistics Optimization",
      description: "Streamline farm-to-market logistics with intelligent routing and inventory management.",
      icon: <FaTruck className="text-gray-600 text-4xl" />,
      benefits: [
        "Reduces post-harvest losses",
        "Optimal transport routes",
        "Storage condition monitoring",
        "Demand forecasting"
      ]
    },
    {
      title: "AI-Powered Voice Assistants for Illiterate Farmers",
      description: "Voice-based interface providing agricultural guidance without requiring reading skills.",
      icon: <FaRobot className="text-orange-500 text-4xl" />,
      benefits: [
        "Fully voice-operated",
        "Local dialect support",
        "Simple step-by-step guidance",
        "Works on basic phones"
      ]
    },
    {
      title: "AI-Driven Satellite Imaging for Farm Management",
      description: "Remote monitoring of field conditions using satellite imagery and drone data.",
      icon: <FaSatelliteDish className="text-indigo-600 text-4xl" />,
      benefits: [
        "Whole farm visualization",
        "Growth monitoring",
        "Problem area detection",
        "Historical comparison"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            AI-Powered Agricultural Solutions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Transforming farming with cutting-edge artificial intelligence technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="mt-2 space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-700 rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Ready to transform your farming operations?
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-green-100">
                  Our AI solutions are helping thousands of farmers increase yields, reduce costs, and make better decisions.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}