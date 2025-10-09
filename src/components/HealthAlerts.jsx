import { alerts } from "../data/alerts";
import { Bell, Calendar, Info } from "lucide-react";
import React from "react";

function HealthAlerts() {
  const citas = alerts.filter((c) => c.type === "cita");
  const resultados = alerts.filter((r) => r.type === "resultado");

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 mt-6">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-3">
        <Bell className="text-blue-500" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Alertas de Salud</h2>
      </div>

      <main className="space-y-8">
      
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="text-orange-500" size={18} />
            </div>
            <h3 className="font-semibold text-gray-700 text-lg">Cita Próxima</h3>
          </div>

          <div className="space-y-3">
            {citas.length > 0 ? (
              citas.map((n) => (
                <div
                  key={n.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <p className="text-gray-700 text-sm">{n.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.date}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic">No hay citas próximas</p>
            )}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Info className="text-blue-500" size={18} />
            </div>
            <h3 className="font-semibold text-gray-700 text-lg">Resultados Disponibles</h3>
          </div>

          <div className="space-y-3">
            {resultados.length > 0 ? (
              resultados.map((n) => (
                <div
                  key={n.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <p className="text-gray-700 text-sm">{n.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.date}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic">
                No hay resultados disponibles
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HealthAlerts;
