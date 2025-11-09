import jwt from "jsonwebtoken";


export const authMiddleware = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if(!token) {
            return res.status(401).json({message:"Token not found", success:false});
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        
        req.user = decodedToken.userId;

        next();
    } catch (error) {
        res.status(401).json({
            message:"Invalid Token",
            success:false
        })
    }
}