import React, { useState } from 'react';
import { Brain, Heart, Scan, Droplets, FileText, Fingerprint, Upload, CheckCircle } from 'lucide-react';

interface PredictionTool {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accuracy: string;
  gradient: string;
}

export function AIPredictions() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const predictionTools: PredictionTool[] = [
    {
      id: 'brain-tumor',
      title: 'Brain Tumor Detection',
      description: 'Analyze MRI/CT scans using deep learning for tumor detection',
      icon: Brain,
      accuracy: '96.5%',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'breast-cancer',
      title: 'Breast Cancer Prediction',
      description: 'Mammogram analysis for early cancer detection',
      icon: Heart,
      accuracy: '94.8%',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'skin-cancer',
      title: 'Skin Cancer Detection',
      description: 'Image classification of skin lesions and moles',
      icon: Scan,
      accuracy: '92.3%',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'diabetes',
      title: 'Diabetes Prediction',
      description: 'Risk assessment using medical history and lab results',
      icon: Droplets,
      accuracy: '89.7%',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'blood-analysis',
      title: 'Blood Report Analyzer',
      description: 'AI interpretation of lab reports with abnormality alerts',
      icon: FileText,
      accuracy: '97.2%',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'blood-group',
      title: 'Blood Group Detection',
      description: 'Fingerprint-based blood group identification',
      icon: Fingerprint,
      accuracy: '91.5%',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // Simulate analysis
      setTimeout(() => {
        setAnalysisResult({
          confidence: Math.random() * 20 + 80, // 80-100%
          prediction: Math.random() > 0.5 ? 'Normal' : 'Abnormal detected',
          recommendations: [
            'Consult with a specialist for detailed examination',
            'Regular monitoring recommended',
            'Follow-up scan in 6 months'
          ]
        });
      }, 3000);
    }
  };

  const getCurrentTool = () => predictionTools.find(tool => tool.id === selectedTool);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Medical Predictions
          </h1>
          <p className="text-xl text-gray-600">
            Advanced machine learning models for accurate medical diagnosis
          </p>
        </div>

        {!selectedTool ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {predictionTools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600">
                    Accuracy: {tool.accuracy}
                  </span>
                  <div className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Analyze →
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => {
                setSelectedTool(null);
                setUploadedFile(null);
                setAnalysisResult(null);
              }}
              className="mb-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              ← Back to Tools
            </button>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              {getCurrentTool() && (
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCurrentTool()!.gradient} flex items-center justify-center`}>
                      {React.createElement(getCurrentTool()!.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{getCurrentTool()!.title}</h2>
                      <p className="text-gray-600">{getCurrentTool()!.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Model Accuracy</span>
                      <span className="text-sm font-bold text-green-600">{getCurrentTool()!.accuracy}</span>
                    </div>
                  </div>
                </div>
              )}

              {!uploadedFile ? (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Upload Medical Image or Report
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Support formats: JPEG, PNG, DICOM, PDF
                  </p>
                  <label className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:bg-blue-700 transition-colors">
                    Choose File
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              ) : analysisResult ? (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Analysis Complete</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Confidence Score</h4>
                      <div className="text-3xl font-bold text-blue-600">
                        {analysisResult.confidence.toFixed(1)}%
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="font-semibold text-green-900 mb-2">Prediction</h4>
                      <div className="text-lg font-semibold text-green-700">
                        {analysisResult.prediction}
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Recommendations</h4>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="text-yellow-800 flex items-start space-x-2">
                          <span className="text-yellow-600 mt-1">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      Save to Records
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Get Second Opinion
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="animate-spin w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing...</h3>
                  <p className="text-gray-600">AI is processing your medical data</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}