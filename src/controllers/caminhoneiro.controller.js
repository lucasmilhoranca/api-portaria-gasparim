import caminhoneiroService from '../services/caminhoneiro.service.js';
import { createClient } from "redis";
import pessoaService from '../services/pessoa.service.js';

const clientRedis = createClient();

clientRedis.connect();

const createCaminhoneiro = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa } = req.body;

        if (!cpf || !nome || !sobrenome || !setor || !departamento || !tipo || !placa || !empresa) {
            res.status(400).send({ message: "Submit all filds for registration" });
        }

        const caminhoneiro = await caminhoneiroService.createCaminhoneiroService(req.body);

        if (!caminhoneiro) {
            return res.status(400).send({ message: "Error creating User" });
        }

        await clientRedis.del("getAllPessoas");

        res.status(201).send({
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
        });

    } catch (err) {
        res.status(500).send({ message: err.message });
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

export default { createCaminhoneiro, updateCaminhoneiro, deleteCaminhoneiro };