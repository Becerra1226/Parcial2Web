import "./Formulario.css";
import { useState } from "react";

export function Formulario({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre !== "sebastian" || password !== "1234") {
      setError(true);
      return;
    } else {
      setError(false);
    }

    setError(false);
    setUser([nombre]);
  };

  return (
    <section>
      <h1>Login</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Iniciar sesion</button>
      </form>
      {error && <p>Llena los datos correctamente</p>}
    </section>
  );
}

export default Formulario;
