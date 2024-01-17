// src/services/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerAnimais = require("./swaggerRoutes/swaggerAnimais");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Adoção de animais - TCC PUCRS",
      version: "1.0",
      description:
        "Essa é uma simples aplicação feita com express e documentada com Swagger.",
      contact: {
        name: "Marcos Vinícius Faria",
        url: "https://github.com/marcosfaria19/",
        email: "marcos.faria19@hotmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./src/services/swaggerRoutes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

// Incorpora as definições específicas para a rota de animais
swaggerSpec.components = {
  ...swaggerSpec.components,
  ...swaggerAnimais.components,
};

module.exports = swaggerSpec;
