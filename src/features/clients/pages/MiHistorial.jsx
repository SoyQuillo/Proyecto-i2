import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, User, Activity } from 'lucide-react';

const historialData = [
  {
    id: 1,
    tipo: "Consulta Médica",
    especialidad: "Cardiología",
    medico: "Dra. María González",
    fecha: "2024-10-20",
    diagnostico: "Control rutinario - Estado estable",
    documentos: ["Resumen médico", "Orden laboratorio"]
  },
  {
    id: 2,
    tipo: "Resultados de Laboratorio",
    especialidad: "Laboratorio Clínico",
    medico: "Lab. Central",
    fecha: "2024-10-18",
    diagnostico: "Análisis de sangre completo - Valores normales",
    documentos: ["Resultados completos"]
  },
  {
    id: 3,
    tipo: "Imagenología",
    especialidad: "Radiología",
    medico: "Dr. Juan Martínez",
    fecha: "2024-10-15",
    diagnostico: "Radiografía de tórax - Sin hallazgos patológicos",
    documentos: ["Imágenes", "Informe radiológico"]
  }
];

export default function MiHistorial() {
  const [selectedRecord, setSelectedRecord] = useState(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Mi Historial Médico</h1>
        <p className="text-gray-500 mt-1">Accede a tu historial clínico completo</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Consultas</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Activity className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Documentos</p>
              <p className="text-2xl font-bold text-gray-900">48</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <FileText className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Última Visita</p>
              <p className="text-lg font-bold text-gray-900">20 Oct 2024</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Calendar className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Historial Reciente</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-6">
            {historialData.map(record => (
              <div key={record.id} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <FileText className="text-white" size={20} />
                </div>

                <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{record.tipo}</h3>
                      <p className="text-sm text-gray-600">{record.especialidad}</p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(record.fecha).toLocaleDateString('es-ES')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <User size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-700">{record.medico}</span>
                  </div>

                  <p className="text-sm text-gray-700 mb-4 bg-white p-3 rounded border border-gray-200">
                    {record.diagnostico}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-300">
                    <div className="flex gap-2">
                      {record.documentos.map((doc, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {doc}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
