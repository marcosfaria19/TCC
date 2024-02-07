class Documento {
  constructor(
    status,
    id_usuario,
    id_animal,
    motivo,
    condicoes_lar,
    outros_animais,
    aceite_termo
  ) {
    this.status = status;
    this.id_usuario = id_usuario;
    this.id_animal = id_animal;
    this.motivo = motivo;
    this.condicoes_lar = condicoes_lar;
    this.outros_animais = outros_animais;
    this.aceite_termo = aceite_termo;
  }

  create(db, callback) {
    const sql =
      "INSERT INTO documentos (status, id_usuario, id_animal, motivo, condicoes_lar, outros_animais, aceite_termo) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      this.status,
      this.id_usuario,
      this.id_animal,
      this.motivo,
      this.condicoes_lar,
      this.outros_animais,
      this.aceite_termo,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao criar documento:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static getAll(db, callback) {
    const sql = "SELECT * FROM documentos";

    db.query(sql, (err, result) => {
      if (err) {
        console.error("Erro ao obter documento:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static getById(db, id, callback) {
    const sql = "SELECT * FROM documentos WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao obter documento por ID:", err);
        callback(err, null);
      } else {
        callback(null, result[0]); // Retorna o primeiro documento encontrado
      }
    });
  }

  static deleteById(db, id, callback) {
    const sql = "DELETE FROM documentos WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao excluir documento:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static updateById(db, id, updatedDocument, callback) {
    const sql =
      "UPDATE documentos SET status = ?, id_usuario = ?, id_animal = ?, motivo = ?, condicoes_lar = ?, outros_animais = ?, aceite_termo = ? WHERE id = ?";
    const values = [
      updatedDocument.status,
      updatedDocument.id_usuario,
      updatedDocument.id_animal,
      updatedDocument.motivo,
      updatedDocument.condicoes_lar,
      updatedDocument.outros_animais,
      updatedDocument.aceite_termo,
      id,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao atualizar documento:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
}

module.exports = Documento;
