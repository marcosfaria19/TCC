require("dotenv").config();
const mysql = require("mysql");
const express = require("express");
const port = process.env.port || 3001;
const app = express();

const mysqlConfig = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
};

//const connection = mysql.createConnection(config);

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM users,", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`start listening ...${port}`);
});

app.get("/", (req, res) => {
  console.log("new featur");
});
