import React, { useState } from "react";
import {
  Pill,
  Plus,
  FileText,
  CalendarDays,
  Edit,
  Pause,
} from "lucide-react";
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

  return (
    <div className="bg-gray-50 min-h-screen p-8">
    
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-black text-3xl text-gray-900">Medicamentos</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm transition">
          <Plus size={16} /> Nuevo Medicamento
        </button>
      </div>

    
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-8 px-4 py-3">
        <div className="flex items-center gap-6">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`text-sm font-medium flex items-center gap-2 border-b-2 pb-2 transition ${
                categoriaSeleccionada === cat
                  ? "text-blue-700 border-blue-700"
                  : "text-gray-600 border-transparent hover:text-blue-700"
              }`}
            >
              {cat}
              <span
                className={`text-xs font-semibold ${
                  categoriaSeleccionada === cat
                    ? "text-blue-700"
                    : "text-gray-500"
                }`}
              >
                {contarPorCategoria(cat)}
              </span>
            </button>
          ))}
        </div>
      </div>

      
      <div className="space-y-6">
        {resultadosFiltrados.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center text-gray-500 shadow-sm">
            No hay medicamentos registrados para este paciente.
          </div>
        ) : (
          resultadosFiltrados.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition hover:shadow-md"
            >
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Pill className="text-blue-600 w-5 h-5" /> {m.nombre}
                    <span
                      className={`ml-2 text-xs font-medium px-2.5 py-1 rounded-full ${
                        m.estado === "Activo"
                          ? "bg-green-100 text-green-700"
                          : m.estado === "Suspendido"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {m.estado}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Prescrito por:{" "}
                    <span className="font-medium text-gray-700">
                      Dr. {m.doctorId}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3 text-sm text-blue-600">
                  <button className="flex items-center gap-1 hover:text-blue-800 transition">
                    <Edit size={15} /> Editar
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-800 transition">
                    <Pause size={15} /> Pausar
                  </button>
                </div>
              </div>

              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Dosis</p>
                  <p className="text-gray-800">{m.dosis}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Frecuencia
                  </p>
                  <p className="text-gray-800">{m.frecuencia}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Vía</p>
                  <p className="text-gray-800">{m.via}</p>
                </div>
              </div>

              
              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-800 flex items-center gap-2 mb-3">
                  <FileText className="text-blue-600 w-4 h-4" /> Información del
                  Tratamiento
                </h4>

                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Indicación</p>
                    <p className="text-gray-800">{m.indicacion}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Inicio</p>
                    <p className="flex items-center gap-1 text-gray-800">
                      <CalendarDays size={15} /> {m.inicio}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Fin</p>
                    <p className="flex items-center gap-1 text-gray-800">
                      <CalendarDays size={15} /> {m.fin}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">
                      Instrucciones
                    </p>
                    <p className="text-gray-800">{m.instrucciones}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  Última actualización: {m.ultimaActualizacion}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MainMedicamentos;
