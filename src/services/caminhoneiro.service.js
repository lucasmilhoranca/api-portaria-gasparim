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

const updateCaminhoneiro = async (req, res) => {
  try {
    const { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa } = req.body;

    if (!cpf && !nome && !sobrenome && !setor && !departamento && !tipo && !placa && !empresa) {
      res.status(400).send({ message: "Submit at least one fild for update" });
    }

    const id = req.params.id;

    await clientRedis.del("getAllPessoas");

    await caminhoneiroService.updateCaminhoneiroService(
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

    res.send({ message: "User succesfully update" });

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

/*DECRAPTED*/
/*
const deleteCaminhoneiro = async (req, res) => {
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

export default { createCaminhoneiroService, updateCaminhoneiro };