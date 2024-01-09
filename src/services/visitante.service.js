import visitante from "../models/pessoa.model.js";

const createVisitanteService = (body) => visitante.create(body);

const updateVisitanteService = (id, cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel) => visitante.findOneAndUpdate(
  { _id: id },
  { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel }
);

const deleteVisitanteService = (id) => visitante.findOneAndDelete({ _id: id });

export default { createVisitanteService, updateVisitanteService, deleteVisitanteService };