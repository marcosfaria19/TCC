// AdminDashboard.jsx
import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import AnimalManagement from "./AnimalManagement";
import UserManagement from "./UserManagement";
import AdoptionsManagement from "../components/template/AdoptionsManagement";

/* Importe os outros componentes necessários aqui */

const AdminDashboard = () => {
  return (
    <Container>
      <h2>Painel Administrativo</h2>
      <Tabs defaultActiveKey="animal" id="admin-tabs">
        <Tab eventKey="animal" title="Gerenciar Animais">
          <AnimalManagement />
        </Tab>
        <Tab eventKey="user" title="Gerenciar Usuários">
          <UserManagement />
        </Tab>
        <Tab eventKey="adoption" title="Pedidos de Adoção">
          <AdoptionsManagement />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminDashboard;
