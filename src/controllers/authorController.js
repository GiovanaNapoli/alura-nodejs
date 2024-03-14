import { author } from '../models/Author.js';

export default class AuthorController {
  static async getAllAuthors(request, response) {
    try {
      const listAuthors = await author.find({});
      response.status(200).json(listAuthors);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao listar autores`,
      });
    }
  }

  static async addAuthors(request, response) {
    try {
      const newAuthor = await author.create(request.body);

      response.status(201).json({
        message: 'Criado com sucesso',
        author: newAuthor,
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao cadastrar autor`,
      });
    }
  }

  static async getAuthorById(request, response) {
    try {
      const id = request.params.id;
      const foundedAuthor = await author.findById(id);
      response.status(200).json(foundedAuthor);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao listar autor`,
      });
    }
  }

  static async updateAuthor(request, response) {
    try {
      const id = request.params.id;
      await author.findByIdAndUpdate(id, request.body);
      response.status(200).json({
        message: 'Autor atualizado',
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao atualizar autor`,
      });
    }
  }

  static async deleteAuthor(request, response) {
    try {
      const id = request.params.id;
      await author.findByIdAndDelete(id);
      response.status(200).json({
        message: 'Autor deletado',
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: `error: ${error.message} - falha ao deletar autor`,
      });
    }
  }
}
