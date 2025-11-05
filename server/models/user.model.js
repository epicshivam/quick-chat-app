import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
        trim: true,
        minlength: 1, 
    },
    lastName : {
        type:String,
        required:true,
        trim: true,
        inlength: 1, 
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password: {
        type:String,
        required:true,
    }
}, {timestamps:true})

const User = mongoose.model("users", userSchema);

export default User;