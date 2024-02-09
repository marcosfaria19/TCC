// About.jsx
import React, { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../auth/AuthContext";

const About = () => {
  const { user } = useContext(Context);

  const [userInfo, setUserInfo] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    dataNascimento: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!user || !user.id) return;

        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/${user.id}`
        );
        const data = await response.json();

        if (response.ok) {
          setUserInfo({
            nome: data.nome || "",
            cpf: data.cpf || "",
            telefone: data.telefone || "",
            endereco: data.endereco || "",
            dataNascimento: data.dataNascimento || "",
            cidade: data.cidade || "",
            estado: data.estado || "",
            cep: data.cep || "",
          });
        } else {
          console.error("Erro ao obter informações do usuário");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  const handleSaveAboutMe = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
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
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
          {/* Adicione as opções de estado que você precisa */}
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
