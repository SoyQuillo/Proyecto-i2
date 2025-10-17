import { navbarItems } from "../data/navbarItems";
import { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { Bell, User, Activity, Search, Trash } from "lucide-react";
import { NavLink } from "react-router-dom";
import { notifications as mockNotifications } from "../data/notifications";
import React from "react";

function Navbar() {
  const [query, setQuery] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setNotifications(mockNotifications);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  
  const handleDeleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 py-2 max-w-full mx-auto">
        <div className="flex items-center gap-2 w-[180px]">
          <div className="bg-blue-600 p-1.5 rounded">
            <Activity size={20} className="text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm text-gray-900">
              HospitalIS Pro
            </span>
            <span className="text-xs font-light text-gray-500">
              Sistema Hospitalario
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-6 flex-1 justify-center">
          {navbarItems.map(({ id, title, path, icon }) => {
            const Icon = Icons[icon];
            return (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100 transition"
                  }`
                }
              >
                {Icon && <Icon size={16} />}
                {title}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-6 w-[400px] justify-end">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1.5 w-[220px] focus-within:ring-2 focus-within:ring-blue-500">
            <Search className="text-gray-400" size={18} />
            <input
              placeholder="Buscar paciente..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 ml-2 focus:outline-none text-sm"
            />
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="relative hover:scale-110 transition-transform"
            >
              <Bell
                size={22}
                className={`${
                  unreadCount > 0 ? "text-blue-600" : "text-gray-400"
                } cursor-pointer`}
              />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                  {unreadCount}
                </span>
              )}
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <div className="p-3 font-semibold text-gray-700 border-b text-sm">
                  Notificaciones
                </div>

                {notifications.length === 0 ? (
                  <div className="p-4 text-gray-500 text-sm text-center">
                    No hay notificaciones
                  </div>
                ) : (
                  <ul className="max-h-64 overflow-y-auto">
                    {notifications.map((n) => (
                      <li
                        key={n.id}
                        className={`flex justify-between items-start p-3 border-b text-sm ${
                          n.read
                            ? "bg-gray-50 text-gray-500"
                            : "bg-white text-gray-800"
                        } hover:bg-blue-50 transition`}
                      >
                        <div onClick={() => setOpen(false)}>
                          <p>{n.message}</p>
                          <span className="text-xs text-gray-400">
                            {n.date}
                          </span>
                        </div>
                        <Trash
                          size={16}
                          className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation(); // evita cerrar el menú
                            handleDeleteNotification(n.id);
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <div className="bg-blue-600 rounded-full p-1.5">
              <User size={16} className="text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-gray-900">
                Dra. María Gómez
              </span>
              <span className="text-xs text-gray-500">
                Médico Especialista
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
