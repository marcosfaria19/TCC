// CreateAnimal.js
import React, { useState } from "react";

const CreateAnimal = () => {
  const [animal, setAnimal] = useState({
    nome: "",
    categoria: "",
    idade: "",
    genero: "",
    personalidade: "",
    saude: "",
    data_resgate: "",
    imagemUrl: "",
  });

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/animais`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(animal),
        }
      );

      if (response.ok) {
        // Criação de animal bem-sucedida, redirecione ou faça alguma outra ação
        console.log("Criação de animal bem-sucedida!");
      } else {
        // Trate erros na criação de animal
        console.error("Erro na criação de animal");
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor", error);
    }
  };

  return (
    <div>
      <h2>Criar Animal</h2>
      <form onSubmit={handleSubmit}>
        {/* Adicione os campos do formulário para criar um novo animal */}
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={animal.nome}
          onChange={handleChange}
        />

        <label>URL da Imagem:</label>
        <input
          type="text"
          name="imagemUrl"
          value={animal.imagemUrl}
          onChange={handleChange}
        />
        <label>Categoria:</label>
        <input
          type="text"
          name="categoria"
          value={animal.categoria}
          onChange={handleChange}
        />

        <label>Idade:</label>
        <input
          type="number"
          name="idade"
          value={animal.idade}
          onChange={handleChange}
        />

        <label>Gênero:</label>
        <input
          type="text"
          name="genero"
          value={animal.genero}
          onChange={handleChange}
        />

        <label>Personalidade:</label>
        <input
          type="text"
          name="personalidade"
          value={animal.personalidade}
          onChange={handleChange}
        />

        <label>Saúde:</label>
        <input
          type="text"
          name="saude"
          value={animal.saude}
          onChange={handleChange}
        />

        <label>Data Resgate:</label>
        <input
          type="date"
          name="data_resgate"
          value={animal.data_resgate}
          onChange={handleChange}
        />

        <button type="submit">Criar Animal</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
