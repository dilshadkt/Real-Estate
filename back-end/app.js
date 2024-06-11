import express from "express";
import postRoute from "./router/post.router.js";
import authRoute from "./router/auth.router.js";
import testRoute from "./router/test.router.js";
import userRoute from "./router/user.router.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);

console.log("object");
app.listen(8080, () => {
  console.log("port is running on 8080");
});
