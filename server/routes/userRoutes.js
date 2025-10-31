import { Router } from "express";
import { register, login, getAllUsers } from "../controllers/userController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", requireAuth, getAllUsers); // optional admin/testing

export default router;
