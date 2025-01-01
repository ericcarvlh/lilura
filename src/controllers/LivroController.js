import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await livro.find({});

        res.status(200).json(listaLivros);
    }

    static async cadastraLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);

            res.status(201).json({message: "Livro incluído com sucesso!", livro: novoLivro});
        } catch (error) {
            res.status(500).json({message: `Erro ao incluir livro! Erro: ${error.message}`});
        }
    }

}

export default LivroController;