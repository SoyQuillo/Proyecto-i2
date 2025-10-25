import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export default function ClientWelcomeBanner({ user }) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Buenos días' : currentHour < 18 ? 'Buenas tardes' : 'Buenas noches';

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{greeting}, {user?.nombre?.split(' ')[0]}</h1>
          <p className="text-blue-100 mb-4">Bienvenido a tu portal de salud</p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-200" />
              <span className="text-sm text-blue-100">{user?.email || 'No disponible'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-200" />
              <span className="text-sm text-blue-100">{user?.telefono || 'No disponible'}</span>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 mx-auto">
            <User size={40} className="text-blue-600" />
          </div>
          <p className="text-sm font-medium">Paciente</p>
          <p className="text-xs text-blue-200">ID: {user?.documento}</p>
        </div>
      </div>
    </div>
  );
}
