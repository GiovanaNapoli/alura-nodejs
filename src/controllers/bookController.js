import { author } from '../models/Author.js';
import book from '../models/Book.js';

export default class BookController {
  static async getAllBooks(request, response) {
    try {
      const listBooks = await book.find({});
      response.status(200).json(listBooks);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao listar livros`,
      });
    }
  }

  static async addBooks(request, response) {
    const newBook = request.body;
    try {
      const foundedAuthor = await author.findById(newBook.author);
      const completedBook = { ...newBook, author: { ...foundedAuthor._doc } };

      await book.create(completedBook);

      response.status(201).json({
        message: 'Criado com sucesso',
        book: completedBook,
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao cadastrar livro`,
      });
    }
  }

  static async getBookById(request, response) {
    try {
      const id = request.params.id;
      const foundedBook = await book.findById(id);
      response.status(200).json(foundedBook);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao listar livro`,
      });
    }
  }

  static async updateBook(request, response) {
    const updateBook = request.body;
    const id = request.params.id;

    try {
      let completedBook = {};
      if (updateBook.author) {
        const foundedAuthor = await author.findById(updateBook.author);

        completedBook = {
          ...updateBook,
          author: { ...foundedAuthor._doc },
        };
      } else {
        completedBook = {
          ...updateBook,
        };
      }

      await book.findByIdAndUpdate(id, completedBook);
      response.status(200).json({
        message: 'Livro atualizado',
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao atualizar livro`,
      });
    }
  }

  static async deleteBook(request, response) {
    try {
      const id = request.params.id;
      await book.findByIdAndDelete(id);
      response.status(200).json({
        message: 'Livro deletado',
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao deletar livro`,
      });
    }
  }

  static async listBooksByPublishingCompany(request, response) {
    const publishingCompany = request.query.editora;
    try {
      const booksByPublishingCompany = await book.find({
        publishingCompany: publishingCompany,
      });

      response.status(200).json(booksByPublishingCompany);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao listar livros`,
      });
    }
  }
}
