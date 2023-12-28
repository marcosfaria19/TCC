const express = require("express");
const router = express.Router();
const Documento = require("../models/documento");

// Rota para criar um novo documento
router.post("/", (req, res) => {
  const documento = new Documento(req.usuario.uid, req.body.tipo);

  documento.create(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao criar documento" });
    } else {
      res.status(201).json({ message: "Documento criado com sucesso", result });
    }
  });
});

router.get("/", (req, res) => {
  Documento.getAll(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter documentos" });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
