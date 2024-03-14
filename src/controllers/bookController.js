import book from "../models/Book.js";

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
    try {
      const newBook = await book.create(request.body);

      response.status(201).json({
        message: "Criado com sucesso",
        book: newBook,
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
    try {
      const id = request.params.id;
      await book.findByIdAndUpdate(id, request.body);
      response.status(200).json({
        message: "Livro atualizado",
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
        message: "Livro deletado",
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao deletar livro`,
      });
    }
  }

  // static errorHandler (error, response, message) {
  //   console.error(error);
  //     response.status(500).json({
  //       message: `error: ${error.message} - ${message}`,
  //     });
  // }
}
