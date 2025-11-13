import mongoose from "mongoose";
import express from "express";
const router = express.Router();
import Message from "../models/message.model.js";
import Chat from "../models/chat.model.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.post('/new-message', authMiddleware, async (req,res) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();

        const currentChat = await Chat.findById(req.body.chatId);
        currentChat.lastMessage = savedMessage._id;
        currentChat.unreadMessageCount += 1;
        await currentChat.save();

        res.status(201).json({
            message: "Message sent successfully",
            success: true,
            data: savedMessage
        })
    } catch (error) {
        res.status(500).json({
            message:error.message,
            success:false
        })
    }
})

export default router;