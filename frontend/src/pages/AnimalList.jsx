// AnimalList.js
import React, { useState, useEffect } from "react";

const AnimalList = () => {
  const [hoveredId, setHoveredId] = useState(null);
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
          <div
            key={animal.id}
            className="col-md-4 mb-4"
            onMouseEnter={() => setHoveredId(animal.id)}
            onMouseLeave={() => setHoveredId(null)}>
            <div className={`card ${hoveredId === animal.id ? "hovered" : ""}`}>
              <img
                src={animal.imagemUrl}
                className="card-img-top"
                alt={animal.nome}
              />
              <div className="card-body">
                <h5 className="card-title">{animal.nome}</h5>
                {hoveredId === animal.id && (
                  <div>
                    <p className="card-text">
                      <strong>Categoria:</strong> {animal.categoria}
                    </p>
                    {/* Adicione outros detalhes do animal, como idade, gênero, etc. */}
                    {animal.categoria.toLowerCase() === "gato" && (
                      <p className="card-text">
                        <i className="bi bi-cat"></i> Gato
                      </p>
                    )}
                    <p className="card-text">
                      <i
                        className={`bi bi-gender-${animal.genero.toLowerCase()}`}></i>{" "}
                      {animal.genero}
                    </p>
                  </div>
                )}
                <a
                  href={`/detalhes-animal/${animal.id}`}
                  className="btn btn-primary">
                  Detalhes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
