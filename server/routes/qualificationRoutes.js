import { Router } from "express";
import * as q from "../controllers/qualificationController.js";

const router = Router();

router.get("/", q.getAll);
router.get("/:id", q.getById);
router.post("/", q.create);
router.put("/:id", q.update);
router.delete("/:id", q.remove);
router.delete("/", q.removeAll);

export default router;
