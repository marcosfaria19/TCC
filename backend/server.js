// server.js
const express = require("express");
const mysql2 = require("mysql2");
const userRoutes = require("./src/routes/userRoutes");
const animalRoutes = require("./src/routes/animalRoutes");
const authRoutes = require("./src/routes/authRoutes.js");
const adocaoRoutes = require("./src/routes/adocaoRoutes");

require("dotenv").config();

// Inicializar o Express
const app = express();
const port = process.env.PORT || 3000;

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
app.use("/users", userRoutes);
app.use("/animais", animalRoutes);
app.use("/auth", authRoutes);
app.use("/adocoes", adocaoRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
