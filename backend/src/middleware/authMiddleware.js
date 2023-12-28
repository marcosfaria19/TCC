/* // authMiddleware.js

// Verificar se o usuario está autenticado

const firebase = require("firebase/compat/auth");

const verificarAutenticacao = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split(" ")[1];
    const decodedToken = await firebase.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: "Não autorizado" });
  }
};

module.exports = verificarAutenticacao;
 */

const admin = require("../../firebase");

const authenticate = (req, res, next) => {
  const idToken = req.headers.authorization;

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      res.status(401).json({ error: "Token inválido", details: error });
    });
};

module.exports = authenticate;
