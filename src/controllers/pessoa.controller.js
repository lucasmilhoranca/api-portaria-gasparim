import pessoaService from "../services/pessoa.service.js";
import { createClient } from "redis";

const clientRedis = createClient();

clientRedis.connect();

const findAllPessoasController = async (req, res) => {
    try {
        const pessoas = await pessoaService.findAllPessoasService();
        return res.send(pessoas);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

const findByIdPessoaController = async (req, res) => {
    try {
        const pessoa = await pessoaService.findByIdPessoaService(req.params.id);

        return res.send(pessoa);

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

const deltePessoaController = async (req, res) => {
    try {
        const id = req.params.id;

        const message = await pessoaService.deltePessoaService(id);

        res.send(message);

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default { findAllPessoasController, findByIdPessoaController, deltePessoaController };