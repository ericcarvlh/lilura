import livroModel from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await livroModel.find({});

        return res.status(200).json(listaLivros);
    }

    static async cadastraLivro(req, res) {
        try {
            const novoLivro = await livroModel.create(req.body);

            return res.status(201).json({message: "Livro incluído com sucesso!", livro: novoLivro});
        } catch (error) {
            return res.status(500).json({message: `Erro ao incluir livro! Erro: ${error.message}`});
        }
    }

    static async obtemLivroPorId(req, res) {
        try{
            const livro = await livroModel.findById(req.params.id);            
            
            if (livro != null)
                return res.status(200).json({"livro": livro});
            
            return res.status(404).json({message: "Livro não encontrado!"});
        } catch (error) {
            return res.status(500).json({message: `Erro ao obter livro! Erro: ${error.message}`});
        }
    }

    static async deletaLivro(req, res) {
        try {
            await livroModel.deleteOne({_id: req.params.id});

            const livros = await livroModel.find({});

            return res.status(200).json({message: "Livro excluído com sucesso!", livros: livros});
        } catch (error) {
            return res.status(500).json({message: `Erro ao deletar livro! Erro: ${error.message}`});
        }
    }

    static async atualizaLivro(req, res) {
        try {
            await livroModel.updateOne({_id: req.params.id}, req.body);

            const livro = await livroModel.findById(req.params.id);

            return res.status(200).json({message: "Livro atualizado com sucesso!", livro: livro});
        } catch (error) {
            return res.status(500).json({message: `Erro ao atualizar livro! Erro: ${error.message}`});
        }
    }
}

export default LivroController;