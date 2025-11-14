import { Router } from "express";
import * as p from "../controllers/projectController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", p.getAll);
router.get("/:id", p.getById);
router.post("/", requireAuth, p.create);
router.put("/:id", requireAuth, p.update);
router.delete("/:id", requireAuth, p.remove);
router.delete("/", requireAuth, p.removeAll);

export default router;
