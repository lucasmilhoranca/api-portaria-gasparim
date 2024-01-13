import caminhoneiroService from '../services/caminhoneiro.service.js';
import { createClient } from "redis";

const clientRedis = createClient();

clientRedis.connect();

const createCaminhoneiroController = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa } = req.body;

        const caminhoneiro = await caminhoneiroService.createCaminhoneiroService({ cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa });

        await clientRedis.del("getAllPessoas");

        res.status(201).send(caminhoneiro);

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
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

export default { createCaminhoneiroController, updateCaminhoneiro };