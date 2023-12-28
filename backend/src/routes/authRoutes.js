/* // authRoutes.js
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

router.get("/user", async (req, res) => {
  try {
    const user = await auth.currentUser;
    if (user) {
      res.status(200).json({ id: user.uid, email: user.email });
    } else {
      res.status(401).json({ error: "Nenhum usuário logado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
 */

const express = require("express");
const router = express.Router();
const admin = require("../../firebase");

// Rota para registrar um novo usuário
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  admin
    .auth()
    .createUser({
      email,
      password,
    })
    .then((userRecord) => {
      res
        .status(201)
        .json({
          message: "Usuário registrado com sucesso",
          user: userRecord.toJSON(),
        });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Erro ao registrar usuário", details: error });
    });
});

// Rota para fazer login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  admin
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      res
        .status(200)
        .json({ message: "Login bem-sucedido", user: user.toJSON() });
    })
    .catch((error) => {
      res.status(401).json({ error: "Credenciais inválidas", details: error });
    });
});

// Rota para fazer logout
router.post("/logout", (req, res) => {
  admin
    .auth()
    .signOut()
    .then(() => {
      res.status(200).json({ message: "Logout bem-sucedido" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Erro ao fazer logout", details: error });
    });
});

module.exports = router;
