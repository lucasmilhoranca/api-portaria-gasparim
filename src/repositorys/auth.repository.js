import user from "../models/usuario.model.js";
import jwt  from "jsonwebtoken";

const loginRepository = (usuario) => user.findOne({usuario: usuario}).select("+password");

const generateToken = (id) => jwt.sign({id: id,}, process.env.SECRET_JWT, {expiresIn: 86400});

export default { loginRepository };