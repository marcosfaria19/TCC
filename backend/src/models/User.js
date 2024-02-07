// usuario.js
class User {
  constructor(nome, email, senha, cpf, telefone, endereco, idade) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
    this.idade = idade;
  }

  create(db, callback) {
    const sql =
      "INSERT INTO usuarios (nome, email, senha, cpf, telefone, endereco, idade) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      this.nome,
      this.email,
      this.senha,
      this.cpf,
      this.telefone,
      this.endereco,
      this.idade,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao criar usuário:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static getAll(db, callback) {
    const sql = "SELECT * FROM usuarios";

    db.query(sql, (err, result) => {
      if (err) {
        console.error("Erro ao obter usuários:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  static getById(db, id, callback) {
    const sql = "SELECT * FROM usuarios WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao obter usuário por ID:", err);
        callback(err, null);
      } else {
        callback(null, result[0]); // Retorna o primeiro usuário encontrado
      }
    });
  }

  static updateById(db, id, updatedUser, callback) {
    const sql =
      "UPDATE usuarios SET nome = ?, email = ?, senha = ?, cpf = ?, telefone = ?, endereco = ?, idade = ? WHERE id = ?";
    const values = [
      updatedUser.nome,
      updatedUser.email,
      updatedUser.senha,
      updatedUser.cpf,
      updatedUser.telefone,
      updatedUser.endereco,
      updatedUser.idade,
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
    const sql = "DELETE FROM usuarios WHERE id = ?";
    const values = [id];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao excluir usuário:", err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  /*  // capacidade de fazer login

  static getByEmailAndPassword(db, email, senha, callback) {
    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
    const values = [email, senha];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao obter usuário por e-mail e senha:", err);
        callback(err, null);
      } else {
        callback(null, result[0]); // Retorna o primeiro usuário encontrado
      }
    });
  } */

  // get by email
  static getByEmail(db, email, callback) {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    const values = [email];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao obter usuário por e-mail:", err);
        callback(err, null);
      } else {
        callback(null, result[0]);
      }
    });
  }
}

module.exports = User;
