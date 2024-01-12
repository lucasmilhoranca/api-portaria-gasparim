import Usuario from "../models/usuario.model.js";

const createUsuarioRepository = (body) => Usuario.create(body);

const findAllUsuariosRepository = () => Usuario.find();

const findByIdUsuariosRepository = (id) => Usuario.findById(id);

const updateUsuarioRepository = (id, usuario, password) => Usuario.findByIdAndUpdate(
    { _id: id },
    { usuario, password }
);

const deleteUsuarioRepository = (id) => Usuario.findOneAndDelete({ _id: id });

export default { createUsuarioRepository, findAllUsuariosRepository, findByIdUsuariosRepository, updateUsuarioRepository, deleteUsuarioRepository };