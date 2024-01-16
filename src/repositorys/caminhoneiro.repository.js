import caminhoneiro from "../models/pessoa.model.js";

function createCaminhoneiroRepository(body) {
  return caminhoneiro.create(body);
}

function updateCaminhoneiroRepository(id, cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa) {
  return caminhoneiro.findOneAndUpdate(
    { _id: id },
    { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa }
  )
}

/*DECRAPTED*/
//const deleteCaminhoneiroRepository = (id) => caminhoneiro.findOneAndDelete({ _id: id });

export default { createCaminhoneiroRepository, updateCaminhoneiroRepository };