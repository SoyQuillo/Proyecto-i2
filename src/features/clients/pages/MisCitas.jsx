import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Video, Plus, Filter } from 'lucide-react';

const citasData = [
  {
    id: 1,
    doctor: "Dra. María González",
    especialidad: "Cardiología",
    fecha: "2024-10-25",
    hora: "10:00 AM",
    ubicacion: "Consultorio 301",
    tipo: "Presencial",
    estado: "Confirmada",
    motivo: "Control rutinario"
  },
  {
    id: 2,
    doctor: "Dr. Carlos Méndez",
    especialidad: "Medicina General",
    fecha: "2024-10-28",
    hora: "2:30 PM",
    ubicacion: "Virtual",
    tipo: "Telemedicina",
    estado: "Pendiente",
    motivo: "Consulta seguimiento"
  },
  {
    id: 3,
    doctor: "Dr. Roberto Silva",
    especialidad: "Dermatología",
    fecha: "2024-11-05",
    hora: "9:00 AM",
    ubicacion: "Consultorio 205",
    tipo: "Presencial",
    estado: "Confirmada",
    motivo: "Primera consulta"
  },
  {
    id: 4,
    doctor: "Dra. Ana Torres",
    especialidad: "Oftalmología",
    fecha: "2024-10-15",
    hora: "3:00 PM",
    ubicacion: "Consultorio 102",
    tipo: "Presencial",
    estado: "Completada",
    motivo: "Examen visual"
  }
];

export default function MisCitas() {
  const [filterStatus, setFilterStatus] = useState('Todas');
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  const filteredCitas = filterStatus === 'Todas' 
    ? citasData 
    : citasData.filter(c => c.estado === filterStatus);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Mis Citas</h1>
          <p className="text-gray-500 mt-1">Gestiona tus citas médicas</p>
        </div>
        <button
          onClick={() => setShowNewAppointment(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-md font-medium"
        >
          <Plus size={18} />
          Nueva Cita
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Filter size={18} className="text-gray-500" />
          <div className="flex gap-2">
            {['Todas', 'Confirmada', 'Pendiente', 'Completada'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg transition font-medium text-sm ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="grid gap-4">
        {filteredCitas.map(cita => (
          <div key={cita.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{cita.doctor}</h3>
                  <p className="text-sm text-gray-500">{cita.especialidad}</p>
                  <p className="text-sm text-gray-600 mt-1">{cita.motivo}</p>
                </div>
              </div>
              <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                cita.estado === 'Confirmada' ? 'bg-green-100 text-green-800' :
                cita.estado === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {cita.estado}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={18} className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Fecha</p>
                  <p className="text-sm font-medium">{new Date(cita.fecha).toLocaleDateString('es-ES')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock size={18} className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Hora</p>
                  <p className="text-sm font-medium">{cita.hora}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                {cita.tipo === 'Telemedicina' ? (
                  <Video size={18} className="text-purple-500" />
                ) : (
                  <MapPin size={18} className="text-blue-500" />
                )}
                <div>
                  <p className="text-xs text-gray-500">{cita.tipo}</p>
                  <p className="text-sm font-medium">{cita.ubicacion}</p>
                </div>
              </div>
            </div>

            {cita.estado !== 'Completada' && (
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
                  Cancelar
                </button>
                <button className="flex-1 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
                  Reagendar
                </button>
                <button className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition font-medium">
                  Ver Detalles
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* New Appointment Modal */}
      {showNewAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Agendar Nueva Cita</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Especialidad</label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Cardiología</option>
                  <option>Medicina General</option>
                  <option>Dermatología</option>
                  <option>Oftalmología</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivo de consulta</label>
                <textarea 
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe brevemente el motivo de tu consulta..."
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewAppointment(false)}
                  className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition font-medium"
                >
                  Solicitar Cita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
