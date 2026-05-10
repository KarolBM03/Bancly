import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register({ setUsuario }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { nombre, email };
    setUsuario(user);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fondo p-6">
      <h2 className="text-2xl font-bold mb-6">Crear Cuenta</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded-xl w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-xl"
        />
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
          Registrarme
        </button>
      </form>
      <p className="mt-4 text-sm">
        ¿Ya tienes cuenta?{" "}
        <Link to="/" className="text-primario font-bold">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
