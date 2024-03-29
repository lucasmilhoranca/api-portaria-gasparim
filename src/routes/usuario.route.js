import { Router } from "express";
import UsuarioController from "../controllers/usuario.controller.js";
import { validId, validUsuario } from "../middlewares/global.middlewares.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const usuarioController = new UsuarioController();

const route = Router();

route.get("/signin", authMiddleware, usuarioController.findByIdTokenController);
route.get("/", usuarioController.findAllUsersController);
route.get("/:id", /*validId, validUsuario,*/ usuarioController.findByIdUserController)
route.post("/signup", usuarioController.createUsuarioController);
route.patch("/update/:id", validId, validUsuario, usuarioController.updateUserController);
/*route.delete("/delete/:id", validId, validUsuario, usuarioController.deleteUsuario );*/

export default route;