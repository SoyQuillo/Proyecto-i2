import React from "react";
import * as Icons from "lucide-react";
import { healthStats } from "../data/healthStats";

function Cards() {
  const citas = healthStats.filter((n) => n.title === "Proximas Citas");
  const resultados = healthStats.filter((n) => n.title === "Resultados Recientes");
  const medicamentos = healthStats.filter((n) => n.title === "Medicamentos Activos");
  const estado = healthStats.filter((n) => n.title === "Estado de Salud");

  return (
    <div className="flex flex-wrap justify-between gap-4 max-w-6xl mx-auto mt-6">
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white shadow-sm w-[240px] h-[120px] 
                      transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-indigo-400">
        <Icons.Calendar className="text-indigo-500 mb-2" size={22} />
        <div className="text-sm text-gray-600 font-medium">Próximas Citas</div>
        <div className="text-lg font-semibold text-gray-900">
          {citas.map((n) => (
            <span key={n.id}>{n.value}</span>
          ))}
        </div>
      </div>

      
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white shadow-sm w-[240px] h-[120px] 
                      transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-emerald-400">
        <Icons.FileText className="text-emerald-500 mb-2" size={22} />
        <div className="text-sm text-gray-600 font-medium">Resultados Recientes</div>
        <div className="text-lg font-semibold text-gray-900">
          {resultados.map((n) => (
            <span key={n.id}>{n.value}</span>
          ))}
        </div>
      </div>

    
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white shadow-sm w-[240px] h-[120px] 
                      transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-amber-400">
        <Icons.Link className="text-amber-500 mb-2" size={22} />
        <div className="text-sm text-gray-600 font-medium">Medicamentos Activos</div>
        <div className="text-lg font-semibold text-gray-900">
          {medicamentos.map((n) => (
            <span key={n.id}>{n.value}</span>
          ))}
        </div>
      </div>

    
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white shadow-sm w-[240px] h-[120px] 
                      transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-emerald-500">
        <Icons.Heart className="text-emerald-600 mb-2" size={22} />
        <div className="text-sm text-gray-600 font-medium">Estado de Salud</div>
        <div className="text-lg font-bold text-emerald-600">
          {estado.map((n) => (
            <span key={n.id}>{n.value}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
