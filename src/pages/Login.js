import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setUsuario }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { nombre: "Usuario Demo", email };
    setUsuario(user);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fondo p-6">
      <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded-xl w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-xl"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-xl"
        />
        <button
          type="submit"
          className="w-full bg-primario text-white py-2 rounded-xl"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-sm">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-primario font-bold">
          Regístrate
        </Link>
      </p>
    </div>
  );
}
