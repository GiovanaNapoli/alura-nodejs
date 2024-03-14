import express from 'express';
import AuthorController from '../controllers/authorController.js';

const routes = express.Router();

routes.get('/autores', AuthorController.getAllAuthors);
routes.get('/autores/:id', AuthorController.getAuthorById);

routes.post('/autores', AuthorController.addAuthors);

routes.put('/autores/:id', AuthorController.updateAuthor);
routes.delete('/autores/:id', AuthorController.deleteAuthor);

export default routes;
