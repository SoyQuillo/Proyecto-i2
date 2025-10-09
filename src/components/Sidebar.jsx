import { sidebarItems } from "../data/sidebarItems";
import * as Icons from "lucide-react";

import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4 border-r border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
          MG
        </div>
        <div>
          <p className="text-sm font-semibold">Nombre del paciente</p>
          <p className="text-xs text-gray-500">MED-2024-004</p>
        </div>
      </div>

      <nav>
        {sidebarItems.map(({ id, title, icon }) => {
          const Icon = Icons[icon];
          return (
            <button
              key={id}
              className="flex items-center gap-3 p-2 text-gray-700 rounded-lg hover:text-blue-600 transition"
            >
              <Icon size={18} />
              <span>{title}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
