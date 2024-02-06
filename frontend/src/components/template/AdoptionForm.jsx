// AdoptionForm.jsx
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AdoptionForm = () => {
  const [adoptionInfo, setAdoptionInfo] = useState({
    nomeCompleto: "",
    email: "",
    dataNascimento: "",
    endereco: "",
    motivoAdocao: "",
    custosAssociados: false,
    concordaContrato: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica para enviar os dados do formulário para o backend
    console.log("Dados do formulário enviados:", adoptionInfo);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* Informações de Contato */}
        <h4>Informações de Contato</h4>
        <Form.Group className="mb-3">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome completo"
            value={adoptionInfo.nomeCompleto}
            onChange={(e) =>
              setAdoptionInfo({ ...adoptionInfo, nomeCompleto: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={adoptionInfo.email}
            onChange={(e) =>
              setAdoptionInfo({ ...adoptionInfo, email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            value={adoptionInfo.dataNascimento}
            onChange={(e) =>
              setAdoptionInfo({
                ...adoptionInfo,
                dataNascimento: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu endereço"
            value={adoptionInfo.endereco}
            onChange={(e) =>
              setAdoptionInfo({ ...adoptionInfo, endereco: e.target.value })
            }
          />
        </Form.Group>

        {/* Sobre o Lar */}
        <h4>Sobre o Lar</h4>
        <Form.Group className="mb-3">
          <Form.Label>Por que deseja adotar?</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={adoptionInfo.motivoAdocao}
            onChange={(e) =>
              setAdoptionInfo({ ...adoptionInfo, motivoAdocao: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            É possível incluir os custos associados a alimentação, vacinas,
            atendimento veterinário?
          </Form.Label>
          <Form.Check
            type="radio"
            label="Sim"
            name="custosAssociados"
            id="sim"
            checked={adoptionInfo.custosAssociados}
            onChange={() =>
              setAdoptionInfo({
                ...adoptionInfo,
                custosAssociados: true,
              })
            }
          />
          <Form.Check
            type="radio"
            label="Não"
            name="custosAssociados"
            id="nao"
            checked={!adoptionInfo.custosAssociados}
            onChange={() =>
              setAdoptionInfo({
                ...adoptionInfo,
                custosAssociados: false,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Concorda em assinar contrato de adoção no ato da entrega"
            checked={adoptionInfo.concordaContrato}
            onChange={() =>
              setAdoptionInfo({
                ...adoptionInfo,
                concordaContrato: !adoptionInfo.concordaContrato,
              })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Formulário
        </Button>
      </Form>
    </Container>
  );
};

export default AdoptionForm;
