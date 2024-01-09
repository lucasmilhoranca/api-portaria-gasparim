import funcionarioSevice from "../services/funcionario.service.js";
import { createClient } from "redis";
import pessoaService from "../services/pessoa.service.js";

const clientRedis = createClient();

clientRedis.connect();

const createFuncionario = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, cargo } = req.body;

        if (!cpf || !nome || !sobrenome || !setor || !departamento || !tipo || !cargo) {
            res.status(400).send({ message: "Submit all filds for registration" });
        }

        const funcionario = await funcionarioSevice.createFuncionarioService(req.body);

        if (!funcionario) {
            return res.status(400).send({ message: "Error creating User" });
        }

        await clientRedis.del("getAllPessoas");

        res.status(201).send({
            message: "User created successfully",
            funcionario: {
                id: funcionario._id,
                cpf: funcionario.cpf,
                nome: nome,
                sobrenome: funcionario.sobrenome,
                setor: funcionario.setor,
                departamento: funcionario.departamento,
                tipo: funcionario.tipo,
                cargo: funcionario.cargo,
            },
        });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const updateFuncionario = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, cargo } = req.body;

        if (!cpf && !nome && !sobrenome && !setor && !departamento && !tipo && !cargo) {
            res.status(400).send({ message: "Submit at least one fild for update" });
        }

        const id = req.params.id;

        await clientRedis.del("getAllPessoas");

        await funcionarioSevice.updateFuncionarioService(
            id,
            cpf,
            nome,
            sobrenome,
            setor,
            departamento,
            tipo,
            cargo
        );

        res.send({ message: "User succesfully update" });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

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

export default { createFuncionario, updateFuncionario, deleteFuncionario };