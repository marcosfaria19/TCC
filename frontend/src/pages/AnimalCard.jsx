// AnimalCard.js
import React, { useState } from "react";
import "./AnimalCard.css"; // Importe o arquivo de estilos

const AnimalCard = ({ animal }) => {
  // Crie um estado para controlar se os detalhes devem ser mostrados ou não
  const [showDetails, setShowDetails] = useState(false);

  // Crie uma função para alternar o valor de showDetails
  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="col-md-4 animal-card">
      {/* Adicione um evento de clique e um estilo condicional na div com a classe card */}
      <div
        className={`card ${showDetails ? "selected" : ""}`}
        onClick={toggleDetails}>
        <img
          src={animal.imagemUrl}
          className="card-img-top"
          alt={animal.nome}
        />
        <div className="card-body">
          <h5 className="card-title">{animal.nome}</h5>
          {/* Adicione uma condição para mostrar as informações adicionais somente se showDetails for true */}
          {showDetails && (
            <div>
              <p className="card-text">
                <strong>Categoria:</strong> {animal.categoria}
              </p>
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
            href={`/animais/${animal.id}`}
            className="btn btn-primary">
            Detalhes
          </a>
          {/* Adicione um ícone de coração vermelho se o animal tiver adocaoEspecial como true */}
          {animal.adocaoEspecial && (
            <span className="special-adoption">
              <i className="bi bi-heart-fill"></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
