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

router.get("/test", getPosts);
router.get("/test", getPost);
router.post("/test", verifyToken, createPost);
router.put("/test", verifyToken, updatePost);
router.delete("/test", verifyToken, deletePost);

export default router;
