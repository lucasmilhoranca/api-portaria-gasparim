import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import usuarioRepository from "../repositorys/usuario.repository.js";

dotenv.config();


export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.sendStatus(401);
        }

        const parts = authorization.split(" ");

        if (parts.length !== 2) {
            return res.sendStatus(401);
        }

        const [schema, token] = parts;

        if (schema !== "Bearer") {
            return res.sendStatus(401);
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if(error){
                return res.status(401).send({message: "Token invalid"});
            }
            //console.log(decoded);

            const user = await usuarioRepository.findByIdUserRepository(decoded.id);

            //console.log(user);

            req.userId = user.id;

            next();
        });
        

        
    } catch (err) {
        res.status(500).send({ message: err.message });
    }

}