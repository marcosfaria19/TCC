import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import AnimalTable from "../components/template/AnimalTable";
import CreateAnimal from "../components/template/CreateAnimal";

const AnimalManagement = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  return (
    <div className="mt-4">
      <h3 className="text-center">Animais Cadastrados</h3>

      <Row className="justify-content-end">
        <Col xs={12} md={6} lg={4} className="text-end">
          <Button variant="primary" onClick={handleShowCreateModal}>
            Criar Novo Animal
          </Button>
        </Col>
      </Row>

      {/* Tabela de animais */}
      <AnimalTable />

      {/* Modal para criar animal */}
      <CreateAnimal
        show={showCreateModal}
        handleClose={handleCloseCreateModal}
      />
    </div>
  );
};

export default AnimalManagement;
