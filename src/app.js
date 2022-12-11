import express from "express";

import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

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

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(req.params.id);
  let livroExcluido = livros[index].titulo;
  livros.slice(index, 1);
  res.send(
    `O livro ${livroExcluido.toLocaleUpperCase()} removido com sucesso!`
  );
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
