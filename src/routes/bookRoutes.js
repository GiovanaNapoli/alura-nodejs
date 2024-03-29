import express from 'express';
import BookController from '../controllers/bookController.js';

const routes = express.Router();

routes.get('/livros', BookController.getAllBooks);
routes.get('/livros/busca', BookController.listBooksByPublishingCompany);
routes.get('/livros/:id', BookController.getBookById);

routes.post('/livros', BookController.addBooks);

routes.put('/livros/:id', BookController.updateBook);
routes.delete('/livros/:id', BookController.deleteBook);

export default routes;
