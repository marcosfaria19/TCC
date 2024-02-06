// AdoptionRequestTable.jsx

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AdoptionRequestTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        );
        const data = await response.json();

        if (response.ok) {
          setUsers(data);
        } else {
          console.error("Erro ao obter a lista de usuários");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            {/* Adicione mais colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.telefone}</td>
              {/* Adicione mais colunas conforme necessário */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdoptionRequestTable;
