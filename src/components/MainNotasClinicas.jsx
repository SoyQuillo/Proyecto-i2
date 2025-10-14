import React from 'react'

function MainNotasClinicas({paciente}) {
  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Hola Main Notas Clinicas</h1>
      {paciente && (
        <p className="text-gray-600 mt-2">
          Mostrando información del paciente: <strong>{paciente.nombre}</strong>
        </p>
      )}
    </div>  
    </>
  )
}

export default MainNotasClinicas
