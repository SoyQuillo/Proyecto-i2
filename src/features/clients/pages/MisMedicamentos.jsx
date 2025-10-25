import React, { useState } from 'react';
import { Pill, Clock, AlertCircle, CheckCircle, Calendar } from 'lucide-react';

export default function MisMedicamentos() {
  const medicamentos = [
    {
      id: 1,
      nombre: 'Losartán 50mg',
      dosis: '1 tableta',
      frecuencia: 'Cada 12 horas',
      horarios: ['08:00 AM', '08:00 PM'],
      duracion: '30 días',
      medico: 'Dr. Juan Pérez',
      inicio: '2024-10-01',
      fin: '2024-10-31',
      instrucciones: 'Tomar con alimentos',
      activo: true
    },
    {
      id: 2,
      nombre: 'Omeprazol 20mg',
      dosis: '1 cápsula',
      frecuencia: 'En ayunas',
      horarios: ['07:00 AM'],
      duracion: '20 días',
      medico: 'Dra. María González',
      inicio: '2024-10-15',
      fin: '2024-11-04',
      instrucciones: '30 minutos antes del desayuno',
      activo: true
    },
    {
      id: 3,
      nombre: 'Paracetamol 500mg',
      dosis: '1-2 tabletas',
      frecuencia: 'Según necesidad',
      horarios: ['SOS'],
      duracion: 'Indefinido',
      medico: 'Dr. Juan Pérez',
      inicio: '2024-09-01',
      fin: null,
      instrucciones: 'No exceder 4g al día',
      activo: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mis Medicamentos</h1>
            <p className="text-emerald-100">Tratamiento actual y medicación activa</p>
          </div>
          <Pill size={64} className="opacity-20" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Medicamentos Activos</p>
              <p className="text-3xl font-bold text-gray-900">{medicamentos.filter(m => m.activo).length}</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Pill className="text-emerald-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tomas Hoy</p>
              <p className="text-3xl font-bold text-gray-900">4</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Clock className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Próxima Toma</p>
              <p className="text-3xl font-bold text-gray-900">08:00 PM</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Medicamentos */}
      <div className="space-y-4">
        {medicamentos.map(med => (
          <div key={med.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                  <Pill className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{med.nombre}</h3>
                  <p className="text-sm text-gray-600">Recetado por: {med.medico}</p>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                med.activo 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {med.activo ? 'Activo' : 'Inactivo'}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1">Dosis</p>
                <p className="text-sm font-semibold text-gray-900">{med.dosis}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1">Frecuencia</p>
                <p className="text-sm font-semibold text-gray-900">{med.frecuencia}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1">Duración</p>
                <p className="text-sm font-semibold text-gray-900">{med.duracion}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1">Horarios</p>
                <div className="flex flex-wrap gap-1">
                  {med.horarios.map((hora, idx) => (
                    <span key={idx} className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                      {hora}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Instrucciones:</p>
                  <p className="text-sm text-blue-700">{med.instrucciones}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>Inicio: {med.inicio}</span>
              {med.fin && <span>Fin: {med.fin}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
