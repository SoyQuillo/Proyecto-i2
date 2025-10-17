import React, { useState } from "react";
import { Pill, Plus, FileText, CalendarDays, Edit, Pause } from "lucide-react";
import { medicamentos } from "../data/medicamentos";

function MainMedicamentos({ paciente }) {
  const pacienteId = paciente?.id || null;
  const medicamentosPaciente = medicamentos.filter(
    (m) => m.pacienteId === pacienteId
  );

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const categorias = [
    "Todos",
    ...new Set(medicamentosPaciente.map((n) => n.estado)),
  ];

  const contarPorCategoria = (categoria) => {
    if (categoria === "Todos") return medicamentosPaciente.length;
    return medicamentosPaciente.filter((n) => n.estado === categoria).length;
  };

  const resultadosFiltrados =
    categoriaSeleccionada === "Todos"
      ? medicamentosPaciente
      : medicamentosPaciente.filter((n) => n.estado === categoriaSeleccionada);

  const colorEstado = {
    Activo: "text-green-600",
    Suspendido: "text-yellow-600",
    Finalizado: "text-gray-600",
  };

  const bgEstado = {
    Activo: "bg-green-100",
    Suspendido: "bg-yellow-100",
    Finalizado: "bg-gray-100",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Pill className="text-blue-700 w-6 h-6" />
          Medicamentos
        </h2>
        <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition-all">
          <Plus size={18} /> Nuevo Medicamento
        </button>
      </div>

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
        {resultadosFiltrados.map((m) => (
          <div
            key={m.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <Pill className="text-blue-700 shrink-0" size={20} />
                <h3 className="text-base font-semibold text-gray-800">
                  {m.nombre}
                </h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    bgEstado[m.estado]
                  } ${colorEstado[m.estado]}`}
                >
                  {m.estado}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-blue-700">
                <button className="flex items-center gap-1 hover:underline">
                  <Edit size={15} /> Editar
                </button>
                <button className="flex items-center gap-1 hover:underline">
                  <Pause size={15} /> Pausar
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <CalendarDays size={14} /> Inicio: {m.inicio}
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays size={14} /> Fin: {m.fin}
              </div>
              <div className="flex items-center gap-1">
                <FileText size={14} /> Vía: {m.via}
              </div>
            </div>

            <div className="text-sm leading-relaxed text-gray-700">
              <p className="mb-1">
                <span className="font-medium text-gray-800">Dosis:</span>{" "}
                {m.dosis}
              </p>
              <p className="mb-1">
                <span className="font-medium text-gray-800">Frecuencia:</span>{" "}
                {m.frecuencia}
              </p>
              <p className="mb-1">
                <span className="font-medium text-gray-800">Indicación:</span>{" "}
                {m.indicacion}
              </p>
              <p>
                <span className="font-medium text-gray-800">
                  Instrucciones:
                </span>{" "}
                {m.instrucciones}
              </p>
            </div>

            <p className="text-xs text-gray-400 mt-3">
              Última actualización: {m.ultimaActualizacion}
            </p>
          </div>
        ))}

        {resultadosFiltrados.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-sm border border-dashed rounded-xl bg-white">
            No se encontraron medicamentos para esta categoría.
          </div>
        )}
      </div>
    </div>
  );
}

export default MainMedicamentos;
