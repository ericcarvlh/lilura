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

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index != -1) {
        atualizaLivro(index, req.body.titulo);
        res.status(200).json({"livro": livros[index], "message": "Livro atualizado com sucesso!"});
    } else
        res.status(404).json({"message": "Livro não encontrado!"});
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index != -1) {
        livros.splice(index, 1);
        return res.status(200).json({"message": "Livro excluído com sucesso!", "livros": livros});
    } else 
        res.status(404).json({"message": "Livro não encontrado!"});
});

export default app;