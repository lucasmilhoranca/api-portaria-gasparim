import { Router } from "express";
import controleController from "../controllers/controle.controller.js";
import { activeCheckIn, activeCheckOut } from "../middlewares/controle.middlewares.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const route = Router();

route.get("/", controleController.findAll);
route.post("/checkin", authMiddleware, activeCheckIn, controleController.checkIn);
route.patch("/checkout", authMiddleware, activeCheckOut, controleController.checkOut);


export default route;