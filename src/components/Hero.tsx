import React from 'react';
import { Brain, Heart, Shield, Users, MessageCircle, Calendar } from 'lucide-react';
import { ActiveSection } from '../App';

interface HeroProps {
  onNavigate: (section: ActiveSection) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Symptoms Checker',
      description: 'Smart chatbot diagnosis with automatic specialist recommendations',
      action: () => onNavigate('symptoms'),
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Brain,
      title: 'Medical AI Predictions',
      description: 'Advanced ML models for cancer detection, diabetes, and blood analysis',
      action: () => onNavigate('predictions'),
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Digital Health Records',
      description: 'Secure, encrypted medical records accessible anytime, anywhere',
      action: () => onNavigate('records'),
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Calendar,
      title: 'Smart Appointments',
      description: 'AI-powered booking with WhatsApp integration and voice support',
      action: () => onNavigate('appointments'),
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
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
                onClick={() => onNavigate('symptoms')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start AI Diagnosis
              </button>
              <button
                onClick={() => onNavigate('appointments')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Book Appointment
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

      {/* Features Grid */}
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
                onClick={feature.action}
                className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-6">
                <Shield className="w-12 h-12" />
                <Users className="w-12 h-12" />
                <Heart className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Health Data is Secure
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              HIPAA compliant, end-to-end encrypted, and verified by medical professionals. 
              Your privacy and security are our top priorities.
            </p>
            <button
              onClick={() => onNavigate('records')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              View Security Features
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}