import { Router } from "express";
import * as c from "../controllers/contactController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

// public reads
router.get("/", c.getAll);
router.get("/:id", c.getById);

// protected writes
router.post("/", requireAuth, c.create);
router.put("/:id", requireAuth, c.update);
router.delete("/:id", requireAuth, c.remove);
router.delete("/", requireAuth, c.removeAll);

export default router;
