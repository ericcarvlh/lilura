import mongoose from "mongoose";

// cria o schema do autor
const AutorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, required: true },
    nacionalidade: {type: String },
    email: {type: String },
    telefone: {type: String },
}, { versionKey: false });

const autor = mongoose.model("autores", AutorSchema);

export { autor, AutorSchema };