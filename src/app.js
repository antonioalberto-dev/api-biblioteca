import express from "express";

const app = express();

app.use(express.json()); // interpretar o que ta chegando (via POST e PUT) e convertendo para objeto

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

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

export default app;
