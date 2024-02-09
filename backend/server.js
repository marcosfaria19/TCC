const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const router = express.Router();
const verifyToken = require("./src/middleware/authMiddleware.js");

const userRoutes = require("./src/routes/userRoutes");
const animalRoutes = require("./src/routes/animalRoutes");
const documentoRoutes = require("./src/routes/documentoRoutes.js");

require("dotenv").config();

// Swagger
const swaggerSpec = require("./src/services/swagger.js");
const swaggerui = require("swagger-ui-express");

// Inicializar o Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados MySQL
const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});
app.set("db", db);

// Rotas
app.use("/users", userRoutes); // Apply middleware to protected routes
app.use("/animais", animalRoutes);
app.use("/documentos", documentoRoutes);

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerSpec));
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
