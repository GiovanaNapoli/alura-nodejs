import express from "express";
import connectToDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectToDataBase();

connect.connection.on("error", (error) => {
  console.error("Erro ao conectar ao banco de dados: ", error);
});

connect.connection.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();
routes(app);

export default app;
