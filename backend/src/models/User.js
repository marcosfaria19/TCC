// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  telefone: String,
  endereco: String,
  idade: Number,
  // Adicione outros campos conforme necessário
});

const User = mongoose.model("User", userSchema);

module.exports = User;
