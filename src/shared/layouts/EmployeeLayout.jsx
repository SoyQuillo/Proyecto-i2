import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../../features/employees/pages/Home";
import Citas from "../../features/employees/pages/Citas";
import Inventario from "../../features/employees/pages/Inventario";
import Reportes from "../../features/employees/pages/Reportes";
import Configuracion from "../../features/employees/pages/Configuracion";
import PacientesNuevo from "../../features/employees/pages/PacientesNuevo";

export default function EmployeeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50 h-16">
        <Navbar />
      </div>

      <div className="pt-16">
        <div className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 overflow-y-auto z-40">
          <Sidebar />
        </div>

        <div className="ml-64 min-h-[calc(100vh-4rem)]">
          <main className="px-8 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/citas" element={<Citas />} />
              <Route path="/inventario" element={<Inventario />} />
              <Route path="/pacientes" element={<PacientesNuevo />} />
              <Route path="/reportes" element={<Reportes />} />
              <Route path="/configuracion" element={<Configuracion />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
