import usuarioRepository from "../repositorys/usuario.repository.js";
import bcrypt from "bcrypt";

const createUsuarioService = async ({ usuario, password }) => {
    if (!usuario || !password) throw new Error("Subimt all fields for registration");

    const userExists = await usuarioRepository.findByUserRepository(usuario);

    if (userExists) throw new Error("User already exists");

    const body = { usuario, password };

    const user = await usuarioRepository.createUsuarioRepository(body);

    if (!user) throw new Error("Error creating User");

    return {
        message: "User created successfully",
        usuario: {
            usuario: user.usuario,
            password: user.password,
        },
    };
}

const findAllUsersService = async () => {
    const usuarios = await usuarioRepository.findAllUsuariosRepository();

    if (usuarios.length === 0) throw new Error("There are not registred users");

    return usuarios;
}

const findByIdUserService = async (id) => {

    const usuario = await usuarioRepository.findByIdUserRepository(id);

    if (!usuario) throw new Error("User not found");

    return usuario;
}

const updateUserService = async (id, usuario, password) => {

    if (!usuario && !password) throw new Error("Submit at least one fild for update");

    const userExists = await usuarioRepository.findByIdUserRepository(id);

    if (!userExists) throw new Error("User not found");

    const newpassword = await bcrypt.hash(password, 10);

    const user = await usuarioRepository.updateUsuarioRepository(
        id,
        usuario,
        newpassword,
    );

    return{
        message: "User succesfully update",
        user
    };
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

export default { createUsuarioService, findAllUsersService, findByIdUserService, updateUserService, deleteUsuario }