import React from 'react';
import { Heart, Brain, Shield, Users, MessageCircle, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Symptoms Checker',
      description: 'Smart chatbot diagnosis with automatic specialist recommendations',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Brain,
      title: 'Medical AI Predictions',
      description: 'Advanced ML models for cancer detection, diabetes, and blood analysis',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Digital Health Records',
      description: 'Secure, encrypted medical records accessible anytime, anywhere',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Calendar,
      title: 'Smart Appointments',
      description: 'AI-powered booking with WhatsApp integration and voice support',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    'HIPAA Compliant & Secure',
    '98% Diagnostic Accuracy',
    '24/7 AI Support',
    'Multi-language Support',
    'WhatsApp Integration',
    'Voice AI Agent'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                HEALIO
              </span>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
                Personalized Healthcare
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the future of healthcare with our AI-driven platform combining smart diagnostics, 
              digital health records, and seamless doctor-patient interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Health Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Diagnostic Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50K+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Healthcare Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by advanced AI, machine learning, and deep learning technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose HEALIO?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onGetStarted}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">HEALIO</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing healthcare with AI-powered diagnostics and personalized care.
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">HIPAA Compliant & Secure</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}