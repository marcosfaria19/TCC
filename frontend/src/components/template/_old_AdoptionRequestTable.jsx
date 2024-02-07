// UserTable.jsx

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AdoptionRequestTable = () => {
  const [Documento, setDocumento] = useState([]);

  useEffect(() => {
    const fetchDocumento = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/documentos`
        );
        const data = await response.json();

        if (response.ok) {
          setDocumento(data);
        } else {
          console.error("Erro ao obter a lista de usuários");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchDocumento();
  }, []);

  return (
    <div>
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>ID Usuário</th>
            <th>ID Animal</th>
            <th>Motivo</th>
            <th>Condições Lar</th>
            <th>Outros Animais</th>

            {/* Adicione mais colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {Documento.map((documento) => (
            <tr key={documento.id}>
              <td>{documento.id}</td>
              <td>{documento.status}</td>
              <td>{documento.id_usuario}</td>
              <td>{documento.animal}</td>
              <td>{documento.motivo}</td>
              <td>{documento.condicoes_lar}</td>
              <td>{documento.outros_animais}</td>
              {/* Adicione mais colunas conforme necessário */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdoptionRequestTable;
