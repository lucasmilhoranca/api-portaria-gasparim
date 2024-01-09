import user from "../models/usuario.model.js";
import jwt  from "jsonwebtoken";

const loginService = (usuario) => user.findOne({usuario: usuario}).select("+password");

const generateToken = (id) => jwt.sign({id: id,}, process.env.SECRET_JWT, {expiresIn: 86400});

export { loginService, generateToken };