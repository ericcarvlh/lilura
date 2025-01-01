import express from 'express';
import MongodbConnect from './config/dbconnect.js';

const conexao = await MongodbConnect();
conexao.on("error", (erro) => {
    console.log(`Erro ao conectar ao MongoDB: ${erro}`);
});

// conexao realizada com sucesso
conexao.once("open", () => {
    console.log("Conexão com MongoDB realizada com sucesso!");
});

const app = express();
app.use(express.json()); // diz para a aplicação que os requests vem com body no formato json e que se forem, serao convertidos para json

app.get('/', (req, res) => {
    res.status(200).send('Curso de Express API');
});

app.post("/livros", (req, res) => {
    livros.push(req.body);

    res.status(201).json({"message": "Livro incluído com sucesso!"});
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index != -1)
        res.status(200).json(livros[index]);
    else 
        res.status(404).json({"message": "Livro não encontrado!"});
});

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