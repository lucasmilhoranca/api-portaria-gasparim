import { Router } from "express";
import caminhoneiroController from "../controllers/caminhoneiro.controller.js";
import { validId, validUser, validCpf } from "../middlewares/global.middlewares.js";

const route = Router();

route.post("/", validCpf, caminhoneiroController.createCaminhoneiroController);//descomentar quando quiser validar cpf
route.patch("/:id", validId, validUser, caminhoneiroController.updateCaminhoneiroController);
//route.delete("/delete/:id", validId, validUser, caminhoneiroController.deleteCaminhoneiro)(rota de pessoas)

export default route;