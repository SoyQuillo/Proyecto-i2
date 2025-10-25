import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuarios } from '../data/usuarios';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    documento: '',
    usuario: '',
    contrasena: '',
    nombre: '',
    rol: 'usuario'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    const userExists = usuarios.some(
      u => u.usuario === formData.usuario || u.documento === formData.documento
    );

    if (userExists) {
      alert('El usuario o documento ya existe');
      return;
    }

  
    usuarios.push(formData);
    
   
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    alert('Usuario registrado exitosamente');
    navigate('/'); 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registro de nuevo usuario
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                name="documento"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Documento"
                value={formData.documento}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="usuario"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Usuario"
                value={formData.usuario}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="nombre"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="contrasena"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={formData.contrasena}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrarse
            </button>
          </div>
          
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-indigo-600 hover:text-indigo-500"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;