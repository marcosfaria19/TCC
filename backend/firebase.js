// Certifique-se de que o Firebase está inicializado antes de usar auth
/* const firebase = require("firebase/compat/app");
require("firebase/compat/auth");
require("dotenv").config();

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGEBUCKET,
    messagingSenderId: process.env.FB_MESSAGINGSENDERID,
    appId: process.env.FB_APPID,
  };

  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

module.exports = auth; */

const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tcc-pucrs-56af7-default-rtdb.firebaseio.com",
});

module.exports = admin;
