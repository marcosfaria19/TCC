import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdoptionForm.css";

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
      const updatedUser = await response.json();
      console.log(user);

      // Criar documento de solicitação de adoção
      const newDocumento = {
        id_usuario: updatedUser.id,
        id_animal: animalId,
        ...documento,
      };

      console.log("Novo Documento:", newDocumento); // Adicione este console.log()

      await fetch(`${process.env.REACT_APP_BACKEND_URL}/documentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDocumento),
      });

      // Redirecionar para página de sucesso
      navigate("/sucesso-adocao");
    } catch (error) {
      console.error("Erro ao enviar solicitação de adoção:", error);
    }
  };

  return (
    <div className="container adoption-form-container">
      <h2 className="mt-4">Formulário de adoção</h2>
      <p>
        Estamos quase lá! Com base nas suas respostas no formulário abaixo,
        avaliaremos se seu perfil é adequado para receber o animal selecionado
        por você. Evite deixar qualquer resposta em branco, cada pergunta deve
        ser respondida com atenção para que possamos obter um entendimento mais
        completo sobre você.
      </p>

      <Form onSubmit={(e) => handleFormSubmit(e, animalId)}>
        <h4 className="mt-3">Informações de contato</h4>
        <Row className="mb-3 mt-4">
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
              placeholder="Digite seu endereço completo"
              required
            />
          </Form.Group>
        </Row>
        <h4>Sobre o lar</h4>
        <Form.Group className="mb-3" controlId="formMotivo">
          <Form.Label>Por que adotar?</Form.Label>
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
            É possível incluir em seu orçamento os custos associados à
            alimentação de qualidade (aproximadamente R$ 120 por mês), bem como
            às vacinas e ao atendimento veterinário (aproximadamente R$ 250
            anualmente)?
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
            label="Concorda em assinar um contrato de adoção no ato da entrega, responsabilizando pelos cuidados com o animal e sua segurança?"
            checked={documento.aceite_termo}
            onChange={handleCheckboxChange}
            required
          />
        </Form.Group>
        <Button className="mt-4" variant="primary" type="submit">
          Enviar Solicitação de Adoção
        </Button>
      </Form>
    </div>
  );
};

export default AdoptionForm;
