import usuarioService from "../services/usuario.service.js";
import bcrypt from "bcrypt";

const createUsuario = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        if (!usuario || !password) {
            res.status(400).send({ message: "Subimt all fields for registration" });
        }

        const user = await usuarioService.createUsuarioService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Error creating User" });
        }

        res.status(201).send({
            message: "User created successfully",
            usuario: {
                usuario: user.usuario,
                password: user.password,
            },
        });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.findAllUsuariosService();

        if (usuarios.length === 0) {
            return res.status(400).send({ message: "There are not registred users" });
        }

        res.send(usuarios);

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findByIdUsuario = async (req, res) => {
    try {
        const usuario = req.user;

        res.send(usuario);

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const updateUsuario = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        if (!usuario && !password) {
            res.status(400).send({ message: "Submit at least one fild for update" });
        }

        const id = req.params.id;

        const newpassword = await bcrypt.hash(password, 10);

        await usuarioService.updateUsuarioService(
            id,
            usuario,
            newpassword,
        );

        res.send({ message: "User succesfully update" });


    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;

        await usuarioService.deleteUsuarioService(id);

        res.send({ message: "User succesfully delete" });


    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default { createUsuario, findAllUsuarios, findByIdUsuario, updateUsuario, deleteUsuario }