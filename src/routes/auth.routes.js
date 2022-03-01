import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { verifySingup, authJwt } from "../middlewares";

const router = Router();

/**
 * @swagger
 * /proceso-penal:
 *   post:
 *     summary: "Crear un proceso penal"
 *     description: Crear nuevo proceso penal
 *     tags: [AUTH]
 *     security:
 *         - Bearer: []
 *     parameters:
 *       - $ref: "#/parameters/systemHeader"
 *       - $ref: "#/parameters/cuiHeader"
 *       - $ref: "#/parameters/productPostModel"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Ocurrió un error.
 */
router.post(
  "/singup",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySingup.checkDuplicateUserOrEmail,
  ],
  authCtrl.signUp
);

router.post("/singin", authCtrl.signIn);

export default router;
