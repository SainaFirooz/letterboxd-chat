import express from "express";
import { deleteConversation } from "../controllers/conversation.controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.delete("/:id", protectRoute, deleteConversation);

export default router;
