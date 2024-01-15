import controleService from "../services/controle.service.js";
import pessoaService from "../services/pessoa.service.js";

const checkInController = async (req, res) => {
    try {
        const { cpf } = req.body;

        const checkIn = await controleService.checkInService(cpf);

        res.status(201).send(checkIn);

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

const checkOutController = async (req, res) => {
    try {
        const { cpf } = req.body;

        const checkOut = await controleService.checkOutService(cpf);

        res.send(checkOut);

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

const findAllChecksController = async (req, res) => {
    try {
        const { limit, offset } = req.query;
        const currentUrl = req.baseUrl;

        const checkOuts = await controleService.findAllChecksService(offset, limit, currentUrl);

        return res.send(checkOuts);

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

const ultimoCheckIn = async (req, res) => {

}

export default { checkInController, checkOutController, findAllChecksController };