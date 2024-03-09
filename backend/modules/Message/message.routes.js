import express from "express";
import protectRoute from "../../middleware/protectRoute.js";
import { messageController } from "./message.controller.js";
const router = express.Router();

router.post(
  "/sendMessage/:receiverId",
  protectRoute,
  messageController.sendMessage
);
router.get("/:receiverId", protectRoute, messageController.getMessage);

export const messageRoutes = router;
