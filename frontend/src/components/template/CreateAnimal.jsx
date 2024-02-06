import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebaseConfig";
import {
  Modal,
  Button,
  Form,
  Image,
  InputGroup,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";

const initialState = {
  nome: "",
  categoria: "",
  idade: "",
  genero: "",
  personalidade: [],
  saude: [],
  data_resgate: "",
  imagemUrl: null,
  imagemFile: null,
};

const CreateAnimal = ({ show, handleClose }) => {
  const [animal, setAnimal] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "saude" || name === "personalidade") {
      const updatedValues = animal[name].includes(value)
        ? animal[name].filter((item) => item !== value)
        : [...animal[name], value];

      setAnimal({ ...animal, [name]: updatedValues });
    } else {
      setAnimal({ ...animal, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAnimal({
      ...animal,
      imagemFile: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setIsLoading(true);

      try {
        const imageRef = ref(storage, `images/${animal.imagemFile.name}`);
        await uploadBytes(imageRef, animal.imagemFile);
        const imageUrl = await getDownloadURL(imageRef);

        const requestBody = {
          ...animal,
          saude: animal.saude.join(","),
          personalidade: animal.personalidade.join(","),
          imagemUrl: imageUrl,
        };

        console.log(
          "JSON enviado para o backend:",
          JSON.stringify(requestBody)
        );

        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/animais`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          console.log("Criação de animal bem-sucedida!");

          setAnimal(initialState);
          handleClose();
          setShowSuccessModal(true);
        } else {
          console.error("Erro na criação de animal");
          setShowErrorModal(true);
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor", error);
        setShowErrorModal(true);
      } finally {
        setIsLoading(false);
      }
    }

    setValidated(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Criar Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formNome">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  required
                  value={animal.nome || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formCategoria">
                <Form.Label>Categoria:</Form.Label>
                <Form.Select
                  name="categoria"
                  required
                  value={animal.categoria}
                  onChange={handleChange}
                  style={{ height: "60px" }}>
                  <option value="" disabled>
                    Selecione a Categoria
                  </option>
                  <option value="Gato">Gato</option>
                  <option value="Cachorro">Cachorro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGenero">
                <Form.Label>Gênero:</Form.Label>
                <Form.Select
                  name="genero"
                  required
                  value={animal.genero}
                  onChange={handleChange}
                  style={{ height: "60px" }}>
                  <option value="" disabled>
                    Selecione o Gênero
                  </option>
                  <option value="Macho">Macho</option>
                  <option value="Fêmea">Fêmea</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formPersonalidade">
                <Form.Label>Personalidade:</Form.Label>
                <div>
                  {["Dorminhoco", "Sociável", "Brincalhão"].map((value) => (
                    <Form.Check
                      key={value}
                      inline
                      label={value}
                      type="checkbox"
                      name="personalidade"
                      value={value}
                      checked={animal.personalidade.includes(value)}
                      onChange={handleChange}
                      required
                    />
                  ))}
                </div>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formSaude">
                <Form.Label>Saúde:</Form.Label>
                <div>
                  {["Vacinado", "Vermifugado", "FIV", "FELV"].map((value) => (
                    <Form.Check
                      key={value}
                      inline
                      label={value}
                      type="checkbox"
                      name="saude"
                      value={value}
                      checked={animal.saude.includes(value)}
                      onChange={handleChange}
                      required
                    />
                  ))}
                </div>
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group as={Col} className="mb-3" controlId="formIdade">
                <Form.Label>Idade:</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="number"
                    name="idade"
                    value={animal.idade || ""}
                    onChange={handleChange}
                    required
                  />
                  <InputGroup.Text id="basic-addon2">anos</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formDataResgate">
                <Form.Label>Data do Resgate:</Form.Label>
                <Form.Control
                  type="date"
                  name="data_resgate"
                  value={animal.data_resgate || ""}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formImagem">
              <Form.Label>Imagem:</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              {animal.imagemFile && (
                <Image
                  src={URL.createObjectURL(animal.imagemFile)}
                  alt="Preview"
                  className="mt-2"
                  style={{
                    width: "200px",
                    height: "200px",
                    marginTop: "10px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Botões */}
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}>
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Criar Animal"
            )}
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={isLoading}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal de sucesso */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Animal criado com sucesso!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal de erro */}
      <Modal
        show={showErrorModal}
        onHide={() => setShowErrorModal(false)}
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Erro!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ocorreu um erro ao criar o animal. Por favor, tente novamente.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateAnimal;
