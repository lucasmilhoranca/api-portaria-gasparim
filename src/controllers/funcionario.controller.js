import funcionarioSevice from "../services/funcionario.service.js";

export default class FuncionarioController {
    
    async createFuncionarioController(req, res) {
        try {
            const { cpf, nome, sobrenome, setor, departamento, tipo, cargo } = req.body;

            const funcionario = await funcionarioSevice.createFuncionarioService({ cpf, nome, sobrenome, setor, departamento, tipo, cargo });

            res.status(201).send(funcionario);
        } catch (err) {
            res.status(404).send({ message: err.message });
        } 
    }

    async updateFuncionarioController(req, res) {
        try {
            const { cpf, nome, sobrenome, setor, departamento, tipo, cargo } = req.body;

            const id = req.params.id;

            const updatedFuncionario = await funcionarioSevice.updateFuncionarioService(
                id,
                cpf,
                nome,
                sobrenome,
                setor,
                departamento,
                tipo,
                cargo
            );

            res.send(updatedFuncionario);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }
}

/*
const createFuncionarioController = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, cargo } = req.body;
        
        const funcionario = await funcionarioSevice.createFuncionarioService({ cpf, nome, sobrenome, setor, departamento, tipo, cargo });

        res.status(201).send(funcionario);

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}
*/

/*
const updateFuncionarioController = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, cargo } = req.body;

        const id = req.params.id;

        const updatedFuncionario = await funcionarioSevice.updateFuncionarioService(
            id,
            cpf,
            nome,
            sobrenome,
            setor,
            departamento,
            tipo,
            cargo
        );

        res.send(updatedFuncionario);

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
*/

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

/*export default { createFuncionarioController, updateFuncionarioController };*/