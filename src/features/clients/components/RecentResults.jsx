import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const results = [
  {
    id: 1,
    tipo: "Análisis de Sangre",
    fecha: "20 Oct 2024",
    estado: "Disponible",
    medico: "Dra. María González"
  },
  {
    id: 2,
    tipo: "Radiografía de Tórax",
    fecha: "18 Oct 2024",
    estado: "Disponible",
    medico: "Dr. Juan Martínez"
  },
  {
    id: 3,
    tipo: "Electrocardiograma",
    fecha: "15 Oct 2024",
    estado: "Disponible",
    medico: "Dra. María González"
  }
];

export default function RecentResults() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">Resultados Recientes</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Ver todos
        </button>
      </div>

      <div className="space-y-3">
        {results.map(result => (
          <div key={result.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FileText className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{result.tipo}</h3>
                <p className="text-sm text-gray-500">{result.fecha} • {result.medico}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                <Eye size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                <Download size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
