import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import authMiddleware from "../middlewares/authMiddleware";
import Chat from "../models/chat.model.js";


router.post("/create-new-chat", authMiddleware, async (req, res)=> {
    try {

        const chat = new Chat(req.body);
        const savedChat = await chat.save();

        res.status(201).json({
            message:`Chat created successfully`,
            success:true,
            data:savedChat
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
})


export default router;