import React, { useState } from "react";
import { resultadosLaboratorio } from "../data/resultadosLaboratorio";
import { Bell, FlaskConical, FileText } from "lucide-react";

function MainLaboratorio({ paciente }) {
  const pacienteId = paciente?.id || null;
  const resultadosPaciente = resultadosLaboratorio.filter(
    (n) => n.pacienteId === pacienteId
  );

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const categorias = [
    "Todos",
    ...new Set(resultadosPaciente.map((n) => n.especialidad)),
  ];

  const contarPorCategoria = (categoria) => {
    if (categoria === "Todos") return resultadosPaciente.length;
    return resultadosPaciente.filter((n) => n.especialidad === categoria)
      .length;
  };

  const resultadosFiltrados =
    categoriaSeleccionada === "Todos"
      ? resultadosPaciente
      : resultadosPaciente.filter(
          (n) => n.especialidad === categoriaSeleccionada
        );

  const resultadosNuevos = resultadosPaciente.filter((n) => n.nuevo).length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FlaskConical className="text-blue-700 w-6 h-6" />
          Resultados de Laboratorio
        </h1>
        <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition-all">
          <FileText size={18} /> Descargar Reporte
        </button>
      </div>

      <div className="flex items-center gap-3 p-4 bg-blue-100 border border-blue-200 rounded-xl mb-8">
        <Bell className="text-blue-700" />
        <div>
          <p className="font-semibold text-blue-800">
            Nuevos resultados disponibles
          </p>
          <p className="text-sm text-gray-700">
            Hay {resultadosNuevos} nuevos resultados de laboratorio por revisar.
          </p>
        </div>
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
        {resultadosFiltrados.length > 0 ? (
          resultadosFiltrados.map((n) => (
            <div
              key={n.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <FlaskConical className="text-blue-700 shrink-0" size={20} />
                  <h2 className="text-base font-semibold text-gray-800">
                    {n.examen}
                  </h2>
                  {n.nuevo && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      Nuevo
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  {n.fechaResultado}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                <div>
                  <strong>Doctor:</strong> {n.doctor}
                </div>
                <div>
                  <strong>Especialidad:</strong> {n.especialidad}
                </div>
              </div>

              <div className="text-sm text-gray-700">
                {n.resultados.map((r, idx) => (
                  <p key={idx} className="mb-1">
                    • {r.parametro}:{" "}
                    <span className="font-semibold">{r.valor}</span> {r.unidad}{" "}
                    —{" "}
                    <span
                      className={`font-semibold ${
                        r.estado === "Alto"
                          ? "text-red-600"
                          : r.estado === "Bajo"
                          ? "text-orange-500"
                          : "text-green-600"
                      }`}
                    >
                      {r.estado}
                    </span>
                  </p>
                ))}
              </div>

              {/* PIE */}
              <p className="text-xs text-gray-400 mt-3">
                Última actualización: {n.fechaResultado}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm border border-dashed rounded-xl bg-white">
            No se encontraron resultados para esta categoría.
          </div>
        )}
      </div>
    </div>
  );
}

export default MainLaboratorio;
