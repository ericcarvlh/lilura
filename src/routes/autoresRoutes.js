import express from 'express';
import AutorController from '../controllers/AutorController.js';

// responsavel por lidar com as rotas
const routes = express.Router();

routes.get('/autores', AutorController.listarAutores);
routes.get('/autores/:id', AutorController.obtemAutorPorId);

routes.post('/autores', AutorController.cadastraAutor);

routes.put('/autores/:id', AutorController.atualizaAutor);

routes.delete("/autores/:id", AutorController.deletaAutor);

export default routes;