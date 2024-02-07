//AdoptionRequestTable.jsx

import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Alert } from "react-bootstrap";

const AdoptionRequestTable = () => {
  const [documentos, setDocumentos] = useState([]);
  const [users, setUsers] = useState({});
  const [animais, setAnimais] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [documentoToDelete, setDocumentoToDelete] = useState(null);
  const [alertData, setAlertData] = useState({ variant: "", message: "" });

  useEffect(() => {
    const fetchDocumentos = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/documentos`
        );
        const data = await response.json();

        if (response.ok) {
          setDocumentos(data);
        } else {
          console.error("Erro ao obter a lista de documentos");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };
    const fetchUsersAndAnimais = async () => {
      try {
        const usersResponse = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        );
        const usersData = await usersResponse.json();

        const animaisResponse = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/animais`
        );
        const animaisData = await animaisResponse.json();

        if (usersResponse.ok && animaisResponse.ok) {
          const usersMap = {};
          usersData.forEach((user) => {
            usersMap[user.id] = user.nome;
          });
          setUsers(usersMap);

          const animaisMap = {};
          animaisData.forEach((animal) => {
            animaisMap[animal.id] = animal.nome;
          });
          setAnimais(animaisMap);
        } else {
          console.error("Erro ao obter a lista de usuários ou animais");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchDocumentos();
    fetchUsersAndAnimais();
  }, []);

  const handleDelete = async (documentoId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/documentos/${documentoId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedDocumentos = documentos.filter(
          (documento) => documento.id !== documentoId
        );
        setDocumentos(updatedDocumentos);

        console.log(`Documento com ID ${documentoId} excluído com sucesso`);
        showAlert(
          "success",
          `Documento com ID ${documentoId} excluído com sucesso.`
        );
      } else {
        console.error(`Erro ao excluir documento com ID ${documentoId}`);
        showAlert("danger", `Erro ao excluir documento com ID ${documentoId}.`);
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
      showAlert("danger", "Erro ao conectar com o servidor.");
    }

    setShowModal(false);
    setShowDeleteModal(false);
  };

  const handleEdit = (documento) => {
    setEditingDocument(documento);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setEditingDocument(null);
    setShowModal(false);
  };

  const handleSaveChanges = async () => {
    if (!editingDocument) return;

    const requiredFields = [
      "status",
      "motivo",
      "condicoes_lar",
      "outros_animais",
    ];
    const missingFields = requiredFields.filter(
      (field) => !editingDocument[field]
    );

    if (missingFields.length > 0) {
      // Exiba uma mensagem de erro ou tome a ação desejada para lidar com campos vazios
      console.error("Todos os campos são obrigatórios");
      setAlertData({
        variant: "danger",
        message: "Todos os campos devem ser preenchidos",
      });
      return;
    }

    const updateddocumentoData = { ...editingDocument };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/documentos/${editingDocument.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateddocumentoData),
        }
      );

      if (response.ok) {
        const updatedDocumentos = documentos.map((documento) =>
          documento.id === editingDocument.id
            ? { ...documento, ...updateddocumentoData }
            : documento
        );
        setDocumentos(updatedDocumentos);

        console.log(
          `Documento com ID ${editingDocument.id} editado com sucesso`
        );
        console.log(JSON.stringify(editingDocument));
        setAlertData({
          variant: "success",
          message: `Documento com ID ${editingDocument.id} editado com sucesso.`,
        });
      } else {
        console.error(`Erro ao editar documento com ID ${editingDocument.id}`);
        console.log(JSON.stringify(editingDocument));
        setAlertData({
          variant: "danger",
          message: `Erro ao editar documento com ID ${editingDocument.id}.`,
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

  const handleShowDeleteModal = (documento) => {
    setDocumentoToDelete(documento);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDocumentoToDelete(null);
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    if (documentoToDelete) {
      handleDelete(documentoToDelete.id);
      setDocumentoToDelete(null);
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
          onChange={(e) =>
            onChange({ ...editingDocument, [id]: e.target.value })
          }
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
          onChange={(e) =>
            onChange({ ...editingDocument, [id]: e.target.value })
          }
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
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>ID Usuário</th>
            <th>ID Animal</th>
            <th>Motivo</th>
            <th>Condições Lar</th>
            <th>Outros Animais</th>
            <th>Aceite Termo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {documentos.map((documento) => (
            <tr key={documento.id}>
              <td>{documento.id}</td>
              <td>{documento.status}</td>
              <td>
                {documento.id_usuario} - {users[documento.id_usuario]}
              </td>
              <td>
                {documento.id_animal} - {animais[documento.id_animal]}
              </td>

              <td>{documento.motivo}</td>
              <td>{documento.condicoes_lar}</td>
              <td>{documento.outros_animais}</td>
              <td>{documento.aceite_termo}</td>
              <td>
                <Button
                  variant="outline-info"
                  onClick={() => handleEdit(documento)}>
                  <i className="bi bi-pencil-square"></i>
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  onClick={() => handleShowDeleteModal(documento)}>
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
          <Modal.Title>Editar documento</Modal.Title>
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
              "Status",
              "status",
              editingDocument?.status,
              setEditingDocument
            )}
            {renderFormInput(
              "ID Usuario",
              "id_usuario",
              editingDocument?.id_usuario,
              setEditingDocument
            )}
            {renderFormInput(
              "ID Animal",
              "id_animal",
              editingDocument?.id_animal,
              setEditingDocument
            )}
            {renderFormInput(
              "Motivo",
              "motivo",
              editingDocument?.motivo,
              setEditingDocument
            )}
            {renderFormInput(
              "Condições Lar",
              "condicoes_lar",
              editingDocument?.condicoes_lar,
              setEditingDocument,
              "select",
              ["Sim", "Não"]
            )}
            {renderFormInput(
              "Outros animais",
              "outros_animais",
              editingDocument?.outros_animais,
              setEditingDocument,
              "select",
              ["Sim", "Não"]
            )}
            {renderFormInput(
              "Aceite Termo",
              "aceite_termo",
              editingDocument?.aceite_termo,
              setEditingDocument,
              "select",
              ["Sim", "Não"]
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
          {documentoToDelete && (
            <p>
              Tem certeza que deseja excluir o documento{" "}
              <strong>{documentoToDelete.id}</strong>?
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

export default AdoptionRequestTable;
