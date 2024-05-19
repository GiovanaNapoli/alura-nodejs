import express from 'express';
import connectToDataBase from './config/dbConnect.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import error404Handler from './middlewares/error404Handler.js';

const connect = await connectToDataBase();

connect.connection.on('error', (error) => {
  console.error('Erro ao conectar ao banco de dados: ', error);
});

connect.connection.once('open', () => {
  console.log('Conexão feita com sucesso');
});

const app = express();
routes(app);

app.use(error404Handler);

app.use(errorHandler);

export default app;
