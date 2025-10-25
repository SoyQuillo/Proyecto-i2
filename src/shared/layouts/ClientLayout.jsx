import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientNavbar from '../components/ClientNavbar';
import ClientSidebar from '../components/ClientSidebar';
import ClientDashboard from '../../features/clients/pages/ClientDashboard';
import MisCitas from '../../features/clients/pages/MisCitas';
import MiHistorial from '../../features/clients/pages/MiHistorial';
import MisMedicamentos from '../../features/clients/pages/MisMedicamentos';
import Resultados from '../../features/clients/pages/Resultados';
import Documentos from '../../features/clients/pages/Documentos';
import MiPerfil from '../../features/clients/pages/MiPerfil';

export default function ClientLayout({ user }) {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="fixed top-0 left-0 right-0 z-50 h-16">
        <ClientNavbar user={user} />
      </div>
      

      <div className="pt-16">
        {/* Sidebar Fixed debajo del navbar */}
        <div className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 overflow-y-auto z-40">
          <ClientSidebar />
        </div>

        <div className="ml-64 min-h-[calc(100vh-4rem)]">
          <main className="px-8 py-6">
            <Routes>
              <Route path="/" element={<ClientDashboard user={user} />} />
              <Route path="/dashboard" element={<ClientDashboard user={user} />} />
              <Route path="/citas" element={<MisCitas />} />
              <Route path="/historial" element={<MiHistorial />} />
              <Route path="/medicamentos" element={<MisMedicamentos />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/documentos" element={<Documentos />} />
              <Route path="/perfil" element={<MiPerfil />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
