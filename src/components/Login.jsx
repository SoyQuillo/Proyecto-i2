import React, { useState } from 'react';
import { Lock, User, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onSubmit }) {
  const navigate = useNavigate();
  const [documento, setDocumento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ documento, usuario, contrasena });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z" />
              <path fill="#fff" d="M9 12h6v2H9z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">HospitalIS PRO</h3>
          <p className="text-sm text-gray-500">Accede al sistema con tus credenciales</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Documento</label>
            <input
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Número de documento"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Usuario</label>
            <div className="mt-1 relative">
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="Usuario"
              />
              <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Contraseña</label>
            <div className="mt-1 relative">
              <input
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="Contraseña"
              />
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            <LogIn className="w-4 h-4" /> Ingresar
          </button>

          <div className="text-center space-y-2">
            <a href="#" className="text-sm text-blue-600 block">Recuperar contraseña</a>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              ¿Usuario nuevo? Regístrate aquí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
