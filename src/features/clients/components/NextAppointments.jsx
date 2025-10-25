import React from 'react';
import { Calendar, Clock, MapPin, User, Video } from 'lucide-react';

const appointments = [
  {
    id: 1,
    doctor: "Dra. María González",
    especialidad: "Cardiología",
    fecha: "25 Oct 2024",
    hora: "10:00 AM",
    ubicacion: "Consultorio 301",
    tipo: "Presencial",
    estado: "Confirmada"
  },
  {
    id: 2,
    doctor: "Dr. Carlos Méndez",
    especialidad: "Medicina General",
    fecha: "28 Oct 2024",
    hora: "2:30 PM",
    ubicacion: "Virtual",
    tipo: "Telemedicina",
    estado: "Pendiente"
  }
];

export default function NextAppointments() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">Próximas Citas</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Ver todas
        </button>
      </div>

      <div className="space-y-4">
        {appointments.map(appointment => (
          <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                  <p className="text-sm text-gray-500">{appointment.especialidad}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                appointment.estado === 'Confirmada' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {appointment.estado}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="text-blue-500" />
                <span>{appointment.fecha}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={16} className="text-blue-500" />
                <span>{appointment.hora}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                {appointment.tipo === 'Telemedicina' ? (
                  <Video size={16} className="text-purple-500" />
                ) : (
                  <MapPin size={16} className="text-blue-500" />
                )}
                <span>{appointment.ubicacion}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                Reagendar
              </button>
              <button className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition text-sm font-medium">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
