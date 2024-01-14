import { Router } from "express";
import funcionarioController from "../controllers/funcionario.controller.js";
import { validId, validUser, validCpf } from "../middlewares/global.middlewares.js";

const route = Router(); 

route.post("/", validCpf, funcionarioController.createFuncionarioController); //descomentar quando quiser validar cpf
route.patch("/:id", validId, validUser, funcionarioController.updateFuncionarioController);
//route.delete("/delete/:id", validId, validUser, funcionarioController.deleteFuncionario);(rota de pessoas)

export default route;