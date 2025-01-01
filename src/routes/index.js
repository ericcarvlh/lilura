import express from "express";
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Página Inicial!"));

    /* 
        1. Faz com que o express gerencie todas as rotas do livros de uma vez 
        2. define o middleware que faz com que o express entenda requisições no formato json
    */
    app.use(express.json(), livros, autores);
};

export default routes;