import caminhoneiro from "../models/pessoa.model.js";

const createCaminhoneiroService = (body) => caminhoneiro.create(body);

const updateCaminhoneiroService = (id, cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa) => caminhoneiro.findOneAndUpdate(
  { _id: id },
  { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa }
)

const deleteCaminhoneiroService = (id) => caminhoneiro.findOneAndDelete({ _id: id });

export default { createCaminhoneiroService, updateCaminhoneiroService, deleteCaminhoneiroService };