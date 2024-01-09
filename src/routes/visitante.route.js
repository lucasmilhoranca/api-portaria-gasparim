import { Router } from "express";
import visitanteController from "../controllers/visitante.controller.js";
import { validId, validUser, validCpf } from "../middlewares/global.middlewares.js";

const route = Router();

route.post("/", validCpf, visitanteController.createVisitante); //descomentar quando quiser validar cpf
route.patch("/:id", validId, validUser, visitanteController.updateVisitante);
//route.delete("/delete/:id", validId, validUser, visitanteController.deleteVisitante)(rota de pessoas)

export default route;