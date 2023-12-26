class Adocao {
  constructor(id_usuario, id_animal, data_adocao) {
    this.id_usuario = id_usuario;
    this.id_animal = id_animal;
    this.data_adocao = data_adocao;
  }

  create(db, callback) {
    const sql =
      "INSERT INTO adocoes (id_usuario, id_animal, data_adocao) VALUES (?, ?, ?)";
    const values = [this.id_usuario, this.id_animal, this.data_adocao];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao criar adoção:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static getAll(db, callback) {
    const sql = "SELECT * FROM adocoes";
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Erro ao obter lista de adoções:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static getById(db, id, callback) {
    const sql = "SELECT * FROM adocoes WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao obter adoção por ID:", err);
        callback(err, null);
      } else {
        callback(null, result[0]);
      }
    });
  }

  static updateById(db, id, updatedAdocao, callback) {
    const sql =
      "UPDATE adocoes SET id_usuario = ?, id_animal = ?, data_adocao = ? WHERE id = ?";
    const values = [
      updatedAdocao.id_usuario,
      updatedAdocao.id_animal,
      updatedAdocao.data_adocao,
      id,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao atualizar usuário:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static deleteById(db, id, callback) {
    const sql = "DELETE FROM adocoes WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao excluir adoção:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
}

module.exports = Adocao;
