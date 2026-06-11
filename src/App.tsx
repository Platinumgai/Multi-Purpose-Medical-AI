import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/auth/AuthPage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SymptomsChecker } from './components/SymptomsChecker';
import { AIPredictions } from './components/AIPredictions';
import { MedicalRecords } from './components/MedicalRecords';
import { AppointmentBooking } from './components/AppointmentBooking';
import { Footer } from './components/Footer';
import { PatientDashboard } from './components/dashboards/PatientDashboard';
import { DoctorDashboard } from './components/dashboards/DoctorDashboard';
import { AdminDashboard } from './components/dashboards/AdminDashboard';

export type ActiveSection = 'home' | 'symptoms' | 'predictions' | 'records' | 'appointments';
type AppView = 'landing' | 'auth' | 'dashboard';

function AppContent() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [currentView, setCurrentView] = useState<AppView>('landing');

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show landing page if not authenticated and not on auth page
  if (!isAuthenticated && currentView === 'landing') {
    return <LandingPage onGetStarted={() => setCurrentView('auth')} />;
  }

  // Show auth page if not authenticated and on auth page
  if (!isAuthenticated && currentView === 'auth') {
    return <AuthPage />;
  }

  // Show role-specific dashboard if authenticated and on dashboard view
  if (isAuthenticated && (currentView === 'dashboard' || activeSection === 'home')) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <Header activeSection={activeSection} onNavigate={setActiveSection} />
        <main className="pt-16 p-8">
          {user?.role === 'patient' && <PatientDashboard />}
          {user?.role === 'doctor' && <DoctorDashboard />}
          {user?.role === 'admin' && <AdminDashboard />}
        </main>
      </div>
    );
  }

  // Show main app sections for authenticated users
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'symptoms':
        return <SymptomsChecker />;
      case 'predictions':
        return <AIPredictions />;
      case 'records':
        return <MedicalRecords />;
      case 'appointments':
        return <AppointmentBooking />;
      default:
        return user?.role === 'patient' ? <PatientDashboard /> : user?.role === 'doctor' ? <DoctorDashboard /> : <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="pt-16">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;