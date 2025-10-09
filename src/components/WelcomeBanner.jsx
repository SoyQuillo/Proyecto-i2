import React from "react";
import { User } from "lucide-react";

function WelcomeBanner({ userName, userId, lastVisit }) {
  console.log("WelcomeBanner renderizado", userName, userId, lastVisit);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-200 rounded-lg p-6 m-6 text-white shadow-md">
      <div className="flex items-center gap-4">
        <div className="bg-blue-600 bg-opacity-20 p-4 rounded-full">
          <User size={32} strokeWidth={2} className="text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-1">¡Bienvenido, {userName} !</h1>
          <p className="text-sm text-blue-50">
            ID Médico: <span className="font-medium">{userId}</span> | Última
            visita: <span className="font-medium">{lastVisit}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
