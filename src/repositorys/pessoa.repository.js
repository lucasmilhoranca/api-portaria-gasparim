import Pessoa from "../models/pessoa.model.js";

function findAllPessoasRepository () {
    return Pessoa.find();
}

function findByIdPessoaRepositoryP (id) {
    return Pessoa.findById(id);
}

function findByCpfPessoaRepository (cpf) {
    return Pessoa.findOne({ "cpf": (cpf) });
}

function deletePessoaRepository (id) {
    return Pessoa.findOneAndDelete({ _id: id });
}

export default { findAllPessoasRepository, findByIdPessoaRepositoryP, findByCpfPessoaRepository, deletePessoaRepository };