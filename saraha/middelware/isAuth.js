import  jwt  from "jsonwebtoken";
import { User } from '../db/model/user.model.js';

export const isAuth = async (req , res, next)=>{
const {token} = req.headers;
if (!token){
    next(new Error("token must be found"));
}

 //decode
const payload = jwt.verify(token , process.env.TOKENKEY);
//check user existance

const user = await User.findById(payload.id)

if (!user){
    next(new Error("user not found"));
}
req.user = user;

return next();
}