import express from 'express';
import LivroController from '../controllers/livroController.js';

// responsavel por lidar com as rotas
const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);



export default routes;