import { Router } from "express";
import * as u from "../controllers/userController.js";

const router = Router();

router.get("/", u.getAll);
router.get("/:id", u.getById);
router.post("/", u.create);
router.put("/:id", u.update);
router.delete("/:id", u.remove);
router.delete("/", u.removeAll);

export default router;
