import React from "react";
import { Form, Button } from "react-bootstrap";

const handleSaveAccountSettings = () => {
  // Adicione lógica para enviar as configurações da conta ao backend
  console.log("Configurações da conta salvas com sucesso!");
};

const AccountSettings = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nova senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Nova senha"
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={handleSaveAccountSettings}>
        Salvar Alterações
      </Button>
    </Form>
  );
};

export default AccountSettings;
