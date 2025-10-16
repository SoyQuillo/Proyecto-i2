import React from "react";
import {
  AlertTriangle,
  Activity,
  Pill,
  Apple,
  CircleAlert,
  Edit3,
  FileText,
} from "lucide-react";
import { alergias } from "../data/alergias";

function MainAlergias({ paciente }) {
  const pacienteId = paciente?.id || null;
  const alergiasPaciente = alergias.filter((m) => m.pacienteId === pacienteId);

  const alergiasCriticas = alergiasPaciente.filter(
    (n) => n.nivel === "Crítica"
  );
  const totalAlergias = alergiasPaciente.length;
  const totalAlergiasSevera = alergiasPaciente.filter(
    (n) => n.severidad === "Severa"
  ).length;
  const totalAlergiaMedicamentos = alergiasPaciente.filter(
    (n) => n.tipo === "Medicamento"
  ).length;
  const totalAlergiasAlimentos = alergiasPaciente.filter(
    (n) => n.tipo === "Alimento"
  ).length;
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-blue-700 w-7 h-7" />
        <h1 className="text-2xl font-semibold text-gray-800">
          Alergias e Intolerancias
        </h1>
      </div>

      {alergiasCriticas.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-2 text-red-700 mb-2">
            <CircleAlert className="w-5 h-5" />
            <h2 className="font-semibold uppercase text-sm">
              Alergias Críticas
            </h2>
          </div>
          {alergiasCriticas.map((n) => (
            <p key={n.id} className="text-sm text-red-800 ml-7">
              <strong>{n.nombre}</strong> ({n.tipo}) — {n.reaccion.join(", ")}
            </p>
          ))}
          <p className="text-xs text-red-600 mt-2 ml-7">
            Informe inmediatamente al personal médico antes de cualquier
            procedimiento.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
          <AlertTriangle className="text-red-500 w-6 h-6 mx-auto mb-2" />
          <h3 className="text-2xl font-semibold">{totalAlergias}</h3>
          <p className="text-gray-600 text-sm">Total Alergias</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
          <Activity className="text-orange-500 w-6 h-6 mx-auto mb-2" />
          <h3 className="text-2xl font-semibold">{totalAlergiasSevera}</h3>
          <p className="text-gray-600 text-sm">Severas</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
          <Pill className="text-blue-500 w-6 h-6 mx-auto mb-2" />
          <h3 className="text-2xl font-semibold">{totalAlergiaMedicamentos}</h3>
          <p className="text-gray-600 text-sm">Medicamentos</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
          <Apple className="text-green-500 w-6 h-6 mx-auto mb-2" />
          <h3 className="text-2xl font-semibold">{totalAlergiasAlimentos}</h3>
          <p className="text-gray-600 text-sm">Alimentos</p>
        </div>
      </div>

      <div className="grid gap-6">
        {alergiasPaciente.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center text-gray-500 shadow-sm">
            No hay alergias registradas para este paciente.
          </div>
        ) : (
          alergiasPaciente.map((n) => (
            <div
              key={n.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {n.nombre}
                    </h2>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        n.nivel === "Crítica"
                          ? "bg-red-100 text-red-700"
                          : n.nivel === "Moderada"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {n.nivel}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 font-medium px-2 py-1 rounded-full">
                      {n.estado}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
                    <span>
                      {n.tipo === "Medicamento" ? "💊" : "🍎"} {n.tipo}
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

              <p className="text-gray-700 text-sm">
                <span className="font-medium text-gray-800">Reacción:</span>{" "}
                {n.reaccion.join(", ")}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MainAlergias;
