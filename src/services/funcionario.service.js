import funcionario from "../models/pessoa.model.js";

const createFuncionarioService = (body) => funcionario.create(body);

const updateFuncionarioService = (id, cpf, nome, sobrenome, setor, departamento, tipo, cargo) => funcionario.findOneAndUpdate(
  { _id: id },
  { nome, sobrenome, cpf, setor, departamento, tipo, cargo }
);

const deleteFuncionarioService = (id) => funcionario.findOneAndDelete({ _id: id });

export default { createFuncionarioService, updateFuncionarioService, deleteFuncionarioService };