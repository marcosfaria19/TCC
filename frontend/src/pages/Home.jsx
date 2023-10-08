import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Encontre seu amigo peludo</h1>
          <p className="hero-description">
            Adote um animal de estimação hoje e transforme uma vida para sempre.
          </p>
          <button className="btn btn-primary hero-button">Ver Animais</button>
        </div>
      </section>

      <section className="featured-animals">
        <div className="container">
          <h2 className="section-title">Animais em Destaque</h2>
          {/* Inclua aqui a lista de animais em destaque */}
        </div>
      </section>
    </div>
  );
}

export default Home;
