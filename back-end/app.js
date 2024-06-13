import express from "express";
import postRoute from "./router/post.router.js";
import authRoute from "./router/auth.router.js";
import testRoute from "./router/test.router.js";
import userRoute from "./router/user.router.js";
import messageRoute from "./router/message.router.js";
import chatRoute from "./router/chat.router.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import logger from "./utilities/logger/index.js";

const morganFormat = ":method :url :status :response-time ms";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);

console.log("object");
app.listen(8080, () => {
  console.log("port is running on 8080");
});

//TODO: IMPLIMENT THE MORAGAN FOR LOGING THE HTTP REQUEST . TRY TO IMPLIMENT WINSTON [OTHER THAN MORAGAN]
