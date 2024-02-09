// SignUp.js
// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { Card, Alert, Form, Button, FloatingLabel } from "react-bootstrap";

import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Criar usuário no Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid } = userCredential.user; // Obter o UID do Firebase

      // Código para enviar informações ao backend após cadastro no Firebase
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            senha: password,
            uid, // Enviar o UID do Firebase para o backend durante o registro
          }),
        }
      );

      if (response.ok) {
        // Registro no Firebase e no Banco de Dados bem-sucedido
        navigate("/login");
      } else {
        // Trate erros no registro do usuário no backend
        console.error("Erro no registro do usuário no backend");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container my-5 d-flex flex-wrap align-items-stretch">
      <Card className="register-card mx-0 mb-4 d-flex justify-content-center align-items-center">
        <div>
          <p className="register-card-text">
            Acesse sua conta!
            <Button
              className="w-100 mt-3 mb-3 custom-btn"
              variant="primary"
              onClick={handleLoginClick}>
              Entrar
            </Button>
          </p>
        </div>
      </Card>
      <Card className="login-card mx-0 mb-4">
        <Card.Body>
          <h2 className="text-center mb-3">Doe seu lar! Cadastre-se</h2>

          <i className="bi bi-facebook mb-3 socials"></i>
          <i className="bi bi-twitter-x mb-3 socials"></i>
          <i className="bi bi-google mb-3 socials"></i>

          <p>Ou use seu e-mail</p>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSignUp}>
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail"
              className="mb-4">
              <Form.Control
                size="lg"
                placeholder="nome@exemplo.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Senha"
              className="mb-4">
              <Form.Control
                size="lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FloatingLabel>
            <Button
              className="w-100 mt-3 mb-3 custom-btn"
              variant="primary"
              type="submit">
              Criar conta
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
