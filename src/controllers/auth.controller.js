import { loginService } from "../services/auth.service.js";

const loginController = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const token = await loginService({usuario, password});

        res.send({ token });

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export default { loginController };