import { Router } from "express";
import usuarioController from "../controllers/usuario.controller.js";
import { validId, validUsuario } from "../middlewares/global.middlewares.js";

const route = Router();

route.get("/", usuarioController.findAllUsersController);
route.get("/:id", /*validId, validUsuario,*/ usuarioController.findByIdUserController)
route.post("/signup", usuarioController.createUsuarioController);
route.patch("/update/:id", validId, validUsuario, usuarioController.updateUserController);
/*route.delete("/delete/:id", validId, validUsuario, usuarioController.deleteUsuario );*/

export default route;