import IncorrectRequest from './IncorrectRequest.js';

class ValidationError extends IncorrectRequest {
  constructor(error) {
    const messageError = Object.values(error.errors)
      .map((error) => error.message)
      .join('; ');
    super(`Os seguintes erros foram encontrados: ${messageError}`);
  }
}

export default ValidationError;
