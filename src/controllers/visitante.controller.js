import visitanteService from "../services/visitante.service.js";

export default class VisitanteController {
    
    async createVisitanteController(req, res) {
        try {
            const { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel } = req.body;

            const visitante = await visitanteService.createVisitanteService({ cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel });

            res.status(201).send(visitante);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async updateVisitanteController(req, res) {
        try {
            const { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel } = req.body;

            const id = req.params.id;

            const updatedVisitante = await visitanteService.updateVisitanteService(
                id,
                cpf,
                nome,
                sobrenome,
                setor,
                departamento,
                tipo,
                pessoaResponsavel
            );

            res.send(updatedVisitante);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }
}

/*
const createVisitanteController = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel } = req.body;

        const visitante = await visitanteService.createVisitanteService({ cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel });

        res.status(201).send(visitante);

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
*/

/*
const updateVisitanteController = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, pessoaResponsavel } = req.body;

        const id = req.params.id;

        const updatedVisitante = await visitanteService.updateVisitanteService(
            id,
            cpf,
            nome,
            sobrenome,
            setor,
            departamento,
            tipo,
            pessoaResponsavel
        );

        res.send(updatedVisitante);


    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
*/

/*DECRAPTED*/
/*
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
*/

/*export default { createVisitanteController, updateVisitanteController }*/