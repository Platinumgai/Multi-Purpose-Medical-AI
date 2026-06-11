import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, MessageSquare, User, Star, CheckCircle, Bot } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  location: string;
  availability: string[];
  image: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export function AppointmentBooking() {
  const [bookingType, setBookingType] = useState<'manual' | 'auto'>('manual');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      rating: 4.9,
      experience: '15 years',
      location: 'Downtown Medical Center',
      availability: ['Mon', 'Wed', 'Fri'],
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'General Practice',
      rating: 4.8,
      experience: '12 years',
      location: 'City Health Clinic',
      availability: ['Tue', 'Thu', 'Sat'],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Dr. Emily Davis',
      specialty: 'Dermatology',
      rating: 4.9,
      experience: '18 years',
      location: 'Skin Care Specialists',
      availability: ['Mon', 'Tue', 'Thu'],
      image: 'https://images.pexels.com/photos/5407205/pexels-photo-5407205.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: false }
  ];

  const handleBookAppointment = () => {
    setAppointmentBooked(true);
  };

  const handleAutoBooking = () => {
    // Simulate AI recommendation
    setSelectedDoctor(doctors[1]); // Recommend General Practice
    setSelectedDate('2024-02-15');
    setSelectedTime('11:00 AM');
    setBookingType('auto');
  };

  if (appointmentBooked) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your appointment has been successfully booked.</p>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">Appointment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Doctor:</span>
                  <span className="font-medium">{selectedDoctor?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Specialty:</span>
                  <span className="font-medium">{selectedDoctor?.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    WhatsApp confirmation sent
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Voice reminder scheduled
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setAppointmentBooked(false);
                setSelectedDoctor(null);
                setSelectedDate('');
                setSelectedTime('');
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors mt-6"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Appointment Booking
          </h1>
          <p className="text-xl text-gray-600">
            Manual selection or AI-powered automatic doctor recommendation
          </p>
        </div>

        {/* Booking Type Selection */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setBookingType('manual')}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                bookingType === 'manual'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <User className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manual Booking</h3>
              <p className="text-gray-600">Choose your preferred doctor and time slot</p>
            </button>

            <button
              onClick={handleAutoBooking}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                bookingType === 'auto'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <Bot className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Recommendation</h3>
              <p className="text-gray-600">Let AI suggest the best doctor based on your needs</p>
            </button>
          </div>
        </div>

        {bookingType === 'auto' && selectedDoctor && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Bot className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-purple-900">AI Recommendation</h3>
              </div>
              <p className="text-purple-800 mb-4">
                Based on your symptoms and medical history, I recommend Dr. {selectedDoctor.name} 
                for a comprehensive evaluation.
              </p>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{selectedDoctor.name}</h4>
                    <p className="text-gray-600">{selectedDoctor.specialty}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Doctor Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Doctor</h2>
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedDoctor?.id === doctor.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{doctor.rating}</span>
                        </div>
                        <span>{doctor.experience} experience</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{doctor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
            
            {selectedDoctor ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg font-medium transition-colors ${
                          selectedTime === slot.time
                            ? 'bg-blue-600 text-white'
                            : slot.available
                            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Appointment Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Doctor:</span>
                          <span className="font-medium">{selectedDoctor.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{selectedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-medium">{selectedDoctor.location}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleBookAppointment}
                      className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book Appointment
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Please select a doctor first</p>
              </div>
            )}
          </div>
        </div>

        {/* Integration Features */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Smart Integration Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <MessageSquare className="w-8 h-8" />
              <div>
                <h3 className="font-bold">WhatsApp Integration</h3>
                <p className="opacity-90">Get confirmations, reminders, and updates via WhatsApp</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8" />
              <div>
                <h3 className="font-bold">Voice AI Agent</h3>
                <p className="opacity-90">Multilingual phone support in your native language</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}