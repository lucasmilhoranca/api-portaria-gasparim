import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
        unique: true,
    },

    nome: {
        type: String,
        required: true,
    },

    sobrenome: {
        type: String,
        required: true,
    },

    setor: {
        type: String,
        required: true,
    },

    departamento: {
        type: String,
        required: true,
    },

    tipo: {
        type: String,
        required: true,
    },

    cargo: {
        type: String,
    },

    placa: {
        type: String,
    },

    empresa: {
        type: String,
    },

    pessoaResponsavel: {
        type: String,
    }
}, {collection: 'pessoas'});

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

export default  Pessoa;