import caminhoneiroService from '../services/caminhoneiro.service.js';

const createCaminhoneiroController = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa } = req.body;

        const caminhoneiro = await caminhoneiroService.createCaminhoneiroService({ cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa });

        res.status(201).send(caminhoneiro);

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};

const updateCaminhoneiroController = async (req, res) => {
    try {
        const { cpf, nome, sobrenome, setor, departamento, tipo, placa, empresa } = req.body;

        const id = req.params.id;

        const updatedCaminhoneiro = await caminhoneiroService.updateCaminhoneiroService(
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

        res.status(201).send(updatedCaminhoneiro);

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}


/*DECRAPTED*/
/*
const deleteCaminhoneiro = async (req, res) => {
    try {
        const id = req.params.id;

        await pessoaService.deletePessoaServide(id);

        res.send({ message: "User succesfully delete" });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
*/

export default { createCaminhoneiroController, updateCaminhoneiroController };