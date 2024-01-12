import visitante from "../models/pessoa.model.js";

const createVisitanteRepository = (body) => visitante.create(body);

const updateVisitanteRepository = (id, cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel) => visitante.findOneAndUpdate(
  { _id: id },
  { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel }
);
/*DECRAPTED*/
//const deleteVisitanteRepository = (id) => visitante.findOneAndDelete({ _id: id });

export default { createVisitanteRepository, updateVisitanteRepository };