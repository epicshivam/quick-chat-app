import express from "express";
import User from "../models/user.model.js"
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/signup", async (req,res) => {
   try {
     const user = await User.findOne({email : req.body.email});
    
    if(user) {
        return res.send({
            message : "User Already Exists!",
            success : false,
        })
    }

    const hashedPassword = await bcrypt.hash(req.body.password,10);
    req.body.password = hashedPassword;

    const newUser = new User(req.body);
    await newUser.save();
    
    res.send({
        message : "User Created Successfully.",
        success:true
    })

   } catch (error) {
    res.send({
        message : error.message,
        success:false
    })
   }
})

export default router;