import {autor} from '../models/Autor.js';

const autorModel = autor;

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autorModel.find({});

            return res.status(200).json(listaAutores);
        } catch (error) {
            return res.status(500).json({message: `Erro ao listar autores! Erro: ${error.message}`});
        }
    }

    static async cadastraAutor(req, res) {
        try {
            const novoAutor = await autorModel.create(req.body);

            return res.status(201).json({message: "Autor incluído com sucesso!", autor: novoAutor});
        } catch (error) {
            return res.status(500).json({message: `Erro ao incluir autor! Erro: ${error.message}`});
        }
    }

    static async obtemAutorPorId(req, res) {
        try{
            const autor = await autorModel.findById(req.params.id);            
            
            if (autor != null)
                return res.status(200).json({"autor": autor});
            
            return res.status(404).json({message: "Autor não encontrado!"});
        } catch (error) {
            return res.status(500).json({message: `Erro ao obter autor! Erro: ${error.message}`});
        }
    }

    static async deletaAutor(req, res) {
        try {
            await autorModel.findByIdAndDelete(req.params.id);

            const autores = await autorModel.find({});

            return res.status(200).json({message: "Autor excluído com sucesso!", autores: autores});
        } catch (error) {
            return res.status(500).json({message: `Erro ao deletar autor! Erro: ${error.message}`});
        }
    }

    static async atualizaAutor(req, res) {
        try {
            await autorModel.findByIdAndUpdate(req.params.id, req.body);

            return res.status(200).json({message: "Autor atualizado com sucesso!"});
        } catch (error) {
            return res.status(500).json({message: `Erro ao atualizar autor! Erro: ${error.message}`});
        }
    }
}

export default AutorController;