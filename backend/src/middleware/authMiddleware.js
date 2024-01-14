// authMiddleware.js

const admin = require("../../firebase");

const authenticate = async (req, res, next) => {
  const idToken = req.headers.authorization;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.uid = decodedToken.uid; // Adiciona o ID do usuário ao objeto de solicitação (req)
    next(); // Avança para a próxima rota
  } catch (error) {
    console.error("Erro na verificação do token:", error);
    res.status(401).json({ error: "Acesso não autorizado" });
  }
};

module.exports = authenticate;
