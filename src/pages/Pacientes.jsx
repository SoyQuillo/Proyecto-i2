import React, { useState } from "react";
import PacienteSidebar from "../components/PacienteSidebar";
import PacienteHeader from "../components/PacienteHeader";
import BarraPacientes from "../components/BarraPacientes";
import MainPaciente from "../components/MainPaciente";
import { barra } from "../data/barra";

function Pacientes() {
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState("Datos personales");

  
  const itemActivo = barra.find((item) => item.nombre === seccionActiva);
  const ComponenteActivo = itemActivo?.componente || MainPaciente;

  return (
    <div className="flex bg-gray-50 min-h-screen pt-16">
      <PacienteSidebar onSelectPaciente={setPacienteSeleccionado} />

      <main className="flex-1 ml-80 p-8 overflow-y-auto space-y-6">
        {pacienteSeleccionado ? (
          <>
            <PacienteHeader paciente={pacienteSeleccionado} />
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-3">
              <BarraPacientes
                seccionActiva={seccionActiva}
                onChangeSeccion={setSeccionActiva}
              />
            </div>

           
            <ComponenteActivo paciente={pacienteSeleccionado} />
          </>
        ) : (
          <MainPaciente paciente={null} />
        )}
      </main>
    </div>
  );
}

export default Pacientes;
