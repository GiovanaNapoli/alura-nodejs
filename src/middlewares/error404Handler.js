import NotFound from '../errors/notFound.js';

function error404Handler(request, response, next) {
  const error404 = new NotFound();

  next(error404);
}

export default error404Handler;
