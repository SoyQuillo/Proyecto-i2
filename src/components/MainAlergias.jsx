import React, { useState } from "react";
import {
  AlertTriangle,
  CircleAlert,
  Edit3,
  FileText,
  Pill,
  Apple,
} from "lucide-react";
import { alergias } from "../data/alergias";

function MainAlergias({ paciente }) {
  const pacienteId = paciente?.id || null;
  const alergiasPaciente = alergias.filter((m) => m.pacienteId === pacienteId);
  const alergiasCriticas = alergiasPaciente.filter((n) => n.nivel === "Crítica");

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("Total Alergias");

  const categorias = [
    "Total Alergias",
    ...new Set(alergiasPaciente.map((n) => n.nivel)),
  ];

  const contarPorCategoria = (categoria) => {
    if (categoria === "Total Alergias") return alergiasPaciente.length;
    return alergiasPaciente.filter((n) => n.nivel === categoria).length;
  };

  const resultadosFiltrados =
    categoriaSeleccionada === "Total Alergias"
      ? alergiasPaciente
      : alergiasPaciente.filter((n) => n.nivel === categoriaSeleccionada);


  const colorNivel = {
    Crítica: "text-red-600",
    Moderada: "text-orange-600",
    Leve: "text-blue-600",
  };

  const bgNivel = {
    Crítica: "bg-red-100",
    Moderada: "bg-orange-100",
    Leve: "bg-blue-100",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Encabezado */}
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-blue-700 w-6 h-6" />
        <h2 className="text-xl font-semibold text-gray-800">
          Alergias e Intolerancias
        </h2>
      </div>

      
      {alergiasCriticas.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <div className="flex items-center gap-2 text-red-700 mb-3">
            <CircleAlert className="w-5 h-5" />
            <h3 className="font-semibold uppercase text-sm">
              Alergias Críticas
            </h3>
          </div>
          {alergiasCriticas.map((n) => (
            <p key={n.id} className="text-sm text-red-800 ml-7">
              <strong>{n.nombre}</strong> ({n.tipo}) — {n.reaccion.join(", ")}
            </p>
          ))}
          <p className="text-xs text-red-600 mt-3 ml-7 italic">
            Informe inmediatamente al personal médico antes de cualquier
            procedimiento.
          </p>
        </div>
      )}

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`flex items-center justify-between p-4 rounded-xl border shadow-sm transition-all duration-200
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
        {resultadosFiltrados.map((n) => (
          <div
            key={n.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
          >
            {/* Encabezado de la alergia */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold text-gray-800">
                    {n.nombre}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${bgNivel[n.nivel]} ${colorNivel[n.nivel]}`}
                  >
                    {n.nivel}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded-full">
                    {n.estado}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>
                    {n.tipo === "Medicamento" ? (
                      <Pill size={14} className="inline mr-1" />
                    ) : (
                      <Apple size={14} className="inline mr-1" />
                    )}
                    {n.tipo}
                  </span>
                  <span>Desde: {n.fecha}</span>
                  <span>Verificado por: {n.verificadaPor}</span>
                </div>
              </div>

              <div className="flex gap-4 text-sm text-blue-600 font-medium">
                <button className="flex items-center gap-1 hover:underline">
                  <Edit3 className="w-4 h-4" /> Editar
                </button>
                <button className="flex items-center gap-1 hover:underline">
                  <FileText className="w-4 h-4" /> Detalles
                </button>
              </div>
            </div>

           
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-medium text-gray-800">Reacción:</span>{" "}
              {n.reaccion.join(", ")}
            </p>
          </div>
        ))}

        
        {resultadosFiltrados.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-sm border border-dashed rounded-xl bg-white">
            No hay alergias registradas para esta categoría.
          </div>
        )}
      </div>
    </div>
  );
}

export default MainAlergias;
