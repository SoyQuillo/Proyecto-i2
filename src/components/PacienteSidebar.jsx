import React, { useState } from "react";
import { Search, PlusCircle, Users, AlertCircle } from "lucide-react";
import { pacientesRecientes } from "../data/pacientesRecientes";

function PacienteSidebar( {onSelectPaciente}) {
  const [criterio, setCriterio] = useState("nombre");
  const [vista, setVista] = useState("Criticos");
  const [busqueda, setBusqueda] = useState("");
  const lista = Array.isArray(pacientesRecientes) ? pacientesRecientes : [];
  const consulta = lista.filter((n) => n.tipo === "En consulta");
  const criticos = lista.filter((n) => n.tipo === "Criticos");
  const pacientesAMostrar = vista === "Criticos" ? criticos : consulta;

  const pacientesFiltrados = pacientesAMostrar.filter((n) =>
    n.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
  );


  console.log('pacientesRecientes total=', lista.length, 'criticos=', criticos.length, 'consulta=', consulta.length);

  return (
    <aside className="w-80 h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 to-white border-r border-blue-100 flex flex-col p-5 fixed top-16 left-0 shadow-lg z-40">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-4 mb-5 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-6 h-6" />
          <h2 className="text-lg font-bold">
            Gestión de Pacientes
          </h2>
        </div>
        <p className="text-xs text-blue-100">Total: {lista.length} pacientes</p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          type="text"
          placeholder="Buscar paciente..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm bg-white"
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setVista("Criticos")}
          className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-semibold transition shadow-sm flex items-center justify-center gap-2 ${
            vista === "Criticos"
              ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
          }`}
        >
          <AlertCircle size={16} />
          Críticos ({criticos.length})
        </button>
        <button
          onClick={() => setVista("En consulta")}
          className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-semibold transition shadow-sm flex items-center justify-center gap-2 ${
            vista === "En consulta"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
          }`}
        >
          <Users size={16} />
          Consulta ({consulta.length})
        </button>
      </div>

      <div className="overflow-y-auto flex-1">
        {pacientesFiltrados.length === 0 ? (
          <div className="text-center py-8">
            <Users size={48} className="mx-auto mb-3 text-gray-300" />
            <p className="text-sm text-gray-500">No se encontraron pacientes</p>
          </div>
        ) : (
          <div className="space-y-2">
            {pacientesFiltrados.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectPaciente(p)}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white cursor-pointer transition-all border border-gray-200 hover:border-blue-300 hover:shadow-md bg-white/50"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm font-bold shadow-md flex-shrink-0">
                  {p.nombre
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="flex flex-col leading-tight flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{p.nombre}</p>
                  <p className="text-xs text-gray-500">ID: {p.usuario}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-600">{p.edad} años</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      p.estado === "Activo"
                        ? "bg-green-100 text-green-700"
                        : p.estado === "En consulta"
                        ? "bg-blue-100 text-blue-700"
                        : p.estado === "Recuperacion"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {p.estado}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {p.lugar}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition font-semibold shadow-lg">
        <PlusCircle className="w-5 h-5" />
        Nuevo Paciente
      </button>
    </aside>
  );
}

export default PacienteSidebar;
