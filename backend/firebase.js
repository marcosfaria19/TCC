// firebase.js
const firebase = require("firebase/compat/app");
require("firebase/compat/auth");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

module.exports = auth;
