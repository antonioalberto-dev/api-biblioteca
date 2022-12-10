import express from "express";

const app = express();

const livros = [
  { id: 1, titulo: "Assassino da Capa Amarela" },
  { id: 2, titulo: "Zodiaco" },
];

app.get("/", (req, res) => {
  res.status(200).send("Biblioteca");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;
