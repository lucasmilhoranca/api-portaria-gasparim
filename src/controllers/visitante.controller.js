import visitanteService from "../services/visitante.service.js";
import { createClient } from "redis";
import pessoaService from "../services/pessoa.service.js";

const clientRedis = createClient();

clientRedis.connect();

const createVisitante = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel } = req.body;

        if (!cpf || !nome || !sobrenome || !setor || !departamento || !tipo || !pessoaResponsavel) {
            res.status(400).send({ message: "Submit all filds for registration" });
        }

        const visitante = await visitanteService.createVisitanteService(req.body);

        if (!visitante) {
            return res.status(400).send({ message: "Error creating User" });
        }

        await clientRedis.del("getAllPessoas");

        res.status(201).send({
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
        });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const updateVisitante = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel } = req.body;

        if (!cpf && !nome && !sobrenome && !setor && !departamento && !tipo && !pessoaResponsavel) {
            res.status(400).send({ message: "Submit at least one fild for update" });
        }

        const id = req.params.id;

        await visitanteService.updateVisitanteService(
            id,
            cpf,
            nome,
            sobrenome,
            setor,
            departamento,
            tipo,
            pessoaResponsavel
        );

        await clientRedis.del("getAllPessoas");

        res.send({ message: "User succesfully update" });


    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const deleteVisitante = async (req, res) => {
    try {
        const id = req.params.id;

        await pessoaService.deletePessoaServide(id);

        await clientRedis.del("getAllPessoas");

        res.send({ message: "User succesfully delete" });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default { createVisitante, updateVisitante, deleteVisitante }