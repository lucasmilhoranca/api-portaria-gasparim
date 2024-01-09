import { Router } from "express";
import pessoaController from "../controllers/pessoa.controller.js";
import { validId, validUser } from "../middlewares/global.middlewares.js";
 
const route = Router();

route.get("/all", pessoaController.findAll);
route.get("/:id", validId, validUser, pessoaController.findByIdPessoa);
route.delete("/delete/:id", pessoaController.deltePessoa);

export default route;