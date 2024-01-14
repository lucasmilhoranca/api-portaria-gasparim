import Usuario from "../models/usuario.model.js";

const createUsuarioRepository = (body) => Usuario.create(body);

const findAllUsuariosRepository = () => Usuario.find();

const findByIdUserRepository = (id) => Usuario.findById(id);

const findByUserRepository = (usuario) => Usuario.findOne({ "usuario": usuario });

const updateUsuarioRepository = (id, usuario, password) => Usuario.findByIdAndUpdate(
    { _id: id },
    { usuario, password }
);

const deleteUsuarioRepository = (id) => Usuario.findOneAndDelete({ _id: id });

export default { createUsuarioRepository, findAllUsuariosRepository, findByIdUserRepository, findByUserRepository, updateUsuarioRepository, deleteUsuarioRepository };