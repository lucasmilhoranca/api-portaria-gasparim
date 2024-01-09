import Pessoa from "../models/pessoa.model.js";

const findAllPessoaService = () => Pessoa.find();

const findByIdPessoaService = (id) => Pessoa.findById(id);

const findByCpfPessoaService = (cpf) => Pessoa.find({ "cpf": (cpf) });

const deletePessoaServide = (id) => Pessoa.findOneAndDelete({ _id: id });

export default { findAllPessoaService, findByIdPessoaService, findByCpfPessoaService, deletePessoaServide };