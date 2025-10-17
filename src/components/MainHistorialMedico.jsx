import React, { useState } from "react";
import { historialMedico } from "../data/historialMedico";
import {
  FileText,
  AlertTriangle,
  Scissors,
  Calendar,
  User,
  Stethoscope,
  Clipboard,
} from "lucide-react";

function MainHistorialMedico({ paciente }) {
  const pacienteId = paciente?.id || null;
  const historialPaciente = historialMedico.filter(
    (n) => n.pacienteId === pacienteId
  );

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const categorias = [
    "Todos",
    ...new Set(historialPaciente.map((n) => n.nivel)),
  ];

  const contarPorCategoria = (categoria) => {
    if (categoria === "Todos") return historialPaciente.length;
    return historialPaciente.filter((n) => n.nivel === categoria).length;
  };

  const resultadosFiltrados =
    categoriaSeleccionada === "Todos"
      ? historialPaciente
      : historialPaciente.filter((n) => n.nivel === categoriaSeleccionada);

  const colorNivel = {
    Alto: "text-orange-600",
    Medio: "text-blue-600",
    Crítico: "text-red-600",
  };

  const bgNivel = {
    Alto: "bg-orange-100",
    Medio: "bg-blue-100",
    Crítico: "bg-red-100",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Historial Médico
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`flex items-center justify-between p-4 rounded-xl border shadow-sm transition-all 
              ${
                categoriaSeleccionada === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white border-gray-200 hover:bg-blue-50 text-gray-700"
              }`}
          >
            <span className="font-medium">{cat}</span>
            <span
              className={`text-sm font-semibold ${
                categoriaSeleccionada === cat ? "text-white" : "text-blue-600"
              }`}
            >
              {contarPorCategoria(cat)}
            </span>
          </button>
        ))}
      </div>

      
      <div className="space-y-4">
        {resultadosFiltrados.map((n, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
          >
            
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <Clipboard
                  className={`${colorNivel[n.nivel]} shrink-0`}
                  size={20}
                />
                <h3 className="text-base font-semibold text-gray-800">
                  {n.diagnostico}
                </h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${bgNivel[n.nivel]} ${colorNivel[n.nivel]}`}
                >
                  {n.nivel}
                </span>
              </div>
              <button
                className={`text-sm font-medium ${colorNivel[n.nivel]} hover:underline`}
              >
                Más
              </button>
            </div>

            
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} /> {n.fecha}
              </div>
              <div className="flex items-center gap-1">
                <User size={14} /> {n.medico}
              </div>
              <div className="flex items-center gap-1">
                <Stethoscope size={14} /> {n.especialidad}
              </div>
              <div className="flex items-center gap-1">
                <FileText size={14} /> {n.tipo}
              </div>
            </div>

            
            <p className="text-gray-700 text-sm leading-relaxed">
              {n.descripcion}
            </p>
          </div>
        ))}

        {resultadosFiltrados.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-sm border border-dashed rounded-xl bg-white">
            No se encontraron registros para esta categoría.
          </div>
        )}
      </div>
    </div>
  );
}

export default MainHistorialMedico;
