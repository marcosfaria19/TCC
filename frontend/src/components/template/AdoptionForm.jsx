import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdoptionForm = ({ userId, animalId }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    endereco: "",
    idade: "",
  });
  const [documento, setDocumento] = useState({
    motivo: "",
    condicoes_lar: false,
    outros_animais: false,
  });

  useEffect(() => {
    if (userId) {
      getUserData(userId);
    }
  }, [userId]);

  const getUserData = async (userId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`
      );
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setDocumento({ ...documento, [name]: checked });
  };
  const handleMotivoChange = (e) => {
    const { value } = e.target;
    setDocumento({ ...documento, motivo: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let updatedUser;
      if (userId) {
        // Atualizar usuário existente
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        updatedUser = await response.json();
        console.log(JSON.stringify(user));
      } else {
        // Criar novo usuário
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        updatedUser = await response.json();
        console.log(JSON.stringify(user));
      }

      // Criar documento de solicitação de adoção
      const newDocumento = {
        id_usuario: updatedUser.id,
        id_animal: animalId,
        ...documento,
      };

      await fetch(`${process.env.REACT_APP_BACKEND_URL}/documentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDocumento),
      });

      // Redirecionar para página de sucesso
      navigate("/sucesso-adocao");
      console.log(JSON.stringify(newDocumento));
    } catch (error) {
      console.error("Erro ao enviar solicitação de adoção:", error);
      // Exibir mensagem de erro para o usuário
    }
  };

  return (
    <div className="container adoption-form-container">
      <h2 className="mt-4">Preencha seus dados e solicite a adoção</h2>
      <Form onSubmit={handleFormSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md={6} controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={user.nome}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md={6} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Digite seu email"
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md={6} controlId="formDataNascimento">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              name="data_nascimento"
              value={user.data_nascimento}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} md={6} controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              value={user.endereco}
              onChange={handleInputChange}
              placeholder="Digite seu endereço completo."
              required
            />
          </Form.Group>
        </Row>
        <h3 className="mt-5">Formulário de Adoção</h3>
        <Form.Group className="mb-3" controlId="formMotivo">
          <Form.Label>Motivo da adoção</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="motivo"
            value={documento.motivo}
            onChange={handleMotivoChange}
            maxLength={250} // Defina o limite máximo de caracteres
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCondicoesLar">
          <Form.Label>
            É possível incluir os custos associados a alimentação, vacinas,
            atendimento veterinário?
          </Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              id="custosSim"
              label="Sim"
              name="condicoes_lar"
              checked={documento.condicoes_lar}
              onChange={handleCheckboxChange}
              required
            />
            <Form.Check
              inline
              type="radio"
              id="custosNao"
              label="Não"
              name="condicoes_lar"
              checked={!documento.condicoes_lar}
              onChange={handleCheckboxChange}
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formOutrosAnimais">
          <Form.Check
            type="checkbox"
            name="outros_animais"
            label="Já possui outros animais?"
            checked={documento.outros_animais}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContratoAdocao">
          <Form.Check
            type="checkbox"
            name="contrato_adocao"
            label="Concorda em assinar contrato de adoção no ato da entrega?"
            checked={documento.aceite_termo}
            onChange={handleCheckboxChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar Solicitação de Adoção
        </Button>
      </Form>
    </div>
  );
};

export default AdoptionForm;
