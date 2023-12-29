// SignIn.js
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        // Login bem-sucedido, redirecione ou faça alguma outra ação
        console.log("Login bem-sucedido!");
      } else {
        // Trate erros de login
        console.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label>Senha:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
