export const alergias = [
  {
    id: 1,
    pacienteId: 1,
    nombre: "Penicilina",
    tipo: "Medicamento",
    nivel: "Crítica",
    severidad: "Severa",
    estado: "Confirmada",
    fecha: "2020-03-14",
    verificadaPor: "Dra. María González",
    reaccion: ["Erupción cutánea", "Dificultad respiratoria", "Hinchazón"],
    observacion:
      "Informar inmediatamente al personal médico antes de cualquier procedimiento.",
  },
  {
    id: 2,
    pacienteId: 1,
    nombre: "Mariscos",
    tipo: "Alimento",
    nivel: "Moderada",
    severidad: "Media",
    estado: "Confirmada",
    fecha: "2018-07-21",
    verificadaPor: "Dra. Ana Martínez",
    reaccion: ["Urticaria", "Náuseas", "Vómitos"],
    observacion: "Evitar completamente el consumo de mariscos y derivados.",
  },

  {
    id: 3,
    pacienteId: 2,
    nombre: "Polvo doméstico",
    tipo: "Ambiental",
    nivel: "Baja",
    severidad: "Leve",
    estado: "Sospechada",
    fecha: "2023-04-10",
    verificadaPor: "Dr. Julio Aranda",
    reaccion: ["Estornudos", "Congestión nasal"],
    observacion:
      "Se recomienda control ambiental y uso de purificadores de aire.",
  },

  {
    id: 4,
    pacienteId: 3,
    nombre: "Aspirina",
    tipo: "Medicamento",
    nivel: "Crítica",
    severidad: "Alta",
    estado: "Confirmada",
    fecha: "2022-12-01",
    verificadaPor: "Dra. Laura Jiménez",
    reaccion: ["Dificultad respiratoria", "Erupción cutánea"],
    observacion:
      "Informar inmediatamente al personal médico antes de cualquier procedimiento.",
  },

  {
    id: 5,
    pacienteId: 4,
    nombre: "Polen",
    tipo: "Ambiental",
    nivel: "Moderada",
    severidad: "Media",
    estado: "Confirmada",
    fecha: "2024-03-12",
    verificadaPor: "Dr. Juan Cárdenas",
    reaccion: ["Congestión nasal", "Picazón ocular"],
    observacion:
      "Se sugiere tratamiento antihistamínico en época de floración.",
  },
];
