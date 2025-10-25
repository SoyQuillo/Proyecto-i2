import { Link, useLocation } from "react-router-dom";
import * as Icons from "lucide-react";
import { Settings } from "lucide-react";

// Sidebar para EMPLEADOS - con acceso CRUD completo
const employeeSidebarItems = [
  {
    id: 0,
    title: "Dashboard",
    icon: "LayoutDashboard",
    path: "/dashboard"
  },
  {
    id: 1,
    title: "Gestión de Citas",
    icon: "Calendar",
    path: "/citas",
    badge: "CRUD"
  },
  {
    id: 2,
    title: "Pacientes",
    icon: "Users",
    path: "/pacientes",
    badge: "CRUD"
  },
  {
    id: 3,
    title: "Inventario",
    icon: "Package",
    path: "/inventario",
    badge: "CRUD"
  },
  {
    id: 4,
    title: "Reportes",
    icon: "BarChart3",
    path: "/reportes"
  },
  {
    id: 5,
    title: "Configuración",
    icon: "Settings",
    path: "/configuracion"
  }
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-50 to-white h-full">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-11 h-11 flex items-center justify-center rounded-lg font-bold shadow-lg text-sm">
            MG
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">María González</p>
            <p className="text-xs text-gray-600">Administrador</p>
            <p className="text-xs text-blue-600 font-medium mt-0.5">Acceso Completo</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-1.5">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
          Panel de Gestión
        </div>
        {employeeSidebarItems.map(({ id, title, icon, path, badge }) => {
          const Icon = Icons[icon];
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={id}
              to={path}
              className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200"
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className={isActive ? "" : "group-hover:scale-110 transition-transform"} />
                <span className="font-medium text-sm">{title}</span>
              </div>
              {badge && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  isActive 
                    ? "bg-white/30 text-white" 
                    : "bg-green-100 text-green-700 group-hover:bg-green-200"
                }`}>
                  {badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gradient-to-t from-blue-50 to-transparent">
        <div className="text-xs text-center text-gray-600">
          <p className="font-semibold">Modo: Empleado</p>
          <p className="text-gray-500 mt-1">Control Total del Sistema</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
