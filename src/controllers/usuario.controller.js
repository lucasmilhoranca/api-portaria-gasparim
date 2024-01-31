import usuarioService from "../services/usuario.service.js";

export default class UsuarioController {

    async createUsuarioController(req, res) {
        try {
            const { usuario, password } = req.body;

            const user = await usuarioService.createUsuarioService({ usuario, password });

            return res.status(201).send(user);
        } catch (err) {
            return res.status(404).send({ message: err.message });
        }
    }

    async findAllUsersController(req, res) {
        try {
            const usuarios = await usuarioService.findAllUsersService();

            return res.send(usuarios);
        } catch (err) {
            return res.status(404).send({ message: err.message });
        }
    }

    async findByIdUserController(req, res) {
        try {
            const usuario = await usuarioService.findByIdUserService(req.params.id);

            res.send(usuario);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findByIdTokenController(req, res) {
        try {
            const id = req.userId;

            const user = await usuarioService.findByIdUserService(id);

            res.send(user);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async updateUserController(req, res) {
        try {
            const { usuario, password } = req.body;

            const id = req.params.id;

            const updatedUser = await usuarioService.updateUserService(
                id,
                usuario,
                password
            );

            res.send(updatedUser);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }
}

/*
const createUsuarioController = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const user = await usuarioService.createUsuarioService({ usuario, password });

        return res.status(201).send(user);

    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}
*/

/*
const findAllUsersController = async (req, res) => {
    try {
        const usuarios = await usuarioService.findAllUsersService();

        return res.send(usuarios);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}
*/

/*
const findByIdUserController = async (req, res) => {
    try {
        const usuario = await usuarioService.findByIdUserService(req.params.id);

        res.send(usuario);

    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}
*/

/*
const updateUserController = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const id = req.params.id;

        const updatedUser = await usuarioService.updateUserService(
            id,
            usuario,
            password,
        );

        res.status(201).send(updatedUser);

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}
*/

/*
const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;

        await usuarioService.deleteUsuarioService(id);

        res.send({ message: "User succesfully delete" });


    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
*/

/*export default { createUsuarioController, findAllUsersController, findByIdUserController, updateUserController }*/