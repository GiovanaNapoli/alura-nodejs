import express from "express";

const app = express();
app.use(express.json());

const livros = [
  { id: 1, titulo: "Os sete maridos de Evelyn Hugo" },
  { id: 2, titulo: "Rapido e devagar" },
];

app.get("/", (request, response) => {
  response.status(200).send("Curso de node.js");
});

app.get("/livros", (request, response) => {
  response.status(200).json(livros);
});

app.post("/livros", (request, response) => {
  livros.push(request.body);
  response.status(200).send("Livro cadastrado com sucesso!");
});

export default app;
