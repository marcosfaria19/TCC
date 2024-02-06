//AnimalTable.jsx

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Alert } from "react-bootstrap";

const AnimalTable = () => {
  const [animais, setAnimais] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState(null);
  const [animalToDelete, setAnimalToDelete] = useState(null);
  const [alertData, setAlertData] = useState({ variant: "", message: "" });

  useEffect(() => {
    const fetchAnimais = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/animais`
        );
        const data = await response.json();

        if (response.ok) {
          setAnimais(data);
        } else {
          console.error("Erro ao obter a lista de animais");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchAnimais();
  }, []);

  const handleDelete = async (animalId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/animais/${animalId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedAnimais = animais.filter(
          (animal) => animal.id !== animalId
        );
        setAnimais(updatedAnimais);

        console.log(`Animal com ID ${animalId} excluído com sucesso`);
        showAlert("success", `Animal com ID ${animalId} excluído com sucesso.`);
      } else {
        console.error(`Erro ao excluir animal com ID ${animalId}`);
        showAlert("danger", `Erro ao excluir animal com ID ${animalId}.`);
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
      showAlert("danger", "Erro ao conectar com o servidor.");
    }

    setShowModal(false);
    setShowDeleteModal(false);
  };

  const handleEdit = (animal) => {
    setEditingAnimal(animal);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setEditingAnimal(null);
    setShowModal(false);
  };

  const handleSaveChanges = async () => {
    if (!editingAnimal) return;

    if (!editingAnimal.nome || !editingAnimal.idade) {
      // Exiba uma mensagem de erro ou tome a ação desejada para lidar com campos vazios
      console.error("Nome e Idade são campos obrigatórios");
      setAlertData({
        variant: "danger",
        message: "Todos os campos devem ser preenchidos",
      });
      return;
    }

    const updatedAnimalData = { ...editingAnimal };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/animais/${editingAnimal.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAnimalData),
        }
      );

      if (response.ok) {
        const updatedAnimais = animais.map((animal) =>
          animal.id === editingAnimal.id
            ? { ...animal, ...updatedAnimalData }
            : animal
        );
        setAnimais(updatedAnimais);

        console.log(`Animal com ID ${editingAnimal.id} editado com sucesso`);
        console.log(JSON.stringify(editingAnimal));
        setAlertData({
          variant: "success",
          message: `Animal com ID ${editingAnimal.id} editado com sucesso.`,
        });
      } else {
        console.error(`Erro ao editar animal com ID ${editingAnimal.id}`);
        console.log(JSON.stringify(editingAnimal));
        setAlertData({
          variant: "danger",
          message: `Erro ao editar animal com ID ${editingAnimal.id}.`,
        });
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
      setAlertData({
        variant: "danger",
        message: "Erro ao conectar com o servidor.",
      });
    }

    setShowModal(false);
  };

  const showAlert = (variant, message) => {
    setAlertData({ variant, message });
  };

  const handleShowDeleteModal = (animal) => {
    setAnimalToDelete(animal);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setAnimalToDelete(null);
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    if (animalToDelete) {
      handleDelete(animalToDelete.id);
      setAnimalToDelete(null);
    }
    setShowDeleteModal(false);
  };

  const renderFormInput = (
    label,
    id,
    value,
    onChange,
    type = "text",
    options = []
  ) => (
    <Form.Group className="mb-3" controlId={`form${id}`}>
      <Form.Label>{label}</Form.Label>
      {type === "select" ? (
        <Form.Select
          name={id}
          required
          value={value}
          onChange={(e) => onChange({ ...editingAnimal, [id]: e.target.value })}
          style={{ height: "60px" }}>
          <option value="" disabled>
            Selecione {label}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      ) : (
        <Form.Control
          type={type}
          placeholder={label}
          value={value || ""}
          required
          onChange={(e) => onChange({ ...editingAnimal, [id]: e.target.value })}
        />
      )}
    </Form.Group>
  );

  return (
    <div>
      {alertData.message && (
        <Alert
          variant={alertData.variant}
          dismissible
          onClose={() => setAlertData({ variant: "", message: "" })}>
          {alertData.message}
        </Alert>
      )}

      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Idade</th>
            <th>Gênero</th>
            <th>Adotado por</th>
            <th>Data de Resgate</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {animais.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.nome}</td>
              <td>{animal.categoria}</td>
              <td>{animal.idade}</td>
              <td>{animal.genero}</td>
              <td>{animal.id_user}</td>
              <td>{animal.data_resgate}</td>
              <td>
                <Button
                  variant="outline-info"
                  onClick={() => handleEdit(animal)}>
                  <i className="bi bi-pencil-square"></i>
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  onClick={() => handleShowDeleteModal(animal)}>
                  <i className="bi bi-trash3"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de Edição */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alertData.message && (
            <Alert
              variant={alertData.variant}
              dismissible
              onClose={() => setAlertData({ variant: "", message: "" })}>
              {alertData.message}
            </Alert>
          )}
          <Form>
            {renderFormInput(
              "Nome",
              "nome",
              editingAnimal?.nome,
              setEditingAnimal
            )}
            {renderFormInput(
              "Categoria",
              "categoria",
              editingAnimal?.categoria,
              setEditingAnimal,
              "select",
              ["Gato", "Cachorro"]
            )}
            {renderFormInput(
              "Idade",
              "idade",
              editingAnimal?.idade,
              setEditingAnimal,
              "number"
            )}
            {renderFormInput(
              "Gênero",
              "genero",
              editingAnimal?.genero,
              setEditingAnimal,
              "select",
              ["Macho", "Fêmea"]
            )}
            {renderFormInput(
              "Data de Resgate",
              "data_resgate",
              editingAnimal?.data_resgate,
              setEditingAnimal,
              "date"
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges}>
            Salvar Alterações
          </Button>
          <Button variant="secondary" onClick={handleModalClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal de Confirmação de Exclusão */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {animalToDelete && (
            <p>
              Tem certeza que deseja excluir o animal{" "}
              <strong>{animalToDelete.nome}</strong>?
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Confirmar Exclusão
          </Button>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AnimalTable;
