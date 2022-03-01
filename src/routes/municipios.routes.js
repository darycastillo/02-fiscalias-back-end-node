import { Router } from "express";
import * as municipiosCtrl from "../controllers/municipios.controller";

const router = Router();

router.get("/", municipiosCtrl.getMunicipios);
router.get("/:Id", municipiosCtrl.getMunicipioByID);

export default router;
