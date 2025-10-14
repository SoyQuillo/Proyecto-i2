import React, { useState } from "react";
import { Search, PlusCircle } from "lucide-react";
import { pacientesRecientes } from "../data/pacientesRecientes";

function PacienteSidebar( {onSelectPaciente}) {
  const [criterio, setCriterio] = useState("nombre");
  const [vista, setVista] = useState("Criticos");
  const [busqueda, setBusqueda] = useState("");
  const consulta = pacientesRecientes.filter((n) => n.tipo === "En consulta");
  const criticos = pacientesRecientes.filter((n) => n.tipo === "Criticos");
  const pacientesAMostrar = vista === "Criticos" ? criticos : consulta;

  const pacientesFiltrados = pacientesAMostrar.filter((n) =>
    n.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
  );

  return (
    <aside className="w-80 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col p-4 fixed top-16 left-0 shadow-sm z-40">
      <div className="flex items-center gap-2 mb-5">
        <Search className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">
          Buscar Pacientes
        </h2>
      </div>

      <div className="mb-3">
        <label className="text-sm text-gray-600">Buscar por</label>
        <select
          onChange={(e) => setCriterio(e.target.value)}
          className="w-full mt-1 border border-gray-300 rounded-lg text-sm p-2 bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={criterio}
        >
          <option value="nombre">Nombre</option>
          <option value="apellido">Apellido</option>
        </select>
      </div>

      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        type="text"
        placeholder={
          criterio === "nombre"
            ? "Buscar por nombre..."
            : "Buscar por apellido..."
        }
        className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <div className="flex gap-2 mb-4 border-b border-gray-200 pb-1">
        <button
          onClick={() => setVista("Criticos")}
          className="flex-1 text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1"
        >
          Críticos
        </button>
        <button
          onClick={() => setVista("En consulta")}
          className="flex-1 text-sm font-medium text-gray-500 pb-1 hover:text-blue-600 transition"
        >
          En Consulta
        </button>
      </div>

      <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <h3 className="text-xs uppercase text-gray-500 mb-3 tracking-wide">
          Pacientes recientes
        </h3>

        {pacientesFiltrados.map((p) => (
          <div
            key={p.id}
            onClick={()=> onSelectPaciente(p)}
            className="flex items-start gap-3 p-3 mb-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-all border border-transparent hover:border-blue-100"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold shadow-sm">
              {p.nombre
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-semibold text-gray-800">{p.nombre}</p>
              <p className="text-xs text-gray-500">{p.usuario}</p>
              <p className="text-xs text-gray-500">
                {p.edad} años · {p.sexo} ·{" "}
                <span
                  className={`font-medium ${
                    p.estado === "Activo"
                      ? "text-green-600"
                      : p.estado === "En consulta"
                      ? "text-blue-600"
                      : p.estado === "Recuperacion"
                      ? "text-yellow-600"
                      : "text-orange-600"
                  }`}
                >
                  {p.estado}
                </span>
              </p>
              <p className="text-xs text-gray-400">
                {p.lugar} · {p.especialidad}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 flex items-center justify-center gap-2 text-blue-600 text-sm font-medium py-2 border-t border-gray-200 hover:text-blue-700 transition">
        <PlusCircle className="w-4 h-4" />
        Nuevo Paciente
      </button>
    </aside>
  );
}

export default PacienteSidebar;
