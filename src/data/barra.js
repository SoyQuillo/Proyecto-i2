import MainPaciente from "../components/MainPaciente";
import MainHistorialMedico from "../components/MainHistorialMedico";
import MainMedicamentos from "../components/MainMedicamentos";
import MainAlergias from "../components/MainAlergias";
import MainLaboratorio from "../components/MainLaboratorio";
import MainImagenes from "../components/MainImagenes";
import MainNotasClinicas from "../components/MainNotasClinicas";

export const barra = [
  {
    id: 1,
    nombre: "Datos personales",
    icon: "User",
    componente: MainPaciente,
  },
  {
    id: 2,
    nombre: "Historial Medico",
    icon: "FileText",
    componente: MainHistorialMedico,
  },
  {
    id: 3,
    nombre: "Medicamentos",
    icon: "Pill",
    componente: MainMedicamentos,
  },
  {
    id: 4,
    nombre: "Alergias",
    icon: "AlertTriangle",
    componente: MainAlergias,
  },
  {
    id: 5,
    nombre: "Laboratorio",
    icon: "FlaskConical",
    componente: MainLaboratorio,
  },
  {
    id: 6,
    nombre: "Imagenes",
    icon: "Image",
    componente: MainImagenes,
  },
  {
    id: 7,
    nombre: "Notas Clinicas",
    icon: "FileEdit",
    componente: MainNotasClinicas,
  },
];
