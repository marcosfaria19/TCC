// AnimalDetails.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./AnimalDetails.css";
import CustomBadge from "../components/template/Badge";
import {
  faSyringe,
  faPrescriptionBottleMedical,
  faShieldHeart,
  faMoon,
  faGamepad,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const AnimalDetails = () => {
  const { animalId } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimalDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/animais/${animalId}`
        );
        const data = await response.json();

        if (response.ok) {
          setAnimal(data);
        } else {
          console.error("Erro ao obter os detalhes do animal");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
      }
    };

    fetchAnimalDetails();
  }, [animalId]);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <Container className="mt-4">
      <h2>Detalhes do Animal</h2>
      {animal ? (
        <Card>
          <Card.Header as="h3" className="animal-name">
            {animal.nome}
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={12} md={6}>
                <Card.Img
                  src={animal.imagemUrl}
                  alt={animal.nome}
                  className="animal-image"
                />
              </Col>
              <Col xs={12} md={6} className="text-column d-flex flex-column">
                <p>
                  <strong>Categoria:</strong> {animal.categoria}
                </p>
                <Card.Text>
                  <strong>Idade:</strong> {animal.idade} anos
                </Card.Text>
                <Card.Text>
                  <strong>Gênero:</strong> {animal.genero}
                </Card.Text>
                <Card.Text>
                  <strong>Data de Resgate:</strong>{" "}
                  {formatDate(animal.data_resgate)}
                </Card.Text>
                <p>
                  <strong>Personalidade: </strong>
                  {animal.personalidade.includes("Dorminhoco") && (
                    <CustomBadge icon={faMoon} text=" Dorminhoco" />
                  )}
                  {animal.personalidade.includes("Brincalhão") && (
                    <CustomBadge icon={faGamepad} text=" Brincalhão" />
                  )}
                  {animal.personalidade.includes("Sociável") && (
                    <CustomBadge icon={faUserPlus} text=" Sociável" />
                  )}
                </p>
                <p>
                  <strong>Saúde: </strong>
                  {animal.saude.includes("Vacinado") && (
                    <CustomBadge icon={faSyringe} text=" Vacinado" />
                  )}
                  {animal.saude.includes("Vermifugado") && (
                    <CustomBadge
                      icon={faPrescriptionBottleMedical}
                      text=" Vermifugado"
                    />
                  )}
                  {animal.saude.includes("FELV") && (
                    <CustomBadge icon={faShieldHeart} text=" FELV" />
                  )}
                  {animal.saude.includes("FIV") && (
                    <CustomBadge icon={faShieldHeart} text=" FIV" />
                  )}
                </p>
                <p>{animal.historia}</p>
                <div className="mt-auto botaoAdocao">
                  <Link to={`/adotar/${animal.id}`}>
                    <Button variant="primary">
                      Iniciar Processo de Adoção
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <p>Carregando detalhes do animal...</p>
      )}
    </Container>
  );
};

export default AnimalDetails;
