import user from "../models/usuario.model.js";

const findOneUserRepository = (usuario) => user.findOne({ usuario: usuario }).select("+password");

export default { findOneUserRepository }