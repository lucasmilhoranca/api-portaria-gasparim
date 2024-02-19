import Controle from "../models/controle.model.js";

const checkInRepository = (body) => Controle.create(body);

const checkOutRepository = (id, horarioSaida, status) => Controle.findOneAndUpdate(
    { _id: id },
    { horarioSaida, status }
);

const findAllChecksRepository = (offset, limit) => Controle.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("pessoa");

const findOneCheckRepository = (id) => Controle.findOne({
    pessoa: id,
    status: 1
})

const findByIdPessoaRepositoryC = (id) => Controle.find({ "pessoa": id, "status": 1 });

const findChecksByIdPessoaRepository = (id) => Controle.find({ "pessoa": id }).sort({ _id: -1 }).populate("pessoa");

const findByStatusTrueRepository = () => Controle.find({ "status": 1 });

const findByStatusFalseRepository = () => Controle.find({ "status": 0 });

const countChecksRepository = () => Controle.countDocuments();

export default { checkInRepository, checkOutRepository, findAllChecksRepository, findOneCheckRepository, findByIdPessoaRepositoryC, findChecksByIdPessoaRepository, findByStatusTrueRepository, findByStatusFalseRepository, countChecksRepository };