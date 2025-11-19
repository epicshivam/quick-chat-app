import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req,res) => {
   try {
     const user = await User.findOne({email : req.body.email});
    
    if(user) {
        return res.status(409).json({
            message : "User Already Exists!",
            success : false,
        })
    }

    const hashedPassword = await bcrypt.hash(req.body.password,10);
    req.body.password = hashedPassword;

    const newUser = new User(req.body);
    await newUser.save();
    
    res.status(201).json({
        message : "User Created Successfully.",
        success:true
    })

   } catch (error) {
    res.status(500).json({
        message : error.message,
        success:false
    })
   }
});

router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({email:req.body.email}).select("+password");

        if(!user) {
            return res.status(404).json({
                message : "User does not exist with this email.",
                success: false,
            });
        }

        const isValid = await bcrypt.compare(req.body.password, user.password);

        if(!isValid) {
            return res.status(400).json({
                message : "Incorrect password.",
                success: false,
            });
        }

        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn:"1d"});

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            user: {
                _id: user._id,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success:false
        });
    }
});

export default router;
