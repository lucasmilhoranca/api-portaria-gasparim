import Usuario from "../models/usuario.model.js";

const createUsuarioService = (body) => Usuario.create(body);

const findAllUsuariosService = () => Usuario.find();

const findByIdUsuariosService = (id) => Usuario.findById(id);

const updateUsuarioService = (id, usuario, password) => Usuario.findByIdAndUpdate(
    { _id: id },
    { usuario, password }
);

const deleteUsuarioService = (id) => Usuario.findOneAndDelete({ _id: id });

export default { createUsuarioService, findAllUsuariosService, findByIdUsuariosService, updateUsuarioService, deleteUsuarioService };