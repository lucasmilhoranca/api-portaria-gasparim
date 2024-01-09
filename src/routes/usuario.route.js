import { Router } from "express";
import usuarioController from "../controllers/usuario.controller.js";
import { validId, validUsuario } from "../middlewares/global.middlewares.js";

const route = Router();

route.get("/", usuarioController.findAllUsuarios);
route.get("/:id", validId, validUsuario, usuarioController.findByIdUsuario)
route.post("/signup", usuarioController.createUsuario);
route.patch("/update/:id", validId, validUsuario, usuarioController.updateUsuario);
route.delete("/delete/:id", validId, validUsuario, usuarioController.deleteUsuario );

export default route;