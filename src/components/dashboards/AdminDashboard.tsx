import React from 'react';
import { Users, UserCheck, Activity, Shield, TrendingUp, AlertTriangle, Settings, Database } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function AdminDashboard() {
  const { user } = useAuth();

  const systemStats = [
    { label: 'Total Users', value: '2,847', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Active Doctors', value: '156', change: '+5%', icon: UserCheck, color: 'green' },
    { label: 'Daily Sessions', value: '1,234', change: '+8%', icon: Activity, color: 'purple' },
    { label: 'System Health', value: '99.9%', change: '+0.1%', icon: Shield, color: 'teal' }
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'user_registration',
      message: 'New doctor registered: Dr. Emily Chen',
      time: '2 minutes ago',
      priority: 'normal'
    },
    {
      id: '2',
      type: 'system_alert',
      message: 'High server load detected on AI prediction service',
      time: '15 minutes ago',
      priority: 'high'
    },
    {
      id: '3',
      type: 'appointment',
      message: '50+ appointments booked in the last hour',
      time: '1 hour ago',
      priority: 'normal'
    }
  ];

  const pendingApprovals = [
    {
      id: '1',
      type: 'Doctor Verification',
      name: 'Dr. Michael Rodriguez',
      specialty: 'Cardiology',
      submitted: '2024-01-14'
    },
    {
      id: '2',
      type: 'Report Review',
      name: 'AI Model Update',
      specialty: 'Brain Tumor Detection',
      submitted: '2024-01-13'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-indigo-100 mb-6">System overview and management controls</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {systemStats.map((stat, index) => (
            <div key={index} className="bg-white/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <stat.icon className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">{stat.label}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* System Management */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">System Management</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
                <Users className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">User Management</p>
              </button>
              <button className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group">
                <UserCheck className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Doctor Approvals</p>
              </button>
              <button className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group">
                <Database className="w-8 h-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Database</p>
              </button>
              <button className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group">
                <Settings className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">Settings</p>
              </button>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    activity.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-gray-900">{activity.message}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  {activity.priority === 'high' && (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Overview */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Analytics Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">User Growth</h3>
                <p className="text-2xl font-bold text-blue-600">+23%</p>
                <p className="text-sm text-gray-500">This month</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">AI Predictions</h3>
                <p className="text-2xl font-bold text-green-600">1,847</p>
                <p className="text-sm text-gray-500">This week</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Security Score</h3>
                <p className="text-2xl font-bold text-purple-600">A+</p>
                <p className="text-sm text-gray-500">Excellent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Approvals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900">Pending Approvals</h2>
            </div>
            <div className="space-y-4">
              {pendingApprovals.map((item) => (
                <div key={item.id} className="p-3 bg-orange-50 rounded-xl border border-orange-200">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.type}</p>
                  <p className="text-sm text-orange-600">{item.specialty}</p>
                  <p className="text-xs text-gray-500 mt-1">Submitted: {item.submitted}</p>
                  <div className="flex space-x-2 mt-3">
                    <button className="px-3 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">System Health</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">API Response Time</span>
                <span className="font-semibold text-green-600">125ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Database Load</span>
                <span className="font-semibold text-yellow-600">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">AI Model Accuracy</span>
                <span className="font-semibold text-green-600">96.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Uptime</span>
                <span className="font-semibold text-green-600">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}