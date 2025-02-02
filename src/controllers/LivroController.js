import livroModel from "../models/Livro.js";
import {autor} from "../models/Autor.js";

const autorModel = autor;

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livroModel.find({});

            return res.status(200).json(listaLivros);
        } catch (error) {
            return res.status(500).json({message: `Erro ao listar livros! Erro: ${error.message}`});
        }
    }

    static async cadastraLivro(req, res) {
        const requestBody = req.body;

        try {
            const autorEncontrado = await autorModel.findById(requestBody.autor);

            const livroCompleto = {...requestBody, autor: { ...autorEncontrado._doc }};

            const livroCadastrado = await livroModel.create(livroCompleto);

            return res.status(201).json({message: "Livro incluído com sucesso!", livro: livroCadastrado});
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
            await livroModel.findByIdAndDelete(req.params.id);

            const livros = await livroModel.find({});

            return res.status(200).json({message: "Livro excluído com sucesso!", livros: livros});
        } catch (error) {
            return res.status(500).json({message: `Erro ao deletar livro! Erro: ${error.message}`});
        }
    }

    static async atualizaLivro(req, res) {
        try {
            await livroModel.findByIdAndUpdate(req.params.id, req.body);

            return res.status(200).json({message: "Livro atualizado com sucesso!"});
        } catch (error) {
            return res.status(500).json({message: `Erro ao atualizar livro! Erro: ${error.message}`});
        }
    }

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;

        try {
            const livrosPorEditora = await livroModel.find({ editora: editora });      
            
            res.status(200).json({livros: livrosPorEditora});
        } catch (error) {
            return res.status(500).json({message: `Erro ao listar livros por editora! Erro: ${error.message}`});
        }
    }
}

export default LivroController;