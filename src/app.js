import express from 'express';
import MongodbConnect from './config/dbconnect.js';
import livrosRoutes from './routes/livrosRoutes.js';

const conexao = await MongodbConnect();

conexao.on("error", (erro) => {
    console.log(`Erro ao conectar ao MongoDB: ${erro}`);
});

// conexao realizada com sucesso
conexao.once("open", () => {
    console.log("Conexão com MongoDB realizada com sucesso!");
});

const app = express();
app.use(livrosRoutes);

export default app;