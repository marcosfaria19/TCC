// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../services/firebaseConfig";
import { Card, Alert, Form, Button, FloatingLabel } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${email}`
      );
      const user = await response.json();

      if (response.ok) {
        // Aqui, você pode tomar decisões com base nas informações do usuário recebidas do backend
        if (user.isAdmin) {
          navigate("/admin"); // Redirecione para o painel de administração, por exemplo
        } else {
          navigate("/perfil");
        }
      } else {
        console.error("Erro ao obter informações do usuário do backend");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterClick = () => {
    navigate("/registro");
  };

  return (
    <div className="login-container my-5 d-flex flex-wrap align-items-stretch">
      <Card className="login-card mx-0 mb-4">
        <Card.Body>
          <h2 className="text-center mb-3">Faça seu Login</h2>

          <i className="bi bi-facebook mb-3 socials"></i>
          <i className="bi bi-twitter-x mb-3 socials"></i>
          <i className="bi bi-google mb-3 socials"></i>

          <p>Ou use seu e-mail cadastrado</p>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
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
              Entrar
            </Button>
            <div className="text-center">
              <a href="#forgot-password">Esqueceu a senha?</a>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Card className="register-card mx-0 mb-4 d-flex justify-content-center align-items-center">
        <div>
          <p className="register-card-text">
            Não tem cadastro?
            <Button
              className="w-100 mt-3 mb-3 custom-btn"
              variant="primary"
              onClick={handleRegisterClick}>
              Criar Conta
            </Button>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
