import express from "express";
import books from "./bookRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((request, response) => response.status(200).send("Curso de node.js"));

  app.use(express.json(), books, authors);
};

export default routes;
