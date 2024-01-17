/* const User = require("../models/user");
const bcrypt = require("bcrypt");

async function register(req, res) {
  try {
    // Extrair dados do corpo da requisição
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email já cadastrado. Faça login." });
    }

    // Hash da senha
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Criar novo usuário
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no servidor." });
  }
}

async function login(req, res) {
  // Lógica de login será implementada na próxima interação
}

module.exports = {
  register,
  login,
};
 */
