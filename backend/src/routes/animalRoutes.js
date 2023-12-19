// animalRoutes.js
const express = require("express");
const router = express.Router();
const Animal = require("../models/animal");

router.post("/", (req, res) => {
  const animal = new Animal(
    req.body.nome,
    req.body.categoria,
    req.body.idade,
    req.body.genero,
    req.body.personalidade,
    req.body.saude
  );
  console.log(req.app.get("db"));
  animal.create(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao criar animal" });
    } else {
      res.status(201).json({ message: "Animal criado com sucesso", result });
    }
  });
});

module.exports = router;
