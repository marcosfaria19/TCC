// animalRoutes.js
const express = require("express");
const router = express.Router();
const Animal = require("../models/animal");

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> desenvolvimento-frontend
// Rota para obter todos os animais
router.get("/", (req, res) => {
  Animal.getAll(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter animais" });
    } else {
      res.status(200).json(result);
    }
  });
});

// Rota para obter um animal específico pelo ID
router.get("/:id", (req, res) => {
  const animalId = req.params.id;

  Animal.getById(req.app.get("db"), animalId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter o animal" });
    } else {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Animal não encontrado" });
      }
    }
  });
});
// Rota para atualizar um animal por ID
router.put("/:id", (req, res) => {
  const animalId = req.params.id;
  const updatedAnimal = {
    nome: req.body.nome,
    categoria: req.body.categoria,
    idade: req.body.idade,
    genero: req.body.genero,
    personalidade: req.body.personalidade,
    saude: req.body.saude,
  };

  Animal.updateById(
    req.app.get("db"),
    animalId,
    updatedAnimal,
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Erro ao atualizar animal" });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Animal não encontrado" });
        } else {
          res.status(200).json({ message: "Animal atualizado com sucesso" });
        }
      }
    }
  );
});

// Rota para criar um novo animal
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> desenvolvimento-frontend
router.post("/", (req, res) => {
  const animal = new Animal(
    req.body.nome,
    req.body.categoria,
    req.body.idade,
    req.body.genero,
    req.body.personalidade,
    req.body.saude
  );
<<<<<<< HEAD

=======
<<<<<<< HEAD
  console.log(req.app.get("db"));
=======

>>>>>>> main
>>>>>>> desenvolvimento-frontend
  animal.create(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao criar animal" });
    } else {
      res.status(201).json({ message: "Animal criado com sucesso", result });
    }
  });
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> desenvolvimento-frontend
router.delete("/:id", (req, res) => {
  const animalId = req.params.id;

  Animal.deleteById(req.app.get("db"), animalId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao excluir animal" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Animal não encontrado" });
      } else {
        res.status(200).json({ message: "Animal excluído com sucesso" });
      }
    }
  });
});

<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> desenvolvimento-frontend
module.exports = router;
