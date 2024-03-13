import express from "express";
import { conversationController } from "./conversationController.js";
import protectRoute from "../../middleware/protectRoute.js";
const router = express.Router();

router.get("/", protectRoute, conversationController.getConversation);

export const conversationRoutes = router;
