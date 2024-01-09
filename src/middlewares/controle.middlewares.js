import pessoaService from "../services/pessoa.service.js";
import controleService from "../services/controle.service.js";

export const activeCheckIn = async (req, res, next) => {
    try {
        const { cpf } = req.body;

        const pessoa = await pessoaService.findByCpfPessoaService(cpf);

        //console.log(pessoa);

        const checkin = await controleService.findOneService(pessoa[0]._id);

        //console.log(checkin);

        if (checkin) {
            return res.status(404).send({ message: "CheckIn already exists" });
        }

        next();
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const activeCheckOut = async (req, res, next) => {
    try {
        const { cpf } = req.body;

        const pessoa = await pessoaService.findByCpfPessoaService(cpf);

        //console.log(pessoa);

        const checkin = await controleService.findOneService(pessoa[0]._id);

        //console.log(checkin);

        if (!checkin) {
            return res.status(404).send({ message: "CheckIn does not exists" });
        }

        next();
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}