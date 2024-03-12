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
  response.status(201).send("Livro cadastrado com sucesso!");
});

app.get("/livros/:id", (request, response) => {
  const livro = getById(Number(request.params.id));
  response.status(200).json(livro);
});

app.put("/livros/:id", (request, response) => {
  const livro = getById(Number(request.params.id));
  livro.titulo = request.body.titulo;
  response.status(200).send(livros);
});

app.delete("/livros/:id", (request, response) => {
  livros.splice(
    livros.findIndex((l) => l.id === Number(request.params.id)),
    1
  );

  response.status(204).send("Livro removido com sucesso");
});

function getById(id) {
  return livros.find((l) => l.id === id);
}

export default app;
