import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import {
  getUsersForSidebar,
  searchUsers,
  blockUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.post("/search", protectRoute, searchUsers);
router.post("/block", protectRoute, blockUser);

export default router;
