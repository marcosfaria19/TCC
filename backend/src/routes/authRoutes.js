// authRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../../firebase");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    res
      .status(200)
      .json({ message: "Logado com sucesso", user: userCredential.user });
  } catch (error) {
    res.status(400).json({ message: "Erro ao logar", error: error.message });
  }
});

router.post("/registro", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    res.status(200).json({
      message: "Cadastro realizado com sucesso",
      user: userCredential.user,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erro ao cadastrar", error: error.message });
  }
});

router.post("/logout", (req, res) => {
  auth
    .signOut()
    .then(() => {
      res.status(200).json({ message: "Deslogado com sucesso" });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: "Erro ao deslogar", error: error.message });
    });
});

module.exports = router;
