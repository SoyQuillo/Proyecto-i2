import React from "react";
import { historialMedico } from "../data/historialMedico";
import { FileText, AlertTriangle, Scissors, Calendar, User, Stethoscope, Clipboard } from "lucide-react";

function MainHistorialMedico({ paciente }) {
 
  const countTotal = historialMedico.length;
  const countCriticos = historialMedico.filter((n) => n.nivel === "Crítico").length;
  const countCirugias = historialMedico.filter((n) => n.tipo === "Cirugía").length;
  const countSeguimientos = historialMedico.filter((n) => n.tipo === "Seguimiento").length;

  const historialPaciente = historialMedico.filter((n) => n.pacienteId === paciente.id);
  
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
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <FileText className="text-blue-600" size={24} />
          <div>
            <div className="text-2xl font-bold text-blue-600">{countTotal}</div>
            <div className="text-sm text-gray-500">Total Entradas</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <AlertTriangle className="text-red-600" size={24} />
          <div>
            <div className="text-2xl font-bold text-red-600">{countCriticos}</div>
            <div className="text-sm text-gray-500">Críticos</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <Scissors className="text-green-600" size={24} />
          <div>
            <div className="text-2xl font-bold text-green-600">{countCirugias}</div>
            <div className="text-sm text-gray-500">Cirugías</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <Calendar className="text-yellow-600" size={24} />
          <div>
            <div className="text-2xl font-bold text-yellow-600">{countSeguimientos}</div>
            <div className="text-sm text-gray-500">Seguimientos</div>
          </div>
        </div>
      </div>

     
      <div className="space-y-4">
        {historialPaciente.map((n, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200"
          >
         
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Clipboard className={`${colorNivel[n.nivel]} shrink-0`} size={20} />
                <h3 className="text-base font-semibold text-gray-800">{n.diagnostico}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${bgNivel[n.nivel]} ${colorNivel[n.nivel]}`}>
                  {n.nivel}
                </span>
              </div>
              <button className={`text-sm font-medium ${colorNivel[n.nivel]} hover:underline`}>
                Más
              </button>
            </div>

          
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
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

           
            <p className="text-gray-700 text-sm">{n.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainHistorialMedico;
