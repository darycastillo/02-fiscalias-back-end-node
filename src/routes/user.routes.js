import { Router } from "express";
import * as userCtrl from "../controllers/user.controller";
/* Middelwares */
import { authJwt } from "../middlewares";

const router = Router();

router.post("/", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.crateUser);

export default router;
