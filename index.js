const pool = require("./db");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/users", async (req, res) => {
  const users = await pool.query("select * from users");
  res.json(users.rows);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is starting on port " + PORT);
});
