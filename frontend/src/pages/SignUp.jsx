// SignUp.js
import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    // Adicione outros campos necessários para o registro do usuário
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/registro`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        // Registro bem-sucedido, redirecione ou faça alguma outra ação
        console.log("Registro bem-sucedido!");
      } else {
        // Trate erros de registro
        console.error("Erro no registro");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        {/* Adicione os campos do formulário */}
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

        {/* Adicione outros campos do formulário aqui */}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default SignUp;
