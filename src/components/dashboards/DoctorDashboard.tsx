import React from 'react';
import { Users, Calendar, FileText, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function DoctorDashboard() {
  const { user } = useAuth();

  const todayAppointments = [
    {
      id: '1',
      patient: 'John Smith',
      time: '09:00 AM',
      type: 'Consultation',
      status: 'confirmed'
    },
    {
      id: '2',
      patient: 'Sarah Wilson',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'confirmed'
    },
    {
      id: '3',
      patient: 'Mike Johnson',
      time: '02:00 PM',
      type: 'Check-up',
      status: 'pending'
    }
  ];

  const pendingReports = [
    {
      id: '1',
      patient: 'Emma Davis',
      type: 'Blood Test Review',
      priority: 'high',
      date: '2024-01-14'
    },
    {
      id: '2',
      patient: 'Robert Brown',
      type: 'X-Ray Analysis',
      priority: 'medium',
      date: '2024-01-13'
    }
  ];

  const stats = [
    { label: 'Today\'s Patients', value: '12', icon: Users, color: 'blue' },
    { label: 'Pending Reports', value: '5', icon: FileText, color: 'orange' },
    { label: 'This Week', value: '48', icon: Calendar, color: 'green' },
    { label: 'Avg. Rating', value: '4.9', icon: TrendingUp, color: 'purple' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Good morning, {user?.name}!</h1>
        <p className="text-blue-100 mb-6">You have 12 appointments scheduled for today</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <stat.icon className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Schedule */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
              <span className="text-sm text-gray-500">January 15, 2024</span>
            </div>
            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                      <p className="text-sm text-gray-600">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{appointment.time}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      appointment.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
                <Users className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">View Patients</p>
              </button>
              <button className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                <Calendar className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Schedule</p>
              </button>
              <button className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group">
                <FileText className="w-8 h-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Reports</p>
              </button>
              <button className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group">
                <TrendingUp className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Analytics</p>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Reports */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900">Pending Reviews</h2>
            </div>
            <div className="space-y-4">
              {pendingReports.map((report) => (
                <div key={report.id} className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{report.patient}</h3>
                    <span className={`w-2 h-2 rounded-full ${
                      report.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}></span>
                  </div>
                  <p className="text-sm text-gray-600">{report.type}</p>
                  <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Insights */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Patient Insights</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">New Patients</span>
                <span className="font-semibold text-green-600">+15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Follow-ups</span>
                <span className="font-semibold text-blue-600">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Satisfaction</span>
                <span className="font-semibold text-purple-600">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}