import React from "react";
import {
  Pill,
  Printer,
  Download,
  Edit,
  Plus,
  FileText,
  CalendarDays,
} from "lucide-react";
import { medicamentos } from "../data/medicamentos";

function MainMedicamentos({ paciente }) {
  const pacienteId = paciente?.id || null;
  const medicamentosPaciente = medicamentos.filter(
    (m) => m.pacienteId === pacienteId
  );

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold shadow-sm">
            {paciente?.nombre
              ? paciente.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")
              : "?"}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {paciente?.nombre || "Paciente"}
            </h2>
            <p className="text-gray-500 text-sm">
              {paciente?.usuario || "MED-2024-001"} ·{" "}
              {paciente?.edad ? `${paciente.edad} años` : "-"} ·{" "}
              {paciente?.sexo || "-"} · {paciente?.tipoSangre || "O+"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">
            <Printer size={16} /> Imprimir
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">
            <Download size={16} /> Exportar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
            <Edit size={16} /> Editar
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-8">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8 text-sm">
            <button className="text-gray-600 hover:text-blue-600 transition">
              Datos Personales
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition">
              Historial Médico
            </button>
            <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">
              Medicamentos
              <span className="ml-2 bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                {medicamentosPaciente.length}
              </span>
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition">
              Alergias
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition">
              Laboratorio
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition">
              Imágenes
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition">
              Notas Clínicas
            </button>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm transition">
            <Plus size={16} /> Nuevo Medicamento
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {medicamentosPaciente.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center text-gray-500 shadow-sm">
            No hay medicamentos registrados para este paciente.
          </div>
        ) : (
          medicamentosPaciente.map((m) => (
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
                <div className="text-sm text-gray-500">{m.via}</div>
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
                  <p className="text-sm text-gray-500 font-medium">
                    Recargas restantes
                  </p>
                  <p className="text-gray-800">{m.recargasRestantes}</p>
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
