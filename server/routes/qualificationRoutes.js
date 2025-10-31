import { Router } from "express";
import * as q from "../controllers/qualificationController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", q.getAll);
router.get("/:id", q.getById);
router.post("/", requireAuth, q.create);
router.put("/:id", requireAuth, q.update);
router.delete("/:id", requireAuth, q.remove);
router.delete("/", requireAuth, q.removeAll);

export default router;
