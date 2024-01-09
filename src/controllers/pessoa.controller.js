import pessoaService from "../services/pessoa.service.js";
import { createClient } from "redis";

const clientRedis = createClient();

clientRedis.connect();

const findAll = async (req, res) => {
  try {
    const pessoasFromCache = await clientRedis.get('getAllPessoas');

    if (pessoasFromCache) {
      // console.log("Peguei do cache");
      return res.send(pessoasFromCache);
    }

    const pessoas = await pessoaService.findAllPessoaService();
    await clientRedis.set("getAllPessoas", JSON.stringify(pessoas));


    if (pessoas.length === 0) {
      return res.status(400).send({ message: "There are not registred users" });
    }

    // console.log("N peguei do cache");
    res.send(pessoas);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const findByIdPessoa = async (req, res) => {
  try {

    const pessoa = req.user;

    res.send(pessoa);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const deltePessoa = async (req, res) => {
  try {
    const id = req.params.id;

    await pessoaService.deletePessoaServide(id);

    await clientRedis.del(`getAllPessoas`);

    res.send({ message: "User succesfully delete" });

  } catch (err) {
    res.status(500).send({ message: err.message });
  }


}

export default { findAll, findByIdPessoa, deltePessoa };