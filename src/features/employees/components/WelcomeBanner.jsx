import React from "react";
import { Calendar } from "lucide-react";

function WelcomeBanner({ userName, userId, lastVisit }) {
  const currentHour = new Date().getHours();
  let greeting = "Buenos días";
  
  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Buenas tardes";
  } else if (currentHour >= 18) {
    greeting = "Buenas noches";
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {greeting}, {userName.split(' ')[0]}
          </h1>
          <p className="text-blue-100 text-sm mb-4">
            ID Médico: {userId}
          </p>
          <div className="flex items-center gap-2 text-blue-100">
            <Calendar size={16} />
            <span className="text-sm">Última visita: {lastVisit}</span>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-3xl font-bold">{new Date().getDate()}</p>
          <p className="text-sm">
            {new Date().toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
