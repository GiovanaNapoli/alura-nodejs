import NotFound from '../errors/NotFound.js';
import { author } from '../models/Author.js';

export default class AuthorController {
  static getAllAuthors = async (request, response, next) => {
    try {
      const listAuthors = await author.find({});
      response.status(200).json({
        ok: true,
        author: listAuthors,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  static addAuthors = async (request, response, next) => {
    try {
      const newAuthor = await author.create(request.body);

      response.status(201).json({
        ok: true,
        message: 'Criado com sucesso',
        author: newAuthor,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  static getAuthorById = async (request, response, next) => {
    try {
      const id = request.params.id;
      const foundedAuthor = await author.findById(id);

      if (foundedAuthor) {
        response.status(200).json({
          ok: true,
          author: foundedAuthor,
        });
      } else {
        next(new NotFound('Id não localizado'));
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  static updateAuthor = async (request, response, next) => {
    try {
      const id = request.params.id;
      const result = await author.findByIdAndUpdate(id, request.body);

      if (result !== null) {
        response.status(200).json({
          ok: true,
          message: 'Autor atualizado',
        });
      } else {
        next(new NotFound('Id não localizado'));
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  static deleteAuthor = async (request, response, next) => {
    try {
      const id = request.params.id;
      const result = await author.findByIdAndDelete(id);
      if (result !== null) {
        response.status(200).json({
          ok: true,
          message: 'Autor deletado',
        });
      } else {
        next(new NotFound('Id não localizado'));
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}
