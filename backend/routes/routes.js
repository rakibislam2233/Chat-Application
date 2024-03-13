import { Router } from "express";
import { userRoutes } from "../modules/User/user.routes.js";
import { messageRoutes } from "../modules/Message/message.routes.js";
import { conversationRoutes } from "../modules/Conversation/conversation.routes.js";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    routes: userRoutes,
  },
  {
    path: "/conversation",
    routes: conversationRoutes,
  },
  {
    path: "/messages",
    routes: messageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
