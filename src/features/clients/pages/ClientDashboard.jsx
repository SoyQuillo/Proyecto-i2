import React from 'react';
import { Calendar, FileText, Pill, Activity, Clock, MapPin, User, Phone } from 'lucide-react';
import ClientWelcomeBanner from '../components/ClientWelcomeBanner';
import ClientStatsCard from '../components/ClientStatsCard';
import NextAppointments from '../components/NextAppointments';
import RecentResults from '../components/RecentResults';
import ActiveMedications from '../components/ActiveMedications';

export default function ClientDashboard({ user }) {
  return (
    <div className="space-y-6">
      <ClientWelcomeBanner user={user} />

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <ClientStatsCard
          title="Próximas Citas"
          value="2"
          icon={Calendar}
          color="blue"
          subtitle="Esta semana"
        />
        <ClientStatsCard
          title="Resultados Nuevos"
          value="3"
          icon={FileText}
          color="green"
          subtitle="Disponibles"
        />
        <ClientStatsCard
          title="Medicamentos"
          value="4"
          icon={Pill}
          color="purple"
          subtitle="Activos"
        />
        <ClientStatsCard
          title="Estado"
          value="Estable"
          icon={Activity}
          color="emerald"
          subtitle="General"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Appointments & Info */}
        <div className="col-span-2 space-y-6">
          <NextAppointments />
          <RecentResults />
        </div>

        {/* Right Column - Medications & Quick Actions */}
        <div className="space-y-6">
          <ActiveMedications />
          
          {/* Quick Contact */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contacto Rápido</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Línea de Atención</p>
                  <p className="text-sm text-blue-600 font-semibold">601 234 5678</p>
                </div>
              </div>
              
              <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition font-medium">
                Solicitar Teleconsulta
              </button>
            </div>
          </div>

          {/* Health Tips */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg shadow-sm border border-emerald-200 p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tip de Salud</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Recuerda tomar tus medicamentos según las indicaciones. Mantén una dieta balanceada y realiza actividad física regularmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
