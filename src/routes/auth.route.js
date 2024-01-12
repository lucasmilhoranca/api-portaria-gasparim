import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const route = Router();

route.post('/', authController.loginController);

export default route;