import visitanteRepository from "../repositorys/visitante.repository.js";
import { createClient } from "redis";
import pessoaService from "../services/pessoa.service.js";

const clientRedis = createClient();

clientRedis.connect();

const createVisitanteService = async ({ cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel }) => {

  if (!cpf || !nome || !sobrenome || !setor || !departamento || !tipo || !pessoaResponsavel) throw new Error("Submit all filds for registration");

  const user = await pessoaService.findByCpfPessoaService(cpf);

  if (user) throw new Error("User already exists");

  const body = { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel }

  const visitante = await visitanteRepository.createVisitanteRepository(body);

  if (!visitante) throw new Error("Error creating User");

  await clientRedis.del("getAllPessoas");

  return {
    message: "User created successfully",
    visitante: {
      id: visitante._id,
      cpf: visitante.cpf,
      nome: visitante.nome,
      sobrenome: visitante.sobrenome,
      setor: visitante.setor,
      departamento: visitante.departamento,
      tipo: visitante.tipo,
      pessoaResponsavel: visitante.pessoaResponsavel,
    },
  };
}

const updateVisitanteService = async (id, cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel) => {

  if (!cpf && !nome && !sobrenome && !setor && !departamento && !tipo && !pessoaResponsavel) throw new Error("Submit at least one fild for update");

  const updatedVisitante = await visitanteRepository.updateVisitanteRepository(
    id,
    cpf,
    nome,
    sobrenome,
    setor,
    departamento,
    tipo,
    pessoaResponsavel
  );

  if (!updatedVisitante) throw new Error("Error updating User");

  await clientRedis.del("getAllPessoas");

  return {
    message: "User succesfully update",
    visitante: updatedVisitante
  };
}

export default { createVisitanteService, updateVisitanteService }