import caminhoneiro from "../models/pessoa.model.js";

const createCaminhoneiroRepository = (body) => caminhoneiro.create(body);

const updateCaminhoneiroRepository = (id, cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa) => caminhoneiro.findOneAndUpdate(
  { _id: id },
  { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa }
)

/*DECRAPTED*/
//const deleteCaminhoneiroRepository = (id) => caminhoneiro.findOneAndDelete({ _id: id });

export default { createCaminhoneiroRepository, updateCaminhoneiroRepository };