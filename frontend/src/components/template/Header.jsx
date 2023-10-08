import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header bg-primary py-2">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a
          className="logo"
          href="/#">
          <img
            className="logo"
            src={logo}
            alt="Logo"
          />
        </a>

        <div>
          {/* Botão de Favoritos (ícone de coração) */}
          <button className="btn btn-primary btn-heart">
            <i className="bi bi-heart"></i>
          </button>

          {/* Botões de Login e Registro com efeito de hover vermelho */}
          <button className="btn btn-primary mr-2">Login</button>
          <button className="btn btn-primary mx-2">Inscreva-se</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
