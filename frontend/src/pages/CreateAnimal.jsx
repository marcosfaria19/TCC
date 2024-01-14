import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebaseConfig";

const initialState = {
  nome: "",
  categoria: "",
  idade: "",
  genero: "",
  personalidade: "",
  saude: "",
  data_resgate: "",
  imagemUrl: null,
  imagemFile: null,
};

const CreateAnimal = () => {
  const [animal, setAnimal] = useState(initialState);

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAnimal({
      ...animal,
      imagemFile: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageRef = ref(storage, `images/${animal.imagemFile.name}`);
      await uploadBytes(imageRef, animal.imagemFile);
      const imageUrl = await getDownloadURL(imageRef);

      const requestBody = {
        ...animal,
        imagemUrl: imageUrl,
      };

      console.log("JSON enviado para o backend:", JSON.stringify(requestBody));

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/animais`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        console.log("Criação de animal bem-sucedida!");
        setAnimal(initialState); // Reinicializar o estado após o sucesso
      } else {
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
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={animal.nome || ""}
          onChange={handleChange}
        />

        <label>Categoria:</label>
        <select
          name="categoria"
          value={animal.categoria}
          onChange={handleChange}>
          <option
            value=""
            disabled>
            Selecione a Categoria
          </option>
          <option value="Gato">Gato</option>
          <option value="Cachorro">Cachorro</option>
        </select>

        <label>Idade:</label>
        <input
          type="number"
          name="idade"
          value={animal.idade || ""}
          onChange={handleChange}
        />

        <label>Gênero:</label>
        <select
          name="genero"
          value={animal.genero}
          onChange={handleChange}>
          <option
            value=""
            disabled>
            Selecione o Gênero
          </option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>

        <label>Personalidade:</label>
        <input
          type="text"
          name="personalidade"
          value={animal.personalidade || ""}
          onChange={handleChange}
        />

        <label>Saúde:</label>
        <input
          type="text"
          name="saude"
          value={animal.saude || ""}
          onChange={handleChange}
        />

        <label>Data Resgate:</label>
        <input
          type="date"
          name="data_resgate"
          value={animal.data_resgate || ""}
          onChange={handleChange}
        />

        <label>Imagem:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit">Criar Animal</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
