import React from 'react';
import { Calendar, FileText, MessageCircle, Heart, Activity, Clock, Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function PatientDashboard() {
  const { user } = useAuth();

  const upcomingAppointments = [
    {
      id: '1',
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-02-15',
      time: '10:00 AM',
      type: 'Follow-up'
    },
    {
      id: '2',
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: '2024-02-20',
      time: '2:00 PM',
      type: 'Consultation'
    }
  ];

  const recentReports = [
    {
      id: '1',
      title: 'Blood Test Results',
      date: '2024-01-15',
      status: 'Normal'
    },
    {
      id: '2',
      title: 'Chest X-Ray',
      date: '2024-01-10',
      status: 'Clear'
    }
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', status: 'normal' },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { label: 'Weight', value: '70 kg', status: 'normal' },
    { label: 'BMI', value: '22.5', status: 'normal' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-blue-100 mb-6">Here's your health overview for today</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Next Appointment</p>
                <p className="font-semibold">Feb 15, 10:00 AM</p>
              </div>
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Health Score</p>
                <p className="font-semibold">Excellent</p>
              </div>
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <Bell className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Reminders</p>
                <p className="font-semibold">2 pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
                <MessageCircle className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">AI Symptoms</p>
              </button>
              <button className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                <Calendar className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Book Appointment</p>
              </button>
              <button className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group">
                <FileText className="w-8 h-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">View Records</p>
              </button>
              <button className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group">
                <Activity className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Health Metrics</p>
              </button>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      <p className="text-sm text-blue-600">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{appointment.date}</p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Health Metrics */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Health Metrics</h2>
            <div className="space-y-4">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{metric.label}</span>
                  <div className="text-right">
                    <span className="font-semibold text-gray-900">{metric.value}</span>
                    <div className={`w-2 h-2 rounded-full ml-2 inline-block ${
                      metric.status === 'normal' ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Reports</h2>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="p-3 bg-gray-50 rounded-xl">
                  <h3 className="font-medium text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-600">{report.date}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {report.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}