import { createContext, useState } from "react";

export const BankContext = createContext();

export function BankProvider({ children }) {
  const [saldo, setSaldo] = useState(1200.5);
  const [movimientos, setMovimientos] = useState([
    {
      id: 1,
      tipo: "Ingreso",
      detalle: "Depósito en efectivo",
      fecha: "01/10/2025",
      monto: +500,
    },
    {
      id: 2,
      tipo: "Gasto",
      detalle: "Pago en supermercado",
      fecha: "29/09/2025",
      monto: -120,
    },
    {
      id: 3,
      tipo: "Ingreso",
      detalle: "Transferencia recibida",
      fecha: "27/09/2025",
      monto: +300,
    },
    {
      id: 4,
      tipo: "Gasto",
      detalle: "Pago de internet",
      fecha: "25/09/2025",
      monto: -50,
    },
  ]);

  return (
    <BankContext.Provider
      value={{ saldo, setSaldo, movimientos, setMovimientos }}
    >
      {children}
    </BankContext.Provider>
  );
}
