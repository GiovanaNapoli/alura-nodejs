import { author } from '../models/Author.js';
import book from '../models/Book.js';
import NotFound from '../errors/NotFound.js';

export default class BookController {
  static getAllBooks = async (request, response, next) => {
    try {
      const listBooks = await book.find({}).populate('author').exec();
      response.status(200).json(listBooks);
    } catch (error) {
      next(error);
    }
  };

  static addBooks = async (request, response, next) => {
    const newBook = request.body;
    try {
      let completedBook;
      const foundedAuthor = await author.findById(newBook.author);
      if (foundedAuthor) {
        completedBook = { ...newBook, author: { ...foundedAuthor._doc } };

        await book.create(completedBook);

        response.status(201).json({
          message: 'Criado com sucesso',
          book: completedBook,
        });
      } else {
        next(new NotFound('Id do autor não localizado'));
      }
    } catch (error) {
      next(error);
    }
  };

  static getBookById = async (request, response, next) => {
    try {
      const id = request.params.id;
      const foundedBook = await book.findById(id);

      if (foundedBook) {
        response.status(200).json(foundedBook);
      } else {
        next(new NotFound('Id  não localizado'));
      }
    } catch (error) {
      next(error);
    }
  };

  static updateBook = async (request, response, next) => {
    const updateBook = request.body;
    const id = request.params.id;

    try {
      let completedBook = {};
      if (updateBook.author) {
        const foundedAuthor = await author.findById(updateBook.author);

        if (foundedAuthor) {
          completedBook = {
            ...updateBook,
            author: { ...foundedAuthor._doc },
          };
        } else {
          next(new NotFound('Id do autor não localizado'));
        }
      } else {
        completedBook = {
          ...updateBook,
        };
      }

      const updatedBook = await book.findByIdAndUpdate(id, completedBook);
      if (updatedBook) {
        response.status(200).json({
          message: 'Livro atualizado',
        });
      } else {
        next(new NotFound('Id  não localizado'));
      }
    } catch (error) {
      next(error);
    }
  };

  static deleteBook = async (request, response, next) => {
    try {
      const id = request.params.id;
      const deleteBook = await book.findByIdAndDelete(id);
      if (deleteBook) {
        response.status(200).json({
          message: 'Livro deletado',
        });
      } else {
        next(new NotFound('Id  não localizado'));
      }
    } catch (error) {
      next(error);
    }
  };

  static listBooksByPublishingCompany = async (request, response, next) => {
    const publishingCompany = request.query.editora;
    try {
      const booksByPublishingCompany = await book.find({
        publishingCompany: publishingCompany,
      });

      response.status(200).json(booksByPublishingCompany);
    } catch (error) {
      next(error);
    }
  };
}
