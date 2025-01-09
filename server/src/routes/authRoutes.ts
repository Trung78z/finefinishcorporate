import { Router } from "express";
import { clearToken, loginController, refreshToken, registerController } from "../controllers/AuthController";


const router = Router();

router.post("/login", loginController);
router.get("/refresh-token", refreshToken);
router.get("/clear-token", clearToken);
router.post("/register", registerController);
export default router;
