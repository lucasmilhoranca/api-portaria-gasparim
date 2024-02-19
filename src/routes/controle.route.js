import { Router } from "express";
import controleController from "../controllers/controle.controller.js";
import { activeCheckIn, activeCheckOut } from "../middlewares/controle.middlewares.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const route = Router();

route.get("/", controleController.findAllChecksController);
route.get("/:cpf/status", controleController.findStatusController)
route.get("/:cpf", controleController.findChecksByCpfController)
route.post("/checkin", authMiddleware, activeCheckIn, controleController.checkInController);
route.patch("/checkout", authMiddleware, activeCheckOut, controleController.checkOutController);

export default route;