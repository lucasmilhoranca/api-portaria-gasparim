import controleRepository from "../repositorys/controle.repository.js";
import pessoaService from "../services/pessoa.service.js";

const checkInService = async (cpf) => {

    const user = await pessoaService.findByCpfPessoaService(cpf);

    //console.log(user);

    if (!user) throw new Error("CPF not found");

    const body = { pessoa: user._id, horarioEntrada: new Date().toLocaleTimeString(), horarioSaida: "" };

    const checkIn = await controleRepository.checkInRepository(body);

    if (!checkIn) throw new Error("CheckIn Error");

    return {
        checkIn,
        user
    };
}

const checkOutService = async (cpf) => {

    const user = await pessoaService.findByCpfPessoaService(cpf);

    if (!user) throw new Error("CPF not found");

    const checkIn = await controleRepository.findByIdPessoaRepositoryC(user._id);

    if (!checkIn) throw new Error("CheckIn not found");

    const checkOut = await controleRepository.checkOutRepository(checkIn[0]._id, new Date().toLocaleTimeString(), 0);

    return {
        message: "CheckOut OK",
        checkOut,
        user
    };
}

const findAllChecksService = async (offset, limit, currentUrl) => {

    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
        limit = 10;
    }

    if (!offset) {
        offset = 0;
    }

    const checkOuts = await controleRepository.findAllChecksRepository(offset, limit);

    const total = await controleRepository.countChecksRepository();

    const next = offset + limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    return {
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
    };
}

const lastCheckInService = async (req, res) => {

}

export default { checkInService, checkOutService, findAllChecksService };