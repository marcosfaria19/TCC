// animalModel.js
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
}

module.exports = Animal;
