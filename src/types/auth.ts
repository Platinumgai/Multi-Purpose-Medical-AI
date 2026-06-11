export interface User {
  id: string;
  email: string;
  name: string;
  role: 'patient' | 'doctor' | 'admin';
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface Patient extends User {
  role: 'patient';
  dateOfBirth: string;
  phone: string;
  address: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalHistory: string[];
  allergies: string[];
}

export interface Doctor extends User {
  role: 'doctor';
  specialty: string;
  licenseNumber: string;
  experience: number;
  qualifications: string[];
  hospital: string;
  consultationFee: number;
  availability: {
    day: string;
    slots: string[];
  }[];
  rating: number;
  verified: boolean;
}

export interface Admin extends User {
  role: 'admin';
  permissions: string[];
  department: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
  role: 'patient' | 'doctor';
  phone?: string;
  specialty?: string;
  licenseNumber?: string;
}