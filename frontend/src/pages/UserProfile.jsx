// UserProfile.js
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Adicione a lógica para buscar os detalhes do usuário no backend
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/usuario`,
          {
            // Adicione as configurações necessárias para autenticação ou token, se aplicável
          }
        );

        const data = await response.json();

        if (response.ok) {
          setUserData(data);
        } else {
          console.error("Erro ao obter os detalhes do usuário");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchUserData();
  }, []); // Execute a busca apenas uma vez no carregamento do componente

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      {userData ? (
        <div>
          <p>Nome: {userData.nome}</p>
          <p>Email: {userData.email}</p>
          {/* Adicione outros detalhes do perfil do usuário, se necessário */}
        </div>
      ) : (
        <p>Carregando detalhes do usuário...</p>
      )}
    </div>
  );
};

export default UserProfile;
