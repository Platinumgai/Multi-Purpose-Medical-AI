import React from 'react';
import { Heart, Menu, X, Shield, LogOut, User } from 'lucide-react';
import { ActiveSection } from '../App';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'home' as ActiveSection, label: 'Home' },
    { id: 'symptoms' as ActiveSection, label: 'AI Symptoms Checker' },
    { id: 'predictions' as ActiveSection, label: 'Medical AI' },
    { id: 'records' as ActiveSection, label: 'Health Records' },
    { id: 'appointments' as ActiveSection, label: 'Appointments' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              HEALIO
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Menu (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.name || 'User');
                    }}
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                )}
                <span className="font-medium text-gray-700">{user?.name}</span>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="font-medium text-gray-900">{user?.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setShowUserMenu(false);
                      onNavigate('home');
                    }}
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-2 mt-4 px-3 py-2 bg-green-50 rounded-full border border-green-200">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}