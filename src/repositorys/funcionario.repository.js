import funcionario from "../models/pessoa.model.js";

function createFuncionarioRepository(body) {
  return funcionario.create(body);
}

function updateFuncionarioRepository(id, cpf, nome, sobrenome, setor, departamento, tipo, cargo) {
  return funcionario.findOneAndUpdate(
    { _id: id },
    { nome, sobrenome, cpf, setor, departamento, tipo, cargo }
  );
}

/*DECRAPTED*/
//const deleteFuncionarioRepository = (id) => funcionario.findOneAndDelete({ _id: id });

export default { createFuncionarioRepository, updateFuncionarioRepository };