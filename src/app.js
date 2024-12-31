import express from 'express';

const app = express();
app.use(express.json()); // diz para a aplicação que os requests vem com body no formato json e que se forem, serao convertidos para json

const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
    },
    {
        id : 2,
        titulo: 'Harry Potter',
    }
];

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id); 
    });
}

function atualizaLivro(index, titulo) {
    livros[index].titulo = titulo;
}

app.get('/', (req, res) => {
    res.status(200).send('Curso de Express API');
});

app.get('/livros', (req, res) => { 
    res.status(200).json(livros);
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