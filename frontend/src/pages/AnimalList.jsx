// AnimalList.js
import React, { useState, useEffect } from "react";
import "./AnimalList.css"; // Importe o arquivo de estilos
import AnimalCard from "./AnimalCard"; // Importe o componente AnimalCard

const AnimalList = () => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    // Adicione a lógica para buscar a lista de animais do backend
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
  }, []); // Execute a busca apenas uma vez no carregamento do componente

  return (
    <div className="container mt-4">
      <h2>Animais para Adoção</h2>
      <div className="row">
        {animais.map((animal) => (
          // Use o componente AnimalCard para cada animal
          <AnimalCard
            key={animal.id}
            animal={animal}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
