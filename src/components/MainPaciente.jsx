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
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-10 w-full max-w-6xl mx-auto text-center text-gray-500 mt-8">
        <p className="text-base">
          Selecciona un paciente en la barra lateral para ver su información.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 w-full max-w-6xl mx-auto mt-6">
      <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <UserCircle className="w-6 h-6 text-blue-600" />
          Datos del Paciente
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Información general del paciente seleccionado
        </p>
      </div>


      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Información Personal
          </h3>

          <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-500">Nombre Completo</p>
              <p className="text-gray-800">{paciente.nombre}</p>
            </div>

            <div>
              <p className="font-medium text-gray-500">Fecha de Nacimiento</p>
              <div className="flex items-center gap-1 text-gray-800">
                <Calendar className="w-4 h-4 text-gray-500" />
                {paciente.nacimiento}
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-500">Edad</p>
              <p className="text-gray-800">{paciente.edad} años</p>
            </div>

            <div>
              <p className="font-medium text-gray-500">Género</p>
              <p className="text-gray-800">{paciente.sexo}</p>
            </div>

            <div>
              <p className="font-medium text-gray-500">Tipo de Sangre</p>
              <div className="flex items-center gap-1 text-gray-800">
                <Droplet className="w-4 h-4 text-red-500" />
                {paciente.tipoSangre}
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-500 flex items-center gap-1">
                <IdCard className="w-4 h-4 text-gray-500" />
                ID Médico
              </p>
              <p className="font-mono text-gray-800">{paciente.usuario}</p>
              <p className="text-xs text-gray-400 mt-1">
                El ID médico no se puede modificar
              </p>
            </div>
          </div>
        </div>

        
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            Información de Contacto
          </h3>

          <div className="flex flex-col gap-5 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-500 flex items-center gap-1">
                <Phone className="w-4 h-4 text-gray-500" />
                Teléfono
              </p>
              <p className="text-gray-800">{paciente.telefono}</p>
            </div>

            <div>
              <p className="font-medium text-gray-500 flex items-center gap-1">
                <Mail className="w-4 h-4 text-gray-500" />
                Correo Electrónico
              </p>
              <p className="text-gray-800">{paciente.correo}</p>
            </div>

            <div>
              <p className="font-medium text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                Dirección
              </p>
              <p className="text-gray-800">{paciente.direccion}</p>
            </div>

            <div>
              <p className="font-medium text-gray-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-gray-500" />
                Contacto de Emergencia
              </p>
              <p className="text-gray-800">{paciente.contactoEmergencia}</p>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-8">
        {/* Información Médica */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-blue-600" />
            Información Médica
          </h3>

          <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-500 flex items-center gap-1">
                <HeartPulse className="w-4 h-4 text-gray-500" />
                Estado
              </p>
              <p className="text-gray-800">{paciente.estado}</p>
            </div>

            <div>
              <p className="font-medium text-gray-500 flex items-center gap-1">
                <Bed className="w-4 h-4 text-gray-500" />
                Habitación
              </p>
              <p className="text-gray-800">{paciente.lugar}</p>
            </div>
          </div>
        </div>

        {/* Información del Seguro */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Información del Seguro
          </h3>

          <div className="text-sm text-gray-700">
            <p className="font-medium text-gray-500 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              Compañía de Seguros
            </p>
            <p className="text-gray-800 mt-1">
              {paciente.compañiaSeguro || "Sin información registrada"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPaciente;
