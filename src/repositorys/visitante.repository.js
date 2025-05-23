import visitante from "../models/pessoa.model.js";

function createVisitanteRepository(body) {
  return visitante.create(body);
}

function updateVisitanteRepository(id, cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel) {
  return visitante.findOneAndUpdate(
    { _id: id },
    { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel }
  )
}

export default { createVisitanteRepository, updateVisitanteRepository };