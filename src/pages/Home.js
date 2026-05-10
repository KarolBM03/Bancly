import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ saldo, movimientos, usuario, setUsuario }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUsuario(null); // Limpia el usuario
    localStorage.removeItem("usuario"); // Limpia almacenamiento
    navigate("/"); // Redirige al login
  };

  return (
    <div className="min-h-screen bg-fondo p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Usuario"
            className="w-12 h-12 rounded-full border-2 border-primario"
          />
          <p className="text-lg font-semibold">
            Hola, {usuario?.nombre || "Usuario"}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Tarjeta de saldo */}
      <div className="bg-gradient-to-r from-primario to-secundario text-white rounded-2xl p-6 mb-6 shadow-lg">
        <p className="text-lg">Saldo disponible</p>
        <h2 className="text-3xl font-bold">${saldo.toFixed(2)}</h2>
      </div>

      {/* Acciones rápidas */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <button
          onClick={() => navigate("/transferir")}
          className="bg-white shadow p-3 rounded-xl flex flex-col items-center hover:bg-gray-100"
        >
          <span>💸</span>
          <p className="text-sm">Transferir</p>
        </button>

        <button
          onClick={() => navigate("/recargar")}
          className="bg-white shadow p-3 rounded-xl flex flex-col items-center hover:bg-gray-100"
        >
          <span>➕</span>
          <p className="text-sm">Recargar</p>
        </button>

        <button
          onClick={() => navigate("/retirar")}
          className="bg-white shadow p-3 rounded-xl flex flex-col items-center hover:bg-gray-100"
        >
          <span>🏧</span>
          <p className="text-sm">Retirar</p>
        </button>

        <button className="bg-white shadow p-3 rounded-xl flex flex-col items-center hover:bg-gray-100">
          <span>⚙️</span>
          <p className="text-sm">Más</p>
        </button>
      </div>

      {/* Historial de movimientos */}
      <h3 className="text-lg font-bold mb-3">Historial</h3>
      <div className="bg-white rounded-2xl shadow p-4">
        {movimientos.length === 0 && (
          <p className="text-gray-500 text-center">No hay movimientos aún</p>
        )}
        {movimientos.map((mov) => (
          <div
            key={mov.id}
            className="flex justify-between items-center border-b last:border-none py-2"
          >
            <div>
              <p className="font-semibold">{mov.detalle}</p>
              <p className="text-sm text-gray-500">{mov.fecha}</p>
            </div>
            <p
              className={`font-bold ${
                mov.monto > 0 ? "text-secundario" : "text-error"
              }`}
            >
              {mov.monto > 0 ? "+" : ""}
              {mov.monto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
