import React from "react";
import { alerts } from "../../../data/alerts";
import * as Icons from "lucide-react";

function HealthAlerts() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Alertas de Salud</h2>
        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
          {alerts.length} alertas
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = Icons[alert.icon];
          const priorityColors = {
            high: "bg-red-50 border-red-200 text-red-800",
            medium: "bg-yellow-50 border-yellow-200 text-yellow-800",
            low: "bg-blue-50 border-blue-200 text-blue-800",
          };

          return (
            <div
              key={alert.id}
              className={`flex items-start gap-4 p-4 rounded-lg border ${priorityColors[alert.priority]} transition hover:shadow-md`}
            >
              <div className={`p-2 rounded-full ${
                alert.priority === 'high' ? 'bg-red-100' :
                alert.priority === 'medium' ? 'bg-yellow-100' :
                'bg-blue-100'
              }`}>
                {Icon && <Icon size={20} className={
                  alert.priority === 'high' ? 'text-red-600' :
                  alert.priority === 'medium' ? 'text-yellow-600' :
                  'text-blue-600'
                } />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{alert.title}</h3>
                <p className="text-sm opacity-90">{alert.message}</p>
              </div>
              <span className="text-xs opacity-75">{alert.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HealthAlerts;
