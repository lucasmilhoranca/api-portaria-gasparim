import Controle from "../models/controle.model.js";

const createCheckInService = (body) => Controle.create(body);

const updateCheckOutService = (id, horarioSaida, status) => Controle.findOneAndUpdate(
    { _id: id },
    { horarioSaida, status }
);

const findAllService = (offset, limit) => Controle.find().sort({_id: -1}).skip(offset).limit(limit).populate("pessoa");

const findOneService = (id) => Controle.findOne({
    pessoa: id,
    status: 1
})

const findByIdPessoaService = (id) => Controle.find({ "pessoa": id, "status": 1 });

const findByStatusTrue = () => Controle.find({ "status": 1 });

const findByStatusFalse = () => Controle.find({ "status": 0 });

const countChecksService = () => Controle.countDocuments();

const lasCheckInService = () => Controle.findOne();

export default { createCheckInService, updateCheckOutService, findAllService, findOneService, findByIdPessoaService, findByStatusTrue, findByStatusFalse, countChecksService };