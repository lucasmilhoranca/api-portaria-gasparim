import Pessoa from "../models/pessoa.model.js";

const findAllPessoasRepository = () => Pessoa.find();

const findByIdPessoaRepositoryP = (id) => Pessoa.findById(id);

const findByCpfPessoaRepository = (cpf) => Pessoa.find({ "cpf": (cpf) });

const deletePessoaRepository = (id) => Pessoa.findOneAndDelete({ _id: id });

export default { findAllPessoasRepository, findByIdPessoaRepositoryP, findByCpfPessoaRepository, deletePessoaRepository };