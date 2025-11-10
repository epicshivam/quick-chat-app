import express from "express";
import User from "../models/user.model.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("get-logged-user", authMiddleware, async (req,res)=>{
    try {
        const user = await User.findOne({_id:req.user});

        if(!user) {
            res.status(400).json({
                message:"User not found",
                success:false
            })
        }

        res.status(200).json({
            message:"User found!",
            success:true,
            data:user,
        })
    } catch (error) {
        res.status(401).json({
            message:"Invalid Token",
            success:false
        })
    }
})