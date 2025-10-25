import React from 'react';
import { Pill, Clock } from 'lucide-react';

const medications = [
  {
    id: 1,
    nombre: "Losartán 50mg",
    dosis: "1 tableta",
    frecuencia: "Cada 12 horas",
    horarios: ["8:00 AM", "8:00 PM"]
  },
  {
    id: 2,
    nombre: "Metformina 850mg",
    dosis: "1 tableta",
    frecuencia: "Cada 8 horas",
    horarios: ["8:00 AM", "4:00 PM", "12:00 AM"]
  },
  {
    id: 3,
    nombre: "Omeprazol 20mg",
    dosis: "1 cápsula",
    frecuencia: "Cada 24 horas",
    horarios: ["8:00 AM"]
  },
  {
    id: 4,
    nombre: "Paracetamol 500mg",
    dosis: "1 tableta",
    frecuencia: "Cada 8 horas",
    horarios: ["9:00 AM", "5:00 PM", "1:00 AM"]
  }
];

export default function ActiveMedications() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Medicamentos Activos</h3>
        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
          {medications.length} activos
        </span>
      </div>

      <div className="space-y-3">
        {medications.map(med => (
          <div key={med.id} className="p-3 border border-gray-200 rounded-lg hover:shadow-sm transition">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Pill className="text-purple-600" size={16} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{med.nombre}</h4>
                <p className="text-xs text-gray-600 mt-1">{med.dosis} • {med.frecuencia}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Clock size={12} className="text-blue-500" />
                  <span className="text-xs text-gray-500">
                    {med.horarios.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
        Ver Historial Completo
      </button>
    </div>
  );
}
