import { Router } from "express";
import * as c from "../controllers/contactController.js";

const router = Router();

router.get("/", c.getAll);
router.get("/:id", c.getById);
router.post("/", c.create);
router.put("/:id", c.update);
router.delete("/:id", c.remove);
router.delete("/", c.removeAll);

export default router;
