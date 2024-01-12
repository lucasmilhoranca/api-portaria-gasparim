import bcrypt from 'bcrypt';
import authRepository from "../repositorys/auth.repository.js";
import jwt from "jsonwebtoken";

function generateToken(id) {
    return jwt.sign({ id: id, }, process.env.SECRET_JWT, { expiresIn: 86400 });
}

const loginService = async ({usuario, password}) => {

        const user = await authRepository.findOneUserRepository(usuario);

        if (!user) throw new Error("Wrong user or password");

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) throw new Error("Wrong user or password");

        const token = generateToken(user.id);

        return token;
}

export { loginService, generateToken };