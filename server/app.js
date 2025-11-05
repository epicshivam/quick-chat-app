import express from "express";
import authController from "./controllers/auth.controller.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authController);


export default app;