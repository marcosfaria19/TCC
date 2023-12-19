// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Rota para criar um novo usuário
router.post("/usuarios", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter todos os usuários
router.get("/usuarios", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Adicione outras rotas conforme necessário (atualização, exclusão, etc.)

module.exports = router;
