import http from "http";

const PORT = 3000;

const routes = {
  "/": "Curso de Node.js",
  "/livros": "Rota de livros",
  "/autores": "Rota de autores",
};

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.end(routes[request.url]);
});

server.listen(PORT, () => {
  console.log("Servidor escutando");
});
