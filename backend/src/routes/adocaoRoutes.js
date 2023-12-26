const express = require("express");
const router = express.Router();
const Adocao = require("../models/adocao");

// Rota para criar uma nova adoção
router.post("/", (req, res) => {
  const adocao = new Adocao(
    req.body.id_usuario,
    req.body.id_animal,
    req.body.data_adocao
  );

  adocao.create(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao criar adoção" });
    } else {
      res.status(201).json({ message: "Adoção criada com sucesso", result });
    }
  });
});

// Rota para ver todas as adoções
router.get("/", (req, res) => {
  Adocao.getAll(req.app.get("db"), (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter lista de adoções" });
    } else {
      res.status(200).json(result);
    }
  });
});

// Rota para obter uma adoção por ID
router.get("/:id", (req, res) => {
  const adocaoId = req.params.id;

  Adocao.getById(req.app.get("db"), adocaoId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao obter adoção por ID" });
    } else {
      if (!result) {
        res.status(404).json({ message: "Adoção não encontrada" });
      } else {
        res.status(200).json(result);
      }
    }
  });
});

// Rota para atualizar uma adoção por ID
router.put("/:id", (req, res) => {
  const adocaoId = req.params.id;
  const updatedAdocao = {
    id_usuario: req.body.id_usuario,
    id_animal: req.body.id_animal,
    data_adocao: req.body.data_adocao,
  };

  Adocao.updateById(
    req.app.get("db"),
    adocaoId,
    updatedAdocao,
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Erro ao atualizar adoção" });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Adoção não encontrada" });
        } else {
          res.status(200).json({ message: "Adoção atualizada com sucesso" });
        }
      }
    }
  );
});

// Rota para excluir uma adoção por ID
router.delete("/:id", (req, res) => {
  const adocaoId = req.params.id;

  Adocao.deleteById(req.app.get("db"), adocaoId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao excluir adoção" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Adoção não encontrada" });
      } else {
        res.status(200).json({ message: "Adoção excluída com sucesso" });
      }
    }
  });
});

module.exports = router;
