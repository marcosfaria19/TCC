// authMiddleare.js

const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("../../serviceAccount.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://tcc-pucrs-56af7-default-rtdb.firebaseio.com",
});

const verifyToken = async (req, res, next) => {
  const idToken = req.headers.authorization;
  try {
    if (!idToken) {
      throw new Error("Token não fornecido");
    }
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "Acesso não autorizado" });
  }
};

module.exports = verifyToken;
