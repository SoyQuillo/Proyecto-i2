import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X } from 'lucide-react';

export default function MiPerfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [perfil, setPerfil] = useState({
    nombre: 'Carlos López Martínez',
    documento: '300400500',
    fechaNacimiento: '15/03/1985',
    edad: 39,
    telefono: '+57 300 123 4567',
    email: 'carlos.lopez@email.com',
    direccion: 'Calle 45 #12-34, Bogotá',
    tipoSangre: 'O+',
    alergias: 'Penicilina',
    contactoEmergencia: 'Ana López - +57 310 987 6543',
    eps: 'Compensar',
    ocupacion: 'Ingeniero de Sistemas'
  });

  const [formData, setFormData] = useState(perfil);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setPerfil(formData);
    setIsEditing(false);
    alert('Perfil actualizado correctamente');
  };

  const handleCancel = () => {
    setFormData(perfil);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
              CL
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{perfil.nombre}</h1>
              <p className="text-emerald-100">Documento: {perfil.documento}</p>
              <p className="text-emerald-100">EPS: {perfil.eps}</p>
            </div>
          </div>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl transition font-semibold"
            >
              <Edit size={20} />
              Editar Perfil
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 hover:bg-white/90 rounded-xl transition font-semibold"
              >
                <Save size={20} />
                Guardar
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl transition font-semibold"
              >
                <X size={20} />
                Cancelar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Información Personal */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <User className="text-emerald-600" size={24} />
          Información Personal
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre Completo
            </label>
            {isEditing ? (
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.nombre}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Documento
            </label>
            <p className="px-4 py-3 bg-gray-100 rounded-xl text-gray-600 font-mono">{perfil.documento}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha de Nacimiento
            </label>
            <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.fechaNacimiento}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Edad
            </label>
            <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.edad} años</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Sangre
            </label>
            <p className="px-4 py-3 bg-red-50 rounded-xl text-red-700 font-bold">{perfil.tipoSangre}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ocupación
            </label>
            {isEditing ? (
              <input
                name="ocupacion"
                value={formData.ocupacion}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.ocupacion}</p>
            )}
          </div>
        </div>
      </div>

      {/* Información de Contacto */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Phone className="text-emerald-600" size={24} />
          Información de Contacto
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Phone size={16} />
              Teléfono
            </label>
            {isEditing ? (
              <input
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.telefono}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Mail size={16} />
              Email
            </label>
            {isEditing ? (
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.email}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <MapPin size={16} />
              Dirección
            </label>
            {isEditing ? (
              <input
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.direccion}</p>
            )}
          </div>
        </div>
      </div>

      {/* Información Médica */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="text-emerald-600" size={24} />
          Información Médica
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Alergias
            </label>
            {isEditing ? (
              <input
                name="alergias"
                value={formData.alergias}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-orange-50 rounded-xl text-orange-700 font-medium">{perfil.alergias}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contacto de Emergencia
            </label>
            {isEditing ? (
              <input
                name="contactoEmergencia"
                value={formData.contactoEmergencia}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-red-50 rounded-xl text-red-700 font-medium">{perfil.contactoEmergencia}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              EPS / Aseguradora
            </label>
            {isEditing ? (
              <input
                name="eps"
                value={formData.eps}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            ) : (
              <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 font-medium">{perfil.eps}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
