import caminhoneiroRepository from "../repositorys/caminhoneiro.repository.js";
import { createClient } from "redis";
import pessoaService from "./pessoa.service.js";

const clientRedis = createClient();

clientRedis.connect();

const createCaminhoneiroService = async ({ cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa }) => {

  if (!cpf || !nome || !sobrenome || !setor || !departamento || !tipo || !placa || !empresa) throw new Error("Submit all filds for registration");

  const user = await pessoaService.findByCpfPessoaService(cpf);

  if (user) throw new Error("User already exists");

  const body = { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa }

  const caminhoneiro = await caminhoneiroRepository.createCaminhoneiroRepository(body);

  if (!caminhoneiro) throw new Error("Error creating User");

  await clientRedis.del("getAllPessoas");

  return {
    message: "User created successfully",
    caminhoneiro: {
      id: caminhoneiro._id,
      cpf: caminhoneiro.cpf,
      nome: caminhoneiro.nome,
      sobrenome: caminhoneiro.sobrenome,
      setor: caminhoneiro.setor,
      departamento: caminhoneiro.departamento,
      tipo: caminhoneiro.tipo,
      placa: caminhoneiro.placa,
      empresa: caminhoneiro.empresa,
    },
  };
};

const updateCaminhoneiroService = async (id, cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa ) => {

  if (!cpf && !nome && !sobrenome && !setor && !departamento && !tipo && !placa && !empresa) throw new Error("Submit at least one fild for update");

  const updatedCaminhoneiro = await caminhoneiroRepository.updateCaminhoneiroRepository(
    id,
    cpf,
    nome,
    sobrenome,
    setor,
    departamento,
    tipo,
    placa,
    empresa
  );

  if (!updatedCaminhoneiro) throw new Error("Error updating User");

  await clientRedis.del("getAllPessoas");

  return {
    message: "User succesfully update",
    updatedCaminhoneiro
  };
}

export default { createCaminhoneiroService, updateCaminhoneiroService };