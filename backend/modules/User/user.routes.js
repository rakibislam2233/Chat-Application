import { Router } from "express";
import { userController } from "./user.controller.js";
import protectRoute from "../../middleware/protectRoute.js";
const router = Router();
router.post("/register", userController.userRegister);
router.post("/login", userController.userLogin);
router.get('/getUsers',protectRoute,userController.getAllUser)
export const userRoutes = router;
