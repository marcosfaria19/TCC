// animal.js

class Animal {
  constructor(nome, categoria, idade, genero, personalidade, saude) {
    this.nome = nome;
    this.categoria = categoria;
    this.idade = idade;
    this.genero = genero;
    this.personalidade = personalidade;
    this.saude = saude;
  }

  create(db, callback) {
    const sql =
      "INSERT INTO animais (nome, categoria, idade, genero, personalidade, saude) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      this.nome,
      this.categoria,
      this.idade,
      this.genero,
      this.personalidade,
      JSON.stringify(this.saude),
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao criar animal:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static getById(db, id, callback) {
    const sql = "SELECT * FROM animais WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao obter animal por ID:", err);
        callback(err, null);
      } else {
        callback(null, result[0]);
      }
    });
  }

  static getAll(db, callback) {
    const sql = "SELECT * FROM animais";
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Erro ao obter animais:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static updateById(db, id, updatedAnimal, callback) {
    const sql =
      "UPDATE animais SET nome = ?, categoria = ?, idade = ?, genero = ?, personalidade = ?, saude = ? WHERE id = ?";
    const values = [
      updatedAnimal.nome,
      updatedAnimal.categoria,
      updatedAnimal.idade,
      updatedAnimal.genero,
      updatedAnimal.personalidade,
      JSON.stringify(updatedAnimal.saude),
      id,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao atualizar animal:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static deleteById(db, id, callback) {
    const sql = "DELETE FROM animais WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao excluir animal:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
}

module.exports = Animal;
