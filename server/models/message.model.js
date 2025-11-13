import { text } from "express";
import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema({
    chatId : {
        type : mongoose.Schema.Types.ObjectId, ref : "chats",
    },
    sender : {
        type : mongoose.Schema.Types.ObjectId, ref : "users",
    },
    text : {
        type : String,
        required,
    },
    read : {
        type : Boolean,
        default : false
    }
})

const Message = mongoose.model("messages", messageSchema);

export default Message;