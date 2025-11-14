import { Router } from "express";
import * as u from "../controllers/userController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", u.getAll);
router.get("/:id", u.getById);
router.post("/", requireAuth, u.create);
router.put("/:id", requireAuth, u.update);
router.delete("/:id", requireAuth, u.remove);
router.delete("/", requireAuth, u.removeAll);

export default router;
