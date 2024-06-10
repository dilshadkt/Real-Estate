import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { shouldBeLogedIn } from "../controller/test.controller.js";
const router = express.Router();

router.get("/shouldbelogedin", verifyToken, shouldBeLogedIn);

export default router;
