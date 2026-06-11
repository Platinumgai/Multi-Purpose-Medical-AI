import React from 'react';
import { Heart, Shield, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">HEALIO</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing healthcare with AI-powered diagnostics, digital health records, 
              and seamless patient-doctor interactions. Your health, our priority.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">HIPAA Compliant & Secure</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Symptoms Checker</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Medical AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Records</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Appointments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">support@medicare-ai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">123 Healthcare Ave, Medical City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HEALIO. All rights reserved. Healthcare reimagined with AI.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}