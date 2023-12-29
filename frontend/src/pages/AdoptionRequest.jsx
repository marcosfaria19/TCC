// AdoptionRequest.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AdoptionRequest = () => {
  const { animalId } = useParams();
  const [adoptionForm, setAdoptionForm] = useState({
    nomeAdotante: "",
    emailAdotante: "",
    mensagem: "",
  });
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    // Função assíncrona para buscar detalhes do animal pelo ID
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

    // Verifica se o animalId está presente antes de chamar a função de busca
    if (animalId) {
      fetchAnimalDetails();
    }
  }, [animalId]);

  const handleChange = (e) => {
    setAdoptionForm({ ...adoptionForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/adocao/${animalId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adoptionForm),
        }
      );

      if (response.ok) {
        // Solicitação de adoção bem-sucedida, redirecione ou faça alguma outra ação
        console.log("Solicitação de adoção enviada com sucesso!");
      } else {
        // Trate erros na solicitação de adoção
        console.error("Erro na solicitação de adoção");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
    }
  };

  return (
    <div>
      <h2>Solicitar Adoção</h2>
      {animal ? (
        <div>
          <h3>Detalhes do Animal</h3>
          <p>Nome: {animal.nome}</p>
          <p>Categoria: {animal.categoria}</p>
          {/* Adicione outros detalhes do animal, se necessário */}

          <form onSubmit={handleSubmit}>
            {/* Adicione os campos do formulário para solicitar a adoção */}
            <label>Nome do Adotante:</label>
            <input
              type="text"
              name="nomeAdotante"
              value={adoptionForm.nomeAdotante}
              onChange={handleChange}
            />

            <label>Email do Adotante:</label>
            <input
              type="email"
              name="emailAdotante"
              value={adoptionForm.emailAdotante}
              onChange={handleChange}
            />

            <label>Mensagem:</label>
            <textarea
              name="mensagem"
              value={adoptionForm.mensagem}
              onChange={handleChange}
            />

            <button type="submit">Enviar Solicitação</button>
          </form>
        </div>
      ) : (
        <p>Carregando detalhes do animal...</p>
      )}
    </div>
  );
};

export default AdoptionRequest;
