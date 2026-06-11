import React, { useState } from 'react';
import { FileText, Download, Upload, Search, Calendar, User, Shield, Plus, Eye } from 'lucide-react';

interface MedicalRecord {
  id: string;
  type: string;
  title: string;
  date: string;
  doctor: string;
  category: 'lab' | 'imaging' | 'prescription' | 'report' | 'vaccination';
  summary: string;
}

export function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUpload, setShowUpload] = useState(false);

  const records: MedicalRecord[] = [
    {
      id: '1',
      type: 'Blood Test',
      title: 'Complete Blood Count (CBC)',
      date: '2024-01-15',
      doctor: 'Dr. Sarah Johnson',
      category: 'lab',
      summary: 'All parameters within normal range'
    },
    {
      id: '2',
      type: 'X-Ray',
      title: 'Chest X-Ray',
      date: '2024-01-10',
      doctor: 'Dr. Michael Chen',
      category: 'imaging',
      summary: 'Clear lungs, no abnormalities detected'
    },
    {
      id: '3',
      type: 'Prescription',
      title: 'Hypertension Medication',
      date: '2024-01-08',
      doctor: 'Dr. Emily Davis',
      category: 'prescription',
      summary: 'Lisinopril 10mg daily, monitor BP'
    },
    {
      id: '4',
      type: 'Vaccination',
      title: 'Annual Flu Shot',
      date: '2023-12-20',
      doctor: 'Dr. Robert Wilson',
      category: 'vaccination',
      summary: 'Seasonal influenza vaccination administered'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Records', color: 'gray' },
    { id: 'lab', label: 'Lab Results', color: 'blue' },
    { id: 'imaging', label: 'Medical Imaging', color: 'purple' },
    { id: 'prescription', label: 'Prescriptions', color: 'green' },
    { id: 'report', label: 'Medical Reports', color: 'orange' },
    { id: 'vaccination', label: 'Vaccinations', color: 'teal' }
  ];

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || record.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat?.color || 'gray';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Medical Records
          </h1>
          <p className="text-xl text-gray-600">
            Secure, encrypted access to all your medical documents and history
          </p>
        </div>

        {/* Security Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">Your Data is Secure</h3>
              <p className="text-green-700">End-to-end encrypted • HIPAA compliant • Access controlled</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 lg:flex-none lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Record</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                selectedCategory === category.id
                  ? `bg-${category.color}-100 text-${category.color}-700 border border-${category.color}-200`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Upload Form */}
        {showUpload && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Upload Medical Record</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Record Type</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
                  <option>Lab Results</option>
                  <option>Medical Imaging</option>
                  <option>Prescription</option>
                  <option>Medical Report</option>
                  <option>Vaccination Record</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Drag & drop files or click to browse</p>
                  <input type="file" className="hidden" multiple />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowUpload(false)}
                className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                Upload Record
              </button>
            </div>
          </div>
        )}

        {/* Records Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl bg-${getCategoryColor(record.category)}-100 flex items-center justify-center`}>
                    <FileText className={`w-6 h-6 text-${getCategoryColor(record.category)}-600`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{record.title}</h3>
                    <p className="text-sm text-gray-600">{record.type}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(record.category)}-100 text-${getCategoryColor(record.category)}-700`}>
                  {record.category}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(record.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{record.doctor}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{record.summary}</p>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No records found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}