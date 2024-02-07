const express = require("express");
const router = express.Router();
const Documento = require("../models/documento");

// Rota para criar um novo documento
router.post("/", (req, res) => {
  const documento = new Documento(
    req.body.status,
    req.body.id_usuario,
    req.body.id_animal,
    req.body.motivo,
    req.body.condicoes_lar,
    req.body.outros_animais,
    req.body.aceite_termo
  );

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

// Rota para atualizar um documento por ID
router.put("/:id", (req, res) => {
  const documentoId = req.params.id;
  const updatedDocumento = {
    status: req.body.status,
    id_usuario: req.body.id_usuario,
    id_animal: req.body.id_animal,
    motivo: req.body.motivo,
    condicoes_lar: req.body.condicoes_lar,
    outros_animais: req.body.outros_animais,
    aceite_termo: req.body.aceite_termo,
  };

  Documento.updateById(
    req.app.get("db"),
    documentoId,
    updatedDocumento,
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Erro ao atualizar documento" });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Documento não encontrado" });
        } else {
          res.status(200).json({ message: "Documento atualizado com sucesso" });
        }
      }
    }
  );
});

// Rota para obter um documento por ID
router.get("/:id", (req, res) => {
  const documentoId = req.params.id;

  Documento.getById(req.app.get("db"), documentoId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter documento por ID" });
    } else {
      if (!result) {
        res.status(404).json({ message: "Documento não encontrado" });
      } else {
        res.status(200).json(result);
      }
    }
  });
});

// Rota para excluir um Documento por ID
router.delete("/:id", (req, res) => {
  const documentoId = req.params.id;

  Documento.deleteById(req.app.get("db"), documentoId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao excluir documento" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Documento não encontrado" });
      } else {
        res.status(200).json({ message: "Documento excluído com sucesso" });
      }
    }
  });
});

module.exports = router;
