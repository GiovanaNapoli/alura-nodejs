import mongoose from 'mongoose';
import BaseError from '../errors/BaseError.js';
import IncorrectRequest from '../errors/IncorrectRequest.js';
import ValidationError from '../errors/ValidationError.js';
import NotFound from '../errors/notFound.js';

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, request, response, next) => {
  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(response);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(response);
  } else if (error instanceof NotFound) {
    error.sendResponse(response);
  } else {
    new BaseError().sendResponse(response);
  }
};

export default errorHandler;
