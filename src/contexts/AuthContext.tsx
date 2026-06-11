import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, LoginCredentials, SignupData } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    email: 'patient@demo.com',
    name: 'John Smith',
    role: 'patient',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-15'
  },
  {
    id: '2',
    email: 'doctor@demo.com',
    name: 'Dr. Sarah Johnson',
    role: 'doctor',
    avatar: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-15'
  },
  {
    id: '3',
    email: 'admin@demo.com',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-01',
    lastLogin: '2024-01-15'
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        isLoading: false
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = mockUsers.find(u => u.email === credentials.email);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (data: SignupData) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      role: data.role,
      createdAt: new Date().toISOString(),
    };
    
    localStorage.setItem('user', JSON.stringify(newUser));
    setAuthState({
      user: newUser,
      isAuthenticated: true,
      isLoading: false
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}