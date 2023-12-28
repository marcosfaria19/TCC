import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              className="logo"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/#">Página Inicial</a>
              </li>
              <li>
                <a href="/#">Sobre Nós</a>
              </li>
              <li>
                <a href="/#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <a
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Marcos Faria. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
