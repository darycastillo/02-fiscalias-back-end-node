import { Router } from "express";
import * as departamentoCtrl from "../controllers/departamento.controller";

const router = Router();

router.get("/", departamentoCtrl.getDepartamentos);
router.get("/:Id", departamentoCtrl.getDepartamentoByID);

export default router;
