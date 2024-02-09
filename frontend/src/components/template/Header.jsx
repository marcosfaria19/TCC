import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../auth/AuthContext";
import { auth } from "../../services/firebaseConfig"; // Importe a função signOut do Firebase
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegistroClick = () => {
    navigate("/registro");
  };

  const handlePerfilClick = () => {
    navigate("/perfil");
  };

  const handleLogoutClick = async () => {
    try {
      await auth.signOut(); // Logout usando auth.signOut()
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <header className="header py-2 m-b-0 border_b_orange">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="logo" href="/#">
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <div className="d-flex">
          <a href="/#" className="btn btn-heart">
            <i className="bi bi-heart"></i>
          </a>
          {user ? (
            <>
              <button
                className="btn btn-primary mx-2"
                onClick={handlePerfilClick}>
                Perfil
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={handleLogoutClick}>
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
