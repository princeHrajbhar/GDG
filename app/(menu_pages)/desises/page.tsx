// pages/plant-disease-analysis.js
"use client"
import { useState, useRef } from 'react';
import Head from 'next/head';

export default function PlantDiseaseAnalysis() {
  const [formData, setFormData] = useState({
    farmerName: '',
    contactNumber: '',
    plantType: 'wheat',
    location: '',
    plantingDate: '',
    symptoms: '',
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const plantTypes = [
    'wheat',
    'rice',
    'corn',
    'soybean',
    'potato',
    'tomato',
    'apple',
    'grape',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Dummy analysis results
      const dummyResults = {
        diseaseName: 'Wheat Leaf Rust',
        confidence: '87%',
        description:
          'Wheat leaf rust is a fungal disease that causes orange-brown pustules on leaves. It can significantly reduce yield if not treated.',
        treatment: [
          'Apply fungicides containing triazoles or strobilurins',
          'Plant resistant varieties in future seasons',
          'Remove crop debris after harvest to reduce spore survival',
          'Ensure proper crop rotation',
        ],
        prevention: [
          'Monitor crops regularly for early signs',
          'Maintain proper plant spacing for air circulation',
          'Avoid excessive nitrogen fertilization',
          'Use certified disease-free seeds',
        ],
        severity: 'Moderate',
        affectedArea: 'Leaves',
        similarDiseases: [
          'Wheat Stem Rust',
          'Wheat Stripe Rust',
          'Septoria Leaf Blotch',
        ],
      };

      setAnalysisResult(dummyResults);
      setIsLoading(false);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      farmerName: '',
      contactNumber: '',
      plantType: 'wheat',
      location: '',
      plantingDate: '',
      symptoms: '',
    });
    setImagePreview(null);
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <Head>
        <title>Plant Disease Analysis | Farmer's Assistant</title>
        <meta
          name="description"
          content="Analyze plant diseases with our farmer's assistance tool"
        />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-2">
          Plant Disease Analysis Tool
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Upload images of your plants and get instant analysis about potential diseases
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Farmer Information
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="farmerName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Farmer Name
                </label>
                <input
                  type="text"
                  id="farmerName"
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="plantType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Plant Type
                </label>
                <select
                  id="plantType"
                  name="plantType"
                  value={formData.plantType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {plantTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="plantingDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Planting Date
                </label>
                <input
                  type="date"
                  id="plantingDate"
                  name="plantingDate"
                  value={formData.plantingDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="symptoms"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Observed Symptoms
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Describe the symptoms you've observed..."
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="plantImage"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload Plant Image
                </label>
                <input
                  type="file"
                  id="plantImage"
                  name="plantImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  required
                />
                {imagePreview && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Image Preview:
                    </p>
                    <img
                      src={imagePreview}
                      alt="Plant preview"
                      className="max-w-xs max-h-48 rounded-md border border-gray-200"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={isLoading}
              >
                {isLoading ? 'Analyzing...' : 'Analyze Plant'}
              </button>
            </div>
          </form>
        </div>

        {analysisResult && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Analysis Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Diagnosis
                  </h3>
                  <div className="bg-green-50 p-4 rounded-md">
                    <p className="font-bold text-green-800">
                      Disease: {analysisResult.diseaseName}
                    </p>
                    <p className="text-gray-700">
                      Confidence: {analysisResult.confidence}
                    </p>
                    <p className="text-gray-700 mt-2">
                      {analysisResult.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Recommended Treatment
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {analysisResult.treatment.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Prevention Tips
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {analysisResult.prevention.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Disease Details
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Severity:</span>{' '}
                      <span className="text-gray-700">
                        {analysisResult.severity}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Affected Area:</span>{' '}
                      <span className="text-gray-700">
                        {analysisResult.affectedArea}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Similar Diseases
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {analysisResult.similarDiseases.map((disease, index) => (
                      <li key={index} className="text-gray-700">
                        {disease}
                      </li>
                    ))}
                  </ul>
                </div>

                {imagePreview && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Your Plant Image
                    </h3>
                    <img
                      src={imagePreview}
                      alt="Analyzed plant"
                      className="max-w-full rounded-md border border-gray-200"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Next Steps
              </h3>
              <p className="text-gray-700 mb-4">
                Based on the analysis, we recommend taking immediate action to
                prevent further spread of the disease. Consider consulting with
                your local agricultural extension officer for additional support.
              </p>
              <button
                onClick={resetForm}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Analyze Another Plant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}