import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegistroClick = () => {
    navigate("/registro");
  };

  return (
    <header className="header py-2 m-b-0 border_b_orange">
      <div className="d-flex justify-content-between align-items-center">
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
        <div className="d-flex">
          <a
            href="/#"
            className="btn btn-heart">
            <i className="bi bi-heart"></i>
          </a>
          <button
            className="btn btn-primary mr-0"
            onClick={handleLoginClick}>
            Login
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleRegistroClick}>
            Inscreva-se
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
