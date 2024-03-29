import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Tab, Tabs, Card, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./UserProfile.css";
import About from "../components/template/About";
import Favorites from "../components/template/Favorites";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [key, setKey] = useState("sobre");
  const isSmallScreen = useMediaQuery({ query: "(max-width: 576px)" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();

        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const response = await fetch(
              `${process.env.REACT_APP_BACKEND_URL}/users/email/${user.email}`
            );

            const data = await response.json();

            if (response.ok) {
              setUserData(data);
            } else {
              console.error("Erro ao obter os detalhes do usuário");
            }
          } else {
            console.error("Usuário não autenticado");
          }
        });
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSelect = (selectedKey) => {
    setKey(selectedKey);
  };

  const tabs = (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      variant="underline">
      <Tab eventKey="sobre" title="Sobre mim"></Tab>
      <Tab eventKey="favoritos" title="Favoritos"></Tab>
      <Tab eventKey="adocao" title="Minhas Adoções"></Tab>
    </Tabs>
  );

  const dropdown = (
    <Dropdown as={NavItem} onSelect={handleSelect}>
      <Dropdown.Toggle as={NavLink}>
        {key === "sobre"
          ? "Sobre mim"
          : key === "favoritos"
          ? "Favoritos"
          : "Minhas Adoções"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="sobre">Sobre mim</Dropdown.Item>
        <Dropdown.Item eventKey="favoritos">Favoritos</Dropdown.Item>
        <Dropdown.Item eventKey="adocao">Minhas adoções</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const selectedContent = {
    sobre: <About />,
    favoritos: <Favorites />,
    /* adocao: <AdoptionStatus />, */
  };

  return (
    <div className="my-5 d-flex justify-content-center align-items-center">
      {userData ? (
        <Card className="p-4 custom-card">
          <h2 className="mb-4 text-center">Bem vindo(a)!</h2>
          {isSmallScreen ? dropdown : tabs}
          <div className="mt-4">
            {selectedContent[key]}{" "}
            {/* Renderiza o conteúdo com base na chave selecionada */}
          </div>
        </Card>
      ) : (
        <p className="text-center">Carregando detalhes do usuário...</p>
      )}
    </div>
  );
};

export default UserProfile;
