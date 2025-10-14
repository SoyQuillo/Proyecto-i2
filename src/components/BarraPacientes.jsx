import React from "react";
import { barra } from "../data/barra";
import * as Icons from "lucide-react";

function BarraPacientes({seccionActiva, onChangeSeccion} ) {
  return (
    <>
      <div className="flex gap-6 text-gray-700 text-sm">
        {barra.map((n) => {
          const Icon = Icons[n.icon];
          const activo = seccionActiva === n.nombre
          return (
            <button
              key={n.id}
              onClick={() => onChangeSeccion(n.nombre) }
               className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition 
              ${activo ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {n.nombre}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default BarraPacientes;
