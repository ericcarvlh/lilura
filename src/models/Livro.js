import mongoose from "mongoose";

// cria o schema do livro
const LivroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId },
    titulo: {type: String, required: true },
    editora: {type: String },
    preco: {type: mongoose.Schema.Types.Double },
    paginas: {type: mongoose.Schema.Types.Int32 },
}, { versionKey: false });

// associa a coleção e o schema
const livro = mongoose.model("livros", LivroSchema);

export default livro;