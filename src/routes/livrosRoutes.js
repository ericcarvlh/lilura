import express from 'express';
import LivroController from '../controllers/livroController.js';

// responsavel por lidar com as rotas
const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/:id', LivroController.obtemLivroPorId);

routes.post('/livros', LivroController.cadastraLivro);

routes.put('/livros/:id', LivroController.atualizaLivro);

routes.delete("/livros/:id", LivroController.deletaLivro);

export default routes;