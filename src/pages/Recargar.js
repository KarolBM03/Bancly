import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Recargar({ agregarMovimiento }) {
  const navigate = useNavigate();
  const [monto, setMonto] = useState("");

  const handleConfirmar = () => {
    const montoNum = parseFloat(monto);
    if (isNaN(montoNum) || montoNum <= 0) {
      alert("Monto inválido");
      return;
    }
    agregarMovimiento("Ingreso", "Recarga de saldo", montoNum);
    alert("Recarga exitosa");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-fondo p-6">
      <h2 className="text-2xl font-bold text-primario mb-6">➕ Recargar</h2>
      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="0.00"
        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primario mb-4"
      />
      <div className="flex gap-4">
        <button
          onClick={handleConfirmar}
          className="flex-1 bg-primario text-white py-2 rounded-xl shadow"
        >
          Confirmar
        </button>
        <button
          onClick={() => navigate("/home")}
          className="flex-1 bg-red-500 text-white py-2 rounded-xl shadow"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
