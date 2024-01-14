// About.jsx
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const About = ({ userId }) => {
  const [userInfo, setUserInfo] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    idade: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`
        );
        const data = await response.json();

        if (response.ok) {
          setUserInfo({
            nome: data.nome || "",
            cpf: data.cpf || "",
            telefone: data.telefone || "",
            endereco: data.endereco || "",
            idade: data.idade || "",
          });
        } else {
          console.error("Erro ao obter informações do usuário");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handleSaveAboutMe = async () => {
    try {
      console.log("Dados do usuário local:", userInfo);

      const requestBody = {
        nome: userInfo.nome,
        cpf: userInfo.cpf,
        telefone: userInfo.telefone,
        endereco: userInfo.endereco,
        idade: userInfo.idade,
      };

      console.log("Dados enviados para o backend:", requestBody);

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        console.log("Informações do usuário salvas com sucesso!");
      } else {
        console.error("Erro ao salvar informações do usuário");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nome completo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome completo"
          value={userInfo.nome}
          onChange={(e) => setUserInfo({ ...userInfo, nome: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Data de Nascimento</Form.Label>
        <Form.Control
          type="date"
          placeholder="Data de Nascimento"
          value={userInfo.dataNascimento}
          onChange={(e) =>
            setUserInfo({ ...userInfo, dataNascimento: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>CPF</Form.Label>
        <Form.Control
          type="text"
          placeholder="CPF"
          value={userInfo.cpf}
          onChange={(e) => setUserInfo({ ...userInfo, cpf: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Telefone"
          value={userInfo.telefone}
          onChange={(e) =>
            setUserInfo({ ...userInfo, telefone: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          type="text"
          placeholder="Rua e número"
          value={userInfo.endereco}
          onChange={(e) =>
            setUserInfo({ ...userInfo, endereco: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cidade</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cidade"
          disabled
          value={userInfo.cidade}
          onChange={(e) => setUserInfo({ ...userInfo, cidade: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Estado</Form.Label>
        <Form.Select
          value={userInfo.estado}
          onChange={(e) =>
            setUserInfo({ ...userInfo, estado: e.target.value })
          }>
          {/* Adicione as opções de estado aqui */}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>CEP</Form.Label>
        <Form.Control
          type="text"
          placeholder="CEP"
          value={userInfo.cep}
          onChange={(e) => setUserInfo({ ...userInfo, cep: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSaveAboutMe}>
        Salvar Alterações
      </Button>
    </Form>
  );
};

export default About;
