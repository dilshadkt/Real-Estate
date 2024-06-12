import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/post.controller.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, createPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

export default router;
