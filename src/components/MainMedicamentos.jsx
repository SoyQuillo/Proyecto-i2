import React from 'react'
import {medicamentos} from '../data/medicamentos'

function MainMedicamentos({paciente}) {
  const countMedicamentos = medicamentos.length;
  const countMedicamentoActivo = medicamentos.filter(n => n.estado === "Activo");
  const countMedicamentoCompletados = medicamentos.filter(n => n.estado === "Completados");
  const countMedicamentoSuspendidos = medicamentos.filter(n => n.estado === "Suspendidos");
  return (
    <>
      
    <div>
      <div>
        {medicamentos.map((n, index) => (
          <div key={index}>
            <h1>{n.nombre}</h1>
            <h3> {n.estado} </h3>
            <h3>Dosis: {n.dosis} </h3>
            <h3>Frecuencia: {n.frecuencia} </h3>
            <h3>Via {n.via} </h3>
          </div>
        ) )}
      </div>
    </div>

    </>
  )
}

export default MainMedicamentos
