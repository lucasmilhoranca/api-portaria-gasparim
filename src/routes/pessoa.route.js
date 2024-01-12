import { Router } from "express";
import pessoaController from "../controllers/pessoa.controller.js";
import { validId, validUser } from "../middlewares/global.middlewares.js";
 
const route = Router();

route.get("/all", pessoaController.findAllPessoasController);
route.get("/:id", /*validId, validUser,*/ pessoaController.findByIdPessoaController);
route.delete("/delete/:id", pessoaController.deltePessoaController);

export default route;