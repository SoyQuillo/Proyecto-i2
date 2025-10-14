import React from "react";
import {
  User,
  Calendar,
  Droplet,
  Edit,
  Printer,
  Download,
} from "lucide-react";

function PacienteHeader({ paciente }) {
  if (!paciente) return null;

  const iniciales = paciente.nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
       
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-semibold shadow-sm">
          {iniciales}
        </div>


        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {paciente.nombre}
          </h2>
          <div className="flex items-center flex-wrap gap-x-4 text-sm text-gray-600 mt-1">
            <p>
              <span className="font-medium text-gray-700">{paciente.usuario}</span>
            </p>
            <p>{paciente.edad} años</p>
            <p>{paciente.sexo}</p>
            <p className="flex items-center gap-1">
              <Droplet className="w-4 h-4 text-red-500" />
              {paciente.tipoSangre}
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm">
          <Printer className="w-4 h-4" />
          Imprimir
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm">
          <Download className="w-4 h-4" />
          Exportar
        </button>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
          <Edit className="w-4 h-4" />
          Editar
        </button>
      </div>
    </div>
  );
}

export default PacienteHeader;
