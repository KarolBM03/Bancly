import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Transferir({ agregarMovimiento, saldo }) {
  const navigate = useNavigate();
  const [cuenta, setCuenta] = useState("");
  const [destinatario, setDestinatario] = useState(null);
  const [monto, setMonto] = useState("");

  const cuentasRegistradas = {
    12345: "Juan Pérez",
    67890: "María López",
    54321: "Carlos Gómez",
  };

  const handleCuentaChange = (e) => {
    const value = e.target.value;
    setCuenta(value);
    setDestinatario(cuentasRegistradas[value] || null);
  };

  const handleConfirmar = () => {
    const montoNum = parseFloat(monto);
    if (!cuenta || !destinatario) {
      alert("Número de cuenta inválido");
      return;
    }
    if (isNaN(montoNum) || montoNum <= 0) {
      alert("Monto inválido");
      return;
    }
    if (montoNum > saldo) {
      alert("Saldo insuficiente");
      return;
    }

    agregarMovimiento(
      "Gasto",
      `Transferencia a ${destinatario} (${cuenta})`,
      -montoNum
    );
    alert(`Transferencia realizada a ${destinatario}`);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-fondo p-6">
      <h2 className="text-2xl font-bold text-primario mb-6">
        💸 Transferencia
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Número de cuenta
        </label>
        <input
          type="text"
          value={cuenta}
          onChange={handleCuentaChange}
          placeholder="Ej: 12345"
          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primario"
        />
        {destinatario ? (
          <p className="text-green-600 mt-1">
            ✅ Destinatario: <b>{destinatario}</b>
          </p>
        ) : (
          cuenta && <p className="text-red-500 mt-1">❌ Cuenta no encontrada</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Monto a transferir
        </label>
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="0.00"
          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primario"
        />
      </div>
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
