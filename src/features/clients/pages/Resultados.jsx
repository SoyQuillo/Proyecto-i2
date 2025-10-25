import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, Activity } from 'lucide-react';

export default function Resultados() {
  const resultados = [
    {
      id: 1,
      tipo: 'Análisis de Sangre',
      fecha: '2024-10-20',
      medico: 'Dra. María González',
      estado: 'Disponible',
      categoria: 'Laboratorio',
      archivo: 'analisis_sangre_oct2024.pdf'
    },
    {
      id: 2,
      tipo: 'Radiografía de Tórax',
      fecha: '2024-10-18',
      medico: 'Dr. Carlos Ramírez',
      estado: 'Disponible',
      categoria: 'Imágenes',
      archivo: 'radiografia_torax.pdf'
    },
    {
      id: 3,
      tipo: 'Electrocardiograma',
      fecha: '2024-10-15',
      medico: 'Dr. Juan Pérez',
      estado: 'Disponible',
      categoria: 'Cardiología',
      archivo: 'ecg_oct2024.pdf'
    },
    {
      id: 4,
      tipo: 'Hemograma Completo',
      fecha: '2024-10-10',
      medico: 'Dra. Ana Torres',
      estado: 'Disponible',
      categoria: 'Laboratorio',
      archivo: 'hemograma_oct2024.pdf'
    }
  ];

  const handleDownload = (archivo) => {
    alert(`Descargando: ${archivo}`);
  };

  const handleView = (archivo) => {
    alert(`Visualizando: ${archivo}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mis Resultados</h1>
            <p className="text-emerald-100">Exámenes y análisis médicos</p>
          </div>
          <Activity size={64} className="opacity-20" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Resultados</p>
              <p className="text-3xl font-bold text-gray-900">{resultados.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileText className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Laboratorio</p>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Activity className="text-purple-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Imágenes</p>
              <p className="text-3xl font-bold text-gray-900">1</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Eye className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Este Mes</p>
              <p className="text-3xl font-bold text-gray-900">4</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Calendar className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Resultados */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Tipo de Examen</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Categoría</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Médico</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {resultados.map((resultado, index) => (
                <tr key={resultado.id} className={`hover:bg-emerald-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <FileText className="text-white" size={20} />
                      </div>
                      <span className="font-semibold text-gray-900">{resultado.tipo}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {resultado.categoria}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{resultado.fecha}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{resultado.medico}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {resultado.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleView(resultado.archivo)}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                        title="Ver"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => handleDownload(resultado.archivo)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Descargar"
                      >
                        <Download size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
