import controleService from "../services/controle.service.js";
import pessoaService from "../services/pessoa.service.js";

const checkInController = async (req, res) => {
    try {
        const { cpf } = req.body;

        const checkIn = await controleService.checkInService(cpf);

        res.status(201).send(checkIn);

    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
}

const checkOutController = async (req, res) => {
    try {
        const { cpf } = req.body;

        const checkOut = await controleService.checkOutService(cpf);

        res.send(checkOut);

    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

const findAllChecksController = async (req, res) => {
    try {
        const { limit, offset } = req.query;
        const currentUrl = req.baseUrl;

        const checkOuts = await controleService.findAllChecksService(offset, limit, currentUrl);

        return res.send(checkOuts);

    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
}

const findChecksByCpfController = async (req, res) => {
    try {
        const cpf = req.params.cpf;

        const pessoa = await pessoaService.findByCpfPessoaServiceError(cpf);

        const { id } = pessoa;

        const checksByPessoa = await controleService.findChecksByIdService(id);

        return res.send(checksByPessoa);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
}

const findStatusController = async (req, res) => {
    try {
        const cpf = req.params.cpf;

        const pessoa = await pessoaService.findByCpfPessoaServiceError(cpf);

        const { id } = pessoa;

        const checkStatus = await controleService.findCheckStatusService(id);

        return res.send(checkStatus);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
}

const ultimoCheckIn = async (req, res) => {

}

export default { checkInController, checkOutController, findAllChecksController, findChecksByCpfController, findStatusController };