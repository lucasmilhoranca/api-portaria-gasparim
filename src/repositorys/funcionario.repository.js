import funcionario from "../models/pessoa.model.js";

const createFuncionarioRepository = (body) => funcionario.create(body);

const updateFuncionarioRepository = (id, cpf, nome, sobrenome, setor, departamento, tipo, cargo) => funcionario.findOneAndUpdate(
  { _id: id },
  { nome, sobrenome, cpf, setor, departamento, tipo, cargo }
);

/*DECRAPTED*/
//const deleteFuncionarioRepository = (id) => funcionario.findOneAndDelete({ _id: id });

export default { createFuncionarioRepository, updateFuncionarioRepository };