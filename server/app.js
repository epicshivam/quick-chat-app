import express from "express";
import authController from "./controllers/auth.controller.js";
import userController from "./controllers/user.controller.js";
import chatController from "./controllers/chat.controller.js";
import messageController from "./controllers/message.controller.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authController);
app.use("/api/user", userController);
app.use("/api/chat", chatController);
app.use("/api/message", messageController);

export default app;