import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Transferir from "./pages/Transferir";
import Recargar from "./pages/Recargar";
import Retirar from "./pages/Retirar";

function App() {
  // Estado del usuario
  const [usuario, setUsuario] = useState(() => {
    const data = localStorage.getItem("usuario");
    return data ? JSON.parse(data) : null;
  });

  // Estado de movimientos
  const [movimientos, setMovimientos] = useState(() => {
    const data = localStorage.getItem("movimientos");
    return data ? JSON.parse(data) : [];
  });

  // Guardar usuario en localStorage
  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  // Guardar movimientos en localStorage
  useEffect(() => {
    localStorage.setItem("movimientos", JSON.stringify(movimientos));
  }, [movimientos]);

  // Función para agregar un movimiento
  const agregarMovimiento = (tipo, detalle, monto) => {
    const nuevo = {
      id: Date.now(),
      tipo,
      detalle,
      fecha: new Date().toLocaleDateString(),
      monto,
    };
    setMovimientos((prev) => [nuevo, ...prev]);
  };

  // Calcular saldo actual
  const calcularSaldo = () => {
    return movimientos.reduce((acc, mov) => acc + mov.monto, 0);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Pantalla de Login */}
        <Route path="/" element={<Login setUsuario={setUsuario} />} />

        {/* Pantalla de Registro */}
        <Route
          path="/register"
          element={<Register setUsuario={setUsuario} />}
        />

        {/* Pantalla Home */}
        <Route
          path="/home"
          element={
            <Home
              usuario={usuario}
              setUsuario={setUsuario}
              movimientos={movimientos}
              saldo={calcularSaldo()}
            />
          }
        />

        {/* Transferir */}
        <Route
          path="/transferir"
          element={
            <Transferir
              agregarMovimiento={agregarMovimiento}
              saldo={calcularSaldo()}
            />
          }
        />

        {/* Recargar */}
        <Route
          path="/recargar"
          element={
            <Recargar
              agregarMovimiento={agregarMovimiento}
              saldo={calcularSaldo()}
            />
          }
        />

        {/* Retirar */}
        <Route
          path="/retirar"
          element={
            <Retirar
              agregarMovimiento={agregarMovimiento}
              saldo={calcularSaldo()}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
