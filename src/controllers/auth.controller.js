import bcrypt from 'bcrypt';
import { generateToken, loginService } from '../services/auth.service.js';

const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const user = await loginService(usuario);

        if (!user) {
            return res.status(404).send({ message: "User or Password not found" });
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            return res.status(404).send({ message: "User or Password not found" });
        }

        const token = generateToken(user.id);

        res.send({ token });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export { login };