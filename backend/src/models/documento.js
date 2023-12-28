class Documento {
  constructor(id_usuario, tipo) {
    this.id_usuario = id_usuario;
    this.tipo = tipo;
  }

  create(db, callback) {
    const sql = "INSERT INTO documentos (id_usuario, tipo) VALUES (?, ?)";
    const values = [this.id_usuario, this.tipo];

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
        console.error("Erro ao obter documentos:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
}

module.exports = Documento;
