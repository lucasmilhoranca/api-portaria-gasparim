import funcionarioRepository from "../repositorys/funcionario.repository.js";
import { createClient } from "redis";
import pessoaService from "./pessoa.service.js";

const clientRedis = createClient();

clientRedis.connect();

const createFuncionarioService = async ({ cpf, nome, sobrenome, setor, departamento, tipo, cargo }) => {

  if (!cpf || !nome || !sobrenome || !setor || !departamento || !tipo || !cargo) throw new Error("Submit all filds for registration");

  const user = await pessoaService.findByCpfPessoaService(cpf);

  if (user) throw new Error("User already exists");

  const body = { cpf, nome, sobrenome, setor, departamento, tipo, cargo }

  const funcionario = await funcionarioRepository.createFuncionarioRepository(body);

  if (!funcionario) throw new Error("Error creating User");

  await clientRedis.del("getAllPessoas");

  return {
    message: "User created successfully",
    funcionario: {
      id: funcionario._id,
      cpf: funcionario.cpf,
      nome: funcionario.nome,
      sobrenome: funcionario.sobrenome,
      setor: funcionario.setor,
      departamento: funcionario.departamento,
      tipo: funcionario.tipo,
      placa: funcionario.cargo,
    },
  };
};

const updateFuncionarioService = async (id, cpf, nome, sobrenome, setor, departamento, tipo, cargo) => {

  if (!cpf && !nome && !sobrenome && !setor && !departamento && !tipo && !cargo) throw new Error("Submit at least one fild for update");

  const updatedFuncionario = await funcionarioRepository.updateFuncionarioRepository(
    id,
    cpf,
    nome,
    sobrenome,
    setor,
    departamento,
    tipo,
    cargo
  );

  if (!updatedFuncionario) throw new Error("Error updating User");

  await clientRedis.del("getAllPessoas");

  return {
    message: "User succesfully update",
    updatedFuncionario
  };
}

/*DECRAPTED*/
/*
const deleteFuncionario = async (req, res) => {
  try {
    const id = req.params.id;

    await pessoaService.deletePessoaServide(id);

    await clientRedis.del("getAllPessoas");

    res.send({ message: "User succesfully delete" });

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
*/

export default { createFuncionarioService, updateFuncionarioService };