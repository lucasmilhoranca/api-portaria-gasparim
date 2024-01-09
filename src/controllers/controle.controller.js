import controleService from "../services/controle.service.js";
import pessoaService from "../services/pessoa.service.js";

const checkIn = async (req, res) => {
    try {
        const { cpf } = req.body;

        /* console.log(cpf);*/

        const user = await pessoaService.findByCpfPessoaService(cpf);

        /* console.log({user});*/

        if (!user) {
            return res.status(404).send({ message: "CPF not found" });
        }

        const body = { pessoa: user[0]._id, horarioEntrada: new Date().toLocaleTimeString(), horarioSaida: "" };

        const checkIn = await controleService.createCheckInService(body);

        if (!checkIn) {
            return res.status(404).send({ message: "CheckIn Error" })
        }

        res.status(201).send({ checkIn, user });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const checkOut = async (req, res) => {
    try {
        const { cpf } = req.body;

        //console.log(cpf);

        const user = await pessoaService.findByCpfPessoaService(cpf);

        // console.log({user});

        if (!user) {
            return res.status(404).send({ message: "CPF not found" });
        }

        const checkIn = await controleService.findByIdPessoaService(user[0]._id);

        // console.log({checkIn});

        if (!checkIn) {
            return res.status(404).send({ message: "CheckIn not found" });
        }

        await controleService.updateCheckOutService(checkIn[0]._id, new Date().toLocaleTimeString(), 0);

        res.send({ message: "CheckOut OK", user: user[0] });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findAll = async (req, res) => {
    try {

        let { limit, offset } = req.query;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset) {
            offset = 0;
        }

        const checkOuts = await controleService.findAllService(offset, limit);
        const total = await controleService.countChecksService();
        const currentUrl = req.baseUrl;

        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

        if (checkOuts.length === 0) {
            return res.status(404).send({ message: "There are not registred users" });
        }

        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: checkOuts.map(newsChecks => ({
                id: newsChecks._id,
                cpf: newsChecks.pessoa.cpf,
                nome: newsChecks.pessoa.nome,
                sobrenome: newsChecks.pessoa.sobrenome,
                tipo: newsChecks.pessoa.tipo,
                data: newsChecks.data,
                horarioEntrada: newsChecks.horarioEntrada,
                horarioSaida: newsChecks.horarioSaida,
                status: newsChecks.status,
            }))
        });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const ultimoCheckIn = async (req, res) => {
    
}

export default { checkIn, checkOut, findAll, ultimoCheckIn };