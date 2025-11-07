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

router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({email:req.body.email});

        if(!user) {
            return res.send({
                message : "User doesnt exist with this email.",
                success: false,
            })
        }

        const isValid = await bcrypt.compare(req.body.password, user.password);

        if(!isValid) {
            return res.send({
                message : "User doesnt exist with this email.",
                success: false,
            })
        }

        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn:"1d"});

        res.send({
            message:"User Logged In Successfully!",
            success:true
        })

    } catch (error) {
        
    }
})

export default router;