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

export default app;