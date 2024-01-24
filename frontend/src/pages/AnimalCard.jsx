// AnimalCard.js
import React, { useState } from "react";
import "./AnimalCard.css";

const AnimalCard = ({ animal }) => {
  const [hovered, setHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };

  const isMale = animal.genero.toLowerCase() === "macho";
  const isFemale = animal.genero.toLowerCase() === "fêmea";

  return (
    <div
      className={`col-md-3 col-lg-3 animal-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <a href={`/animais/${animal.id}`} className="card-link">
        <div className={`animal-card-custom ${hovered ? "hovered" : ""}`}>
          <img
            src={animal.imagemUrl}
            className="animal-card-img-top"
            alt={animal.nome}
          />
          <button
            className={`favorite-btn ${isFavorited ? "favorited" : ""}`}
            onClick={handleFavoriteClick}>
            <i className={`bi bi-heart${isFavorited ? "-fill" : ""}`}></i>
          </button>
          <div className={`additional-info ${hovered ? "hovered" : ""}`}>
            <p className="animal-card-text">
              <strong className="animal-nome">
                {animal.nome.toUpperCase()}
              </strong>
            </p>
            {isMale && (
              <p className="animal-card-text">
                <i className="bi bi-gender-male"></i>
              </p>
            )}
            {isFemale && (
              <p className="animal-card-text">
                <i className="bi bi-gender-female"></i>
              </p>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default AnimalCard;
