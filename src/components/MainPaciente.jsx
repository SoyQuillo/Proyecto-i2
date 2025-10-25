import React from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  IdCard,
  Calendar,
  Droplet,
  UserCircle,
  Stethoscope,
  ShieldCheck,
  Bed,
  HeartPulse,
} from "lucide-react";

function MainPaciente({ paciente }) {
  if (!paciente) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserCircle size={64} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            No hay paciente seleccionado
          </h3>
          <p className="text-gray-500 mb-6">
            Selecciona un paciente de la barra lateral para ver su información
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-md mx-auto">
            <p className="text-sm text-blue-700">
              💡 Usa la búsqueda o los filtros para encontrar pacientes rápidamente
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
              {paciente.nombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">{paciente.nombre}</h2>
              <div className="flex items-center gap-3 text-blue-100">
                <span className="text-sm">ID: {paciente.usuario}</span>
                <span>•</span>
                <span className="text-sm">{paciente.edad} años</span>
                <span>•</span>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  paciente.estado === "Activo" ? "bg-green-500/30" :
                  paciente.estado === "En consulta" ? "bg-blue-500/30" :
                  "bg-yellow-500/30"
                }`}>
                  {paciente.estado}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-100 mb-1">Tipo de Sangre</p>
            <div className="flex items-center gap-2 justify-end">
              <Droplet className="text-red-300" size={20} />
              <span className="text-2xl font-bold">{paciente.tipoSangre}</span>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-6">
        {/* Información Personal */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Información Personal</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Nombre Completo</p>
                <p className="text-sm font-semibold text-gray-900">{paciente.nombre}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Fecha de Nacimiento
                </p>
                <p className="text-sm font-semibold text-gray-900">{paciente.nacimiento}</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1">Edad</p>
                <p className="text-sm font-semibold text-gray-900">{paciente.edad} años</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1">Género</p>
                <p className="text-sm font-semibold text-gray-900">{paciente.sexo}</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                  <IdCard className="w-3 h-3" />
                  ID Médico
                </p>
                <p className="text-sm font-mono font-semibold text-gray-900">{paciente.usuario}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Información de Contacto</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Teléfono</p>
                <p className="text-sm font-semibold text-gray-900">{paciente.telefono}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Correo Electrónico</p>
                <p className="text-sm font-semibold text-gray-900 break-all">{paciente.correo}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">Dirección</p>
                <p className="text-sm font-semibold text-gray-900">{paciente.direccion}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-red-700 mb-1">Contacto de Emergencia</p>
                <p className="text-sm font-semibold text-gray-900">{paciente.contactoEmergencia}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Información Médica</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                <HeartPulse className="w-3 h-3" />
                Estado
              </p>
              <p className="text-sm font-semibold text-gray-900">{paciente.estado}</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                <Bed className="w-3 h-3" />
                Ubicación
              </p>
              <p className="text-sm font-semibold text-gray-900">{paciente.lugar}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Información del Seguro</h3>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-xs font-medium text-gray-500 mb-2">Compañía de Seguros</p>
            <p className="text-sm font-semibold text-gray-900">
              {paciente.compañiaSeguro || "Sin información registrada"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPaciente;
