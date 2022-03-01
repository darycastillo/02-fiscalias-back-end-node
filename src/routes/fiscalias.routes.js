import { Router } from "express";
import * as fiscaliasCtrl from "../controllers/fiscalias.controller";

const router = Router();

router.get("/", fiscaliasCtrl.getFiscalias);
router.get("/:Id", fiscaliasCtrl.getFiscaliasByID);

export default router;
