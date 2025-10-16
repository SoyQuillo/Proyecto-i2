import React, { useState } from "react";
import { resultadosLaboratorio } from "../data/resultadosLaboratorio";
import { Bell } from "lucide-react";

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
    <div>
      <div>
        <h1 className="font-black text-4xl text-blue-900">
          Resultados de Laboratorio
        </h1>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 text-blue-800 font-semibold">
          <Bell />
          <span>Nuevos Resultados Disponibles</span>
        </div>
        <p className="text-gray-700">
          Hay {resultadosNuevos} nuevos resultados de laboratorio por revisar
        </p>
      </div>

      <div className="flex gap-6 border-b border-gray-200 mt-8 pb-2">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`flex items-center gap-2 text-sm font-semibold ${
              categoriaSeleccionada === cat
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600 hover:text-blue-700"
            }`}
          >
            {cat}
            <span
              className={`text-xs font-bold ${
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

      <div className="mt-8 space-y-4">
        {resultadosFiltrados.length > 0 ? (
          resultadosFiltrados.map((n) => (
            <div
              key={n.id}
              className="border p-4 rounded-2xl shadow-sm bg-white hover:bg-blue-50 transition"
            >
              <div className="flex justify-between">
                <h2 className="font-bold text-lg text-blue-900">{n.examen}</h2>
                {n.nuevo && (
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Nuevo
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600">
                <strong>Fecha resultado:</strong> {n.fechaResultado}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Doctor:</strong> {n.doctor} ({n.especialidad})
              </p>

              
              <div className="mt-2 text-sm text-gray-700">
                {n.resultados.map((r, idx) => (
                  <p key={idx}>
                    • {r.parametro}:{" "}
                    <span className="font-semibold">{r.valor}</span> {r.unidad}{" "}
                    —{" "}
                    <span
                      className={`${
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
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No hay resultados para esta categoría.
          </p>
        )}
      </div>
    </div>
  );
}

export default MainLaboratorio;
