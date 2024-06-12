import express from "express";
import {
  getChat,
  getChats,
  addChat,
  readChat,
} from "../controller/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.post("/read/:id", verifyToken, readChat);

export default router;
