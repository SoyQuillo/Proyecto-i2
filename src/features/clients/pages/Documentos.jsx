import React from 'react';
import { FileText, Download, File, FolderOpen, Calendar } from 'lucide-react';

export default function Documentos() {
  const documentos = [
    {
      id: 1,
      nombre: 'Historia Clínica Completa',
      tipo: 'PDF',
      tamaño: '2.4 MB',
      fecha: '2024-10-23',
      categoria: 'Historia Clínica'
    },
    {
      id: 2,
      nombre: 'Consentimiento Informado',
      tipo: 'PDF',
      tamaño: '856 KB',
      fecha: '2024-10-20',
      categoria: 'Legal'
    },
    {
      id: 3,
      nombre: 'Resumen de Alta',
      tipo: 'PDF',
      tamaño: '1.2 MB',
      fecha: '2024-10-15',
      categoria: 'Resúmenes'
    },
    {
      id: 4,
      nombre: 'Carnet de Vacunación',
      tipo: 'PDF',
      tamaño: '678 KB',
      fecha: '2024-09-30',
      categoria: 'Vacunas'
    },
    {
      id: 5,
      nombre: 'Certificado Médico',
      tipo: 'PDF',
      tamaño: '423 KB',
      fecha: '2024-09-25',
      categoria: 'Certificados'
    },
    {
      id: 6,
      nombre: 'Orden de Exámenes',
      tipo: 'PDF',
      tamaño: '345 KB',
      fecha: '2024-09-20',
      categoria: 'Órdenes'
    }
  ];

  const handleDownload = (doc) => {
    alert(`Descargando: ${doc.nombre}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mis Documentos</h1>
            <p className="text-emerald-100">Archivos y documentación médica</p>
          </div>
          <FolderOpen size={64} className="opacity-20" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Documentos</p>
              <p className="text-3xl font-bold text-gray-900">{documentos.length}</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="text-emerald-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Este Mes</p>
              <p className="text-3xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tamaño Total</p>
              <p className="text-3xl font-bold text-gray-900">5.9</p>
              <p className="text-xs text-gray-500">MB</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <File className="text-purple-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Categorías</p>
              <p className="text-3xl font-bold text-gray-900">6</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FolderOpen className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Documentos */}
      <div className="grid grid-cols-3 gap-4">
        {documentos.map(doc => (
          <div key={doc.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                <FileText className="text-white" size={24} />
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                {doc.tipo}
              </span>
            </div>

            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{doc.nombre}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Categoría:</span>
                <span className="font-medium text-gray-900">{doc.categoria}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Tamaño:</span>
                <span className="font-medium text-gray-900">{doc.tamaño}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Fecha:</span>
                <span className="font-medium text-gray-900">{doc.fecha}</span>
              </div>
            </div>

            <button
              onClick={() => handleDownload(doc)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 transition font-semibold shadow-md"
            >
              <Download size={18} />
              Descargar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
