import "dotenv/config";
import express, { response } from "express";
import { connectDb } from "./config/db.js";
import User from "./models/User.js";

const app = express();
const { PORT, MONGO_URL } = process.env;

app.get("/users", async (request, response) => {
  connectDb();

  const userDoc = await User.find();

  response.json(userDoc);
});

app.get("/", async (request, response) => {
  connectDb();

  response.json("Olá, mundo!");
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
