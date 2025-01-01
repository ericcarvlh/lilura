import express from 'express';
import MongodbConnect from './config/dbconnect.js';
import routes from './routes/index.js';

const conexao = await MongodbConnect();

conexao.on("error", (erro) => {
    console.log(`Erro ao conectar ao MongoDB: ${erro}`);
});

// conexao realizada com sucesso
conexao.once("open", () => {
    console.log("Conexão com MongoDB realizada com sucesso!");
});

const app = express();
routes(app);

export default app;