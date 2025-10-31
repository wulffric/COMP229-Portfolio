import { Router } from "express";
import * as p from "../controllers/projectController.js";

const router = Router();

router.get("/", p.getAll);
router.get("/:id", p.getById);
router.post("/", p.create);
router.put("/:id", p.update);
router.delete("/:id", p.remove);
router.delete("/", p.removeAll);

export default router;
