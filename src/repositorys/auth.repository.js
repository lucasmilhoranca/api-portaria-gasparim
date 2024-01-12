import user from "../models/usuario.model.js";

const findOneUserRepository = (usuario) => user.findOne({ usuario: usuario }).select("+password");

//const generateToken = (id) => jwt.sign({ id: id, }, process.env.SECRET_JWT, { expiresIn: 86400 });

export default { findOneUserRepository }