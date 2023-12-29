// AnimalDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AnimalList.css";

const AnimalDetails = () => {
  const { animalId } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    // Adicione a lógica para buscar os detalhes do animal pelo ID no backend
    const fetchAnimalDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/animais/${animalId}`
        );
        const data = await response.json();

        if (response.ok) {
          setAnimal(data);
        } else {
          console.error("Erro ao obter os detalhes do animal");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchAnimalDetails();
  }, [animalId]); // Execute a busca sempre que o animalId mudar

  return (
    <div>
      <h2>Detalhes do Animal</h2>
      {animal ? (
        <div>
          <h3>{animal.nome}</h3>
          <p>Categoria: {animal.categoria}</p>
          <p>Idade: {animal.idade}</p>
          <p>Gênero: {animal.genero}</p>
          <p>Personalidade: {animal.personalidade}</p>
          <p>Histórico de Saúde: {animal.saude}</p>
          <p>Data de Resgate: {animal.data_resgate}</p>
          <img
            src={animal.imagemUrl}
            alt={animal.nome}
          />
        </div>
      ) : (
        <p>Carregando detalhes do animal...</p>
      )}
    </div>
  );
};

export default AnimalDetails;
