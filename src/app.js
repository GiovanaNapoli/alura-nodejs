import express from "express";
import connectToDataBase from "./config/dbConnect.js";
import book from "./models/Book.js";

const connect = await connectToDataBase();

connect.connection.on("error", (error) => {
  console.error("Erro ao conectar ao banco de dados: ", error);
});

connect.connection.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("Curso de node.js");
});

app.get("/livros", async (request, response) => {
  const listBooks = await book.find({});
  response.status(200).json(listBooks);
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

export default app;
