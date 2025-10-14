import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../data/sidebarItems";
import * as Icons from "lucide-react";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4 border-r border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
          MG
        </div>
        <div>
          <p className="text-sm font-semibold">María González</p>
          <p className="text-xs text-gray-500">MED-2024-004</p>
        </div>
      </div>

      <nav>
        {sidebarItems.map(({ id, title, icon, path }) => {
          const Icon = Icons[icon];
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={id}
              to={path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors mb-1 ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              <Icon size={18} />
              <span>{title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;