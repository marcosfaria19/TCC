<<<<<<< HEAD
// usuarioRoutes.js
=======
<<<<<<< HEAD
// routes/userRoutes.js
=======
// usuarioRoutes.js
>>>>>>> main
>>>>>>> desenvolvimento-frontend
const express = require("express");
const router = express.Router();
const User = require("../models/User");

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> desenvolvimento-frontend
// Rota para registrar um novo usuário
router.post("/register", (req, res) => {
  const { nome, email, senha, cpf, telefone, endereco, idade } = req.body;

  // Criar uma instância do modelo User
  const newUser = new User(nome, email, senha, cpf, telefone, endereco, idade);

  // Chamar o método create para adicionar o usuário ao banco de dados
  newUser.create(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao registrar usuário" });
    } else {
      res
        .status(201)
        .json({ message: "Usuário registrado com sucesso", result });
    }
  });
});

// Rota para obter todos os usuários
router.get("/", (req, res) => {
  User.getAll(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter usuários" });
    } else {
      res.status(200).json(result);
    }
  });
});

// Rota para obter um usuário por ID
router.get("/:id", (req, res) => {
  const usuarioId = req.params.id;

  User.getById(req.app.get("db"), usuarioId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter usuário por ID" });
    } else {
      if (!result) {
        res.status(404).json({ message: "Usuário não encontrado" });
      } else {
        res.status(200).json(result);
      }
    }
  });
});

// Rota para atualizar um usuário por ID
router.put("/:id", (req, res) => {
  const usuarioId = req.params.id;

  const usuario = new User(
    req.body.nome,
    req.body.email,
    req.body.senha,
    req.body.cpf,
    req.body.telefone,
    req.body.endereco,
    req.body.idade
  );

  usuario.updateById(req.app.get("db"), usuarioId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Usuário não encontrado" });
      } else {
        res.status(200).json({ message: "Usuário atualizado com sucesso" });
      }
    }
  });
});

// Rota para excluir um usuário por ID
router.delete("/:id", (req, res) => {
  const usuarioId = req.params.id;

  User.deleteById(req.app.get("db"), usuarioId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao excluir usuário" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Usuário não encontrado" });
      } else {
        res.status(200).json({ message: "Usuário excluído com sucesso" });
      }
    }
  });
});
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> desenvolvimento-frontend

module.exports = router;
